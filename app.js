var bodyParser = require("body-parser");
var express = require("express");
var app = express();

methodOVerride = require("method-override");
mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
  res.header("Allow", "GET,POST,OPTIONS,PUT,DELETE");
  next();
});

app.use(require("./src/routers/routes"));

module.exports = app;
