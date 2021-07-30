var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TamanoSchema = Schema({
  tamano_libras: { type: String },
  precio: { type: Number },
});

const Tamano = mongoose.model("tamano", TamanoSchema);

module.exports = Tamano;
