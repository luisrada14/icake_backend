var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
  mensaje: { type: String },
  sabor_torta: { type: mongoose.Schema.Types.ObjectId, ref: "sabor" }, //sabor
  tamano_torta: { type: mongoose.Schema.Types.ObjectId, ref: "tamano" }, //tamaño
  cobertura_torta: { type: mongoose.Schema.Types.ObjectId, ref: "cobertura" }, //cobertura
});

const Producto = mongoose.model("producto", PedidoSchema); //siempre colocar el nombre de la coleccion en minusc. Mongo agrega una s.

module.exports = Producto;
