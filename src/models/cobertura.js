var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoberturaSchema = Schema({
  cobertura_torta: { type: String },
});

const Cobertura = mongoose.model("cobertura", CoberturaSchema);

module.exports = Cobertura;
