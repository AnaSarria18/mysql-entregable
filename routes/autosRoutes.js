const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');

router.post('/autos',autosController.registrarAutos);
router.get('/autos',autosController.autosDisponibles);

module.exports = router;
