const { Router } = require("express");
const router = Router();

var controllerCliente = require("../controllers/ControllerCliente");

router.get("/prueba", controllerCliente.prueba);
router.post("/api/crearCliente", controllerCliente.crearCliente);

module.exports = router;
