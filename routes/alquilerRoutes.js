const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

router.post('/alquiler',alquilerController.crearArquiler);
router.get('/alquiler',alquilerController.historialAlquiler);
router.get('/alquiler/historialAlquiler', alquilerController.historialAlquiler);


module.exports = router;