const Cobertura = require("../models/cobertura");

function getCobertura(req, res) {
  Cobertura.find().then((response) => {
    res.status(200).json(response);
  });
}

module.exports = getCobertura;
