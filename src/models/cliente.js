var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
  nombre: { type: String },
  _id: { type: String, default: "tu fucking cedula" },
  direccion: { type: String },
  celular: { type: String },
});

const Cliente = mongoose.model("cliente", ClienteSchema);

module.exports = Cliente;
