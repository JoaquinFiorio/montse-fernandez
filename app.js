const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const vistaRutas = require("./src/rutas/rutas");
const app = express();
dotenv.config();

/* ARCHIVOS ACCESIBLES PARA TODOS, RUTA ABSOLUTA */
app.use(express.static(path.join(__dirname, 'src/public')));

/* RUTAS */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/montse", vistaRutas);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
    mongoose.connect(process.env.DB_URI)
        .then((result) => console.log("Conexion exitosa"))
        .catch((err) => console.log(err))
});