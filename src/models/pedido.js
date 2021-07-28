var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PedidoSchema = Schema({
  comprador: { type: String, ref: "cliente" }, //cliente
  articulo: { type: mongoose.Schema.Types.ObjectId, ref: "producto" }, //producto
  estado_envio: { type: mongoose.Schema.Types.ObjectId, ref: "estado" }, //esetado
});

const Pedido = mongoose.model("pedido", PedidoSchema);

module.exports = Pedido;
