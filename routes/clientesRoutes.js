const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/clientes',clientesController.crearCliente);
router.get('/clientes',clientesController.verClientes);

module.exports = router;