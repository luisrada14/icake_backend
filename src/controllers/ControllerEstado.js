const Estado = require("../models/estado");

function getEstado(req, res) {
  Estado.find().then((response) => {
    res.status(200).json(response);
  });
}

module.exports = getEstado;
