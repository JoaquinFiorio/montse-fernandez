const mongoose = require("mongoose");

const comentarioSchema = mongoose.Schema({
    contenido: {
        required: true,
        type: String
    },
    escritoPor: {
        type: String,
        required: true,
        default: 'Anónimo'
    },
    calificacion: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Comentario', comentarioSchema);