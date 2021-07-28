const { Router } = require("express");
const router = Router();

var controllerCliente = require("../controllers/ControllerCliente");
var controllerCobertura = require("../controllers/ControllerCobertura");
var controllerTamano = require("../controllers/ControllerTamano");
var controllerEstado = require("../controllers/ControllerEstado");
var controllerSabor = require("../controllers/ControllerSabor");

router.post("/crearCliente", controllerCliente.crearCliente);
router.get("/coberturas", controllerCobertura);
router.get("/tamanos", controllerTamano);
router.get("/estados", controllerEstado);
router.get("/sabores", controllerSabor);
router.post("/login", controllerCliente.loginCliente);

module.exports = router;
