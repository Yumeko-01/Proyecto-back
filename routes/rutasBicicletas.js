const express = require('express');
const router = express.Router();
const bicicletaController = require('../controllers/bicicletaController'); // Verifica la ruta correcta

// Define tus rutas aquí
router.get('/', bicicletaController.obtenerBicicletas);
router.post('/', bicicletaController.crearBicicleta);
router.put('/:id', bicicletaController.actualizarBicicleta);
router.delete('/:id', bicicletaController.eliminarBicicleta); // Ruta DELETE

module.exports = router;




