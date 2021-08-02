const Pedido = require("../models/pedido");

function crearPedido(req, res) {
  const miPedido = new Pedido({
    comprador: req.body.id_cliente,
    articulo: req.body.id_producto,
    estado_envio: req.body.estado_envio,
  });

  miPedido.save().then((result) => {
    res.status(201).json({
      message: result,
    });
  });
}

function consultarPedidos(req, res) {
  Pedido.find().then((response) => {
    res.status(200).json(response);
  });
}

function consultarPedido(req, res) {
  Pedido.findById(req.params.id).then((pedido) => {
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ message: "pedido no encontrado" });
    }
  });
}

module.exports = { crearPedido, consultarPedidos, consultarPedido };
