
require("./database/config").dbConnection();
const express = require("express");
const app = express();
app.use(express.json());

const Categoria = require("./models/categoria");
app.get("/", (req, res) => {
  res.send("Hola, mundo!");
});

//  Obtener todas las categorias - publico
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
//   const categoriaDB = await Categoria.findOne({ nombre });
//   if (categoriaDB) {
//       return res.status(400).json({
//           msg: `La categoria ${categoriaDB.nombre} ya existe`
//       });
//   }
  // Generar la data a guardar
  const data = {
    nombre,
  };
  const categoria = new Categoria(data);
  // Guardar DB
  await categoria.save();
  res.status(201).json(categoria);
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
