const Cliente = require("../models/cliente");
const jwt = require("jsonwebtoken");

function home(req, res) {
  res.status(200).send({
    message: "Bienvenid@ a la API de iCake 🎂",
    // metodos: [
    //   {
    //     url: "/",
    //     descripcion: "",
    //     body: {
    //       nombre: "string",
    //       correo: "string",
    //     },
    //     params: null,
    //     headers: "mandar el token",
    //   },
    // ],
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

function loginCliente(req, res) {
  let userGet;
  Cliente.findOne({ _id: req.body._id })
    .then((user) => {
      console.log("this is id entered", req.body._id);
      console.log("this is the user", user);
      if (user == null) {
        return res.status(401).json({ message: "Autenticación fallida" });
      } else {
        userGet = user;
      }

      const token = jwt.sign(
        { _id: userGet._id },
        "MisionTic2021_secret_for_iCakeApp",
        { expiresIn: "1h" }
      );

      res
        .status(200)
        .json({ token: token, expiresIn: 3600, userId: userGet._id });
    })
    .catch((err) => {
      console.log("este es el error", err);
      console.log("se fue por la segunda autenticacion fallida");
      return res.status(401).json({ message: "Autenticación fallida" });
    });
}

function consultarCliente(req, res) {
  Cliente.findById(req.params.id).then((cliente) => {
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: "cliente no encontrado" });
    }
  });
}

function consultarClientes(req, res) {
  Cliente.find().then((response) => {
    res.status(200).json(response);
  });
}

module.exports = {
  home,
  crearCliente,
  loginCliente,
  consultarCliente,
  consultarClientes,
};
