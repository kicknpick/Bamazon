// DEPENDENCIES
var path = require("path");

module.exports = function(app) {
  // HTML GET Requests

  app.get("/app", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  // app.get("/reserve", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/reserve.html"));
  // });

  // // If no matching route is found default to home
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });
};