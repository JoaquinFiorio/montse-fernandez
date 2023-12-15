const express = require("express");
const router = express.Router();
const path = require("path");
const Comentario = require("../modelos/modelo");

router.get("/", (req, res) => {
    res.render(path.join(__dirname, '../public/index.html'));
})

router.get("/comentarios", async (req, res) => {
    try{
        const comentarios = await Comentario.find();
        return res.json({ comentarios });
    }catch(e){
        return res.status(500).send("Error al obtener los comentarios")
    }
})

router.post("/", async (req, res) => {
    const { escritoPor, contenido } = req.body;
    try {
        const nuevoComentario = await new Comentario({
            escritoPor,
            contenido,
        });
        await nuevoComentario.save();
        return res.redirect("/")
    } catch (error) {
        return res.status(500).send({ message: 'Algo sucedió en el servidor' })
    }
})

module.exports = router;