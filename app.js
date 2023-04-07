const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user")
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();

//TODO : CONTROLLERS initialized

const passport = require("passport");
const localStrategy = require("passport-local");

const userController = require("./controllers/userController");
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");

mongoose
  .connect("mongodb://localhost:27017/lottery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Established successfull connection");
  })
  .catch((error) => {
    console.log("Oh no error occured");
    console.log(error);
  });

app.set("views", path.join(__dirname, "views"));

const sessionConfig = {
  secret: "koceto",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000, () => {
  console.log("Im listening on port 3000");
});


//MiDDLEWARE
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  } else {
    next();
  }
};

app.get("/login", userController.login);

app.get("/home", homeController.getHomePage);

app.post("/login", userController.loginPost);

app.get("/register", userController.register);

app.post("/register", userController.registerPost);



app.get("/", (req, res) => {
  res.redirect("/home");
});
// Any path not matching one of mine above will hit this ! :)
app.get("*", errorController.getError);

