var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SaborSchema = Schema({
  sabor_bizcocho: { type: String },
  precio: { type: Number },
});

const Sabor = mongoose.model("sabor", SaborSchema);

module.exports = Sabor;
