var path = require("path");


module.exports = function (app) {

  app.get("/viewProducts", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/viewProducts.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });


};