const express = require("express");
const path = require('path');
// const mysql = require("mysql");
const sequelize = require("sequelize");

const app = express();
const db = require('./models');

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//db.sequelize.sync()

require("./routing/apiRouting")(app);
require("./routing/htmlRoutes")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });

});
