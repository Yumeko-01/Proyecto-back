// Asegúrate de que esta línea esté solo una vez al principio del archivo
const Bicicleta = require('../models/Bicicleta');

// Obtener todas las bicicletas
exports.obtenerBicicletas = async (req, res) => {
    try {
        const bicicletas = await Bicicleta.find();
        res.json(bicicletas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las bicicletas', error });
    }
};

// Crear una nueva bicicleta
exports.crearBicicleta = async (req, res) => {
    try {
        const nuevaBicicleta = new Bicicleta(req.body);
        await nuevaBicicleta.save();
        res.status(201).json(nuevaBicicleta);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la bicicleta', error });
    }
};


// Actualizar una bicicleta por ID
exports.actualizarBicicleta = async (req, res) => {
    try {
        const bicicletaActualizada = await Bicicleta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bicicletaActualizada) {
            return res.status(404).json({ mensaje: 'Bicicleta no encontrada' });
        }
        res.json(bicicletaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la bicicleta', error });
    }
};

// Eliminar una bicicleta por ID
exports.eliminarBicicleta = async (req, res) => {
    try {
        const bicicletaEliminada = await Bicicleta.findByIdAndDelete(req.params.id);
        if (!bicicletaEliminada) {
            return res.status(404).json({ mensaje: 'Bicicleta no encontrada' });
        }
        res.json({ mensaje: 'Bicicleta eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la bicicleta', error });
    }
};
