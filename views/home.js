function mainHtmlSkeleton(content, style, logged) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kichuka Web News</title>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
        <style>

          ${style}
        </style>
      </head>
      <body>
        <header>
          <h1><a href="/kichuka">Kichuka News</a></h1>
        </header>
        <main>
          ${content}
        </main>
        <footer>
          <div class="social-media">
            <a href="#"><i class="fa fa-facebook-square"></i></a>
            <a href="#"><i class="fa fa-twitter-square"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </div>
          <div class="contact-us">
            <h3>Contact Us</h3>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@kichukanews.com</p>
          </div>
        </footer>
      </body>
      </html>
    `;
  }
  
  function createRegistrationView() {
    return `
      <style>
        form {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #F8E0E0; /* Set background color */
        }
  
        label {
          display: block;
          margin-bottom: 10px;
        }
  
        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
          /* Added transition effect for border color and background color */
        }
  
        input[type="text"]:focus,
        input[type="password"]:focus {
          border-color: #28B463; /* Added green border color when input field is focused */
          background-color: #FDFEFE; /* Added background color when input field is focused */
          box-shadow: 0 0 5px #28B463; /* Added box shadow effect when input field is focused */
        }
  
        button[type="submit"] {
          width: 100%;
          background-color: #E74C3C;
          color: white;
          padding: 12px 20px;
          margin-bottom: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <form action="/register" method="POST">
        <label for="name">Name:</label><br>
        <input required type="text" id="name" name="name"><br>
        <label for="email">Email:</label><br>
        <input required type="text" id="email" name="email"><br>
        <label for="profilePic">Profile Pic:</label><br>
        <input type="text" id="profilePic" name="profilePic"><br>
        <label for="password">Password:</label><br>
        <input required type="password" id="password" name="password"><br>
        <button type="submit">Register</button>
      </form>
    `;
  }
  
  
  function createLoginView() {
    return `
            <style>
            form {
                width: 400px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #F8E0E0;
              }
              
              label {
                display: block;
                margin-bottom: 10px;
              }
              
              input[type="text"],
              input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 5px;
                transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Added transition effect for border color and background color */
              }
              
              input[type="text"]:focus,
              input[type="password"]:focus {
                border-color: #28B463; /* Added green border color when input field is focused */
                background-color: #16ff00; /* Added background color when input field is focused */
                box-shadow: 0 0 5px #28B463; /* Added box shadow effect when input field is focused */
              }
              
              button[type="submit"] {
                width: 100%;
                background-color: #007dff;
                color: white;
                padding: 12px 20px;
                margin-bottom: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
                          
            
            </style>
              <form action="/login" method="POST">
                <label for="email">Email:</label><br>
                <input type="text" id="email" name="email"><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password"><br>
                <button type="submit">Log In</button>
              </form>
            `;
  }


  function createHomePage() {
    return `
      <style>
        .container {
          width: 800px;
          margin: 0 auto;
          padding: 40px;
          text-align: center;
        }
  
        h1 {
          font-size: 36px;
          margin-bottom: 20px;
          color: #E74C3C;
        }
  
        p {
          font-size: 18px;
          margin-bottom: 20px;
          color: #444;
        }
  
        img {
          width: 200px;
          border-radius: 50%;
          margin-bottom: 20px;
        }
  
        .button {
          display: inline-block;
          padding: 12px 20px;
          background-color: #E74C3C;
          color: white;
          font-size: 18px;
          text-align: center;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }
  
        .button:hover {
          background-color: #C0392B;
        }
      </style>
      <div class="container">
        <h1>Welcome to the Lottery Portal</h1>
        <img src="https://placekitten.com/200/200" alt="Lottery Image">
        <p>Get a chance to win big with our exciting lottery games! Join now and experience the thrill of winning.</p>
        <a href="/play" class="button">Play Now</a>
      </div>
    `;
  }
  
  
  module.exports = { createRegistrationView, createLoginView, mainHtmlSkeleton , createHomePage };