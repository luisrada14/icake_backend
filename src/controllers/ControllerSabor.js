const Sabor = require("../models/sabor");

function getSabor(req, res) {
  Sabor.find().then((response) => {
    res.status(200).json(response);
  });
}

module.exports = getSabor;
