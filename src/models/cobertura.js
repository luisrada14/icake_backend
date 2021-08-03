var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoberturaSchema = Schema({
  cobertura_torta: { type: String },
  precio: { type: Number },
  // _id: { type: mongoose.Schema.Types.ObjectId },
});

const Cobertura = mongoose.model("cobertura", CoberturaSchema);

module.exports = Cobertura;
