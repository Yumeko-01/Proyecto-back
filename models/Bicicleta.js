const mongoose = require('mongoose');

const bicicletaSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        enum: ['Montaña', 'Urbana', 'Eléctrica', 'Carretera'],
        required: true
    },
    color: {
        type: String,
        required: false
    },
    año: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Bicicleta', bicicletaSchema);
