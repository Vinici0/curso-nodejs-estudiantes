
const express = require("express");
const Categoria = require("./models/categoria");
require("./database/config").dbConnection();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola, mundo!");
});

// get('/categoria', async function (req, res) {
app.get("/categoria", async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
});

//  Obtener una categoria por id - publico
app.get("/categoria/:id", async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findById(id);
  res.json(categoria);
});

//  Crear categoria - privado - cualquier persona con un token valido
app.post("/categoria", async (req, res) => {
  const nombre = req.body.nombre.toUpperCase();
  console.log(nombre);
  const categoriaDB = await Categoria.findOne({ nombre });
  if (categoriaDB) {
      return res.status(400).json({
          msg: `La categoria ${categoriaDB.nombre} ya existe`
      });
  }
  const data = {
    nombre,
  };
  const categoria = new Categoria(data);
  // Guardar Base de datos
  await categoria.save();
  res.status(201).json(categoria);
});

//  Actualizar categoria
app.put("/categoria/:id", async (req, res) => {
  const { id } = req.params;
  const { estado, nombre} = req.body;
  const categoria = await Categoria.findByIdAndUpdate(id, {estado, nombre});
  res.json(categoria);
});

//  Borrar categoria
app.delete("/categoria/:id", async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findByIdAndDelete(id);
  res.json(categoria);
});


app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});