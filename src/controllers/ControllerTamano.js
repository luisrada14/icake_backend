const Tamano = require("../models/tamaño");

function getTamano(req, res) {
  Tamano.find().then((response) => {
    res.status(200).json(response);
  });
}

module.exports = getTamano;
