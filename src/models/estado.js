var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EstadoSchema = Schema({
  estado_pedido: { type: String },
});

const Estado = mongoose.model("estado", EstadoSchema);

module.exports = Estado;
