const { Router } = require("express");
const router = Router();
const checkAuthAdmin = require("../../middleware/check-auth-admin");
const checkAuth = require("../../middleware/check-auth");

var controllerCliente = require("../controllers/ControllerCliente");
var controllerCobertura = require("../controllers/ControllerCobertura");
var controllerTamano = require("../controllers/ControllerTamano");
var controllerEstado = require("../controllers/ControllerEstado");
var controllerSabor = require("../controllers/ControllerSabor");
var controllerPedido = require("../controllers/ControllerPedido");
var controllerProducto = require("../controllers/ControllerProducto");
var controllerAdmin = require("../controllers/ControllerAdmin");

router.get("/", controllerCliente.home);
router.post("/cliente", controllerCliente.crearCliente);
router.get("/cliente", checkAuthAdmin, controllerCliente.consultarClientes);
router.get("/cliente/:id", checkAuthAdmin, controllerCliente.consultarCliente);
router.post("/producto", controllerProducto.crearProducto);
router.get("/producto", checkAuthAdmin, controllerProducto.consultarProductos);
router.get(
  "/producto/:id",
  checkAuthAdmin,
  controllerProducto.consultarProductos
);
router.get("/producto/coberturas", controllerCobertura);
router.get("/producto/tamanos", controllerTamano);
router.post("/pedido", checkAuth, controllerPedido.crearPedido);
router.get("/pedido", checkAuthAdmin, controllerPedido.consultarPedidos);
router.get("/pedido/:id", checkAuthAdmin, controllerPedido.consultarPedido);
router.get("/pedido/estados", controllerEstado);
router.get("/producto/sabores", controllerSabor);
router.post("/cliente/login", controllerCliente.loginCliente);
router.post("/admin/login", controllerAdmin.loginAdmin);
router.post("/admin", controllerAdmin.crearAdmin);


module.exports = router;
