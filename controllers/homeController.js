const homeView = require("../views/home.js");
const st = require("../styles");

const mainContent = homeView.mainHtmlSkeleton;


module.exports.getHomePage = async (req, res) => {
    const html = homeView.createHomePage();
    res.send(html);
};