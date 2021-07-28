var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SaborSchema = Schema({
  sabor_bizcocho: { type: String },
});

const Sabor = mongoose.model("sabor", SaborSchema);

module.exports = Sabor;
