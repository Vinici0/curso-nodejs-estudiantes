const express = require('express');
const categoria = require("./router/Categorias");
const app = express();
const cors = require("cors");
require("./database/config").dbConnection();
app.use(express.json());

app.use(cors());
app.use("/categoria", categoria);

app.listen(3000, () => {
console.log('Servidor iniciado en http://localhost:3000');
});