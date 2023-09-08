const express = require('express');
const cors = require("cors");

require("./database/config").dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/saludo", require("./routes/saludos"));


app.listen(3000, () => {
console.log('Servidor iniciado en http://localhost:3000');
});