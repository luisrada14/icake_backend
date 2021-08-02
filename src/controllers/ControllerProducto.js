const Pedido = require("../models/pedido");

function crearProducto(req, res) {
  const miProducto = new Pedido({
    mensaje: req.body.mensaje,
    sabor_torta: req.body.sabor_torta,
    tamano_torta: req.body.tamano_torta,
    cobertura_torta: req.body.cobertura_torta,
    precio_total: req.body.precio_torta,
  });

  miProducto.save().then((result) => {
    res.status(201).json({
      message: result,
    });
  });
}

function consultarProductos(req, res) {
  Producto.find().then((response) => {
    res.status(200).json(response);
  });
}

function consultarProducto(req, res) {
  Pedido.findById(req.params.id).then((producto) => {
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: "producto no encontrado" });
    }
  });
}

module.exports = { crearProducto, consultarProducto, consultarProductos };
