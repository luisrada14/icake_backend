const Cliente = require("../models/cliente");

function prueba(req, res) {
  res.status(200).send({
    message: "probando esta cuestion",
  });
}

function crearCliente(req, res) {
  const miCliente = new Cliente({
    nombre: req.body.nombre,
    _id: req.body._id,
    celular: req.body.celular,
    direccion: req.body.direccion,
  });

  miCliente.save().then((result) => {
    res.status(201).json({
      message: result,
    });
  });
}

module.exports = { prueba, crearCliente };
