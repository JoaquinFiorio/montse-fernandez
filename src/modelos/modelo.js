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
    }
})

module.exports = mongoose.model('Comentario', comentarioSchema);