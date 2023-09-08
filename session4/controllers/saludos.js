const { saludos} = require("../models/saludo");

const saludoGet = (req, res) => {
  const saludosAll = saludos;
  res.json(saludosAll);
};

//saludos por nombre
const saludoGetNombre = (req, res) => {
  const { nombre } = req.params;
  const saludo = saludos.find((saludo) => saludo === nombre);
  if (!saludo) {
    res.status(404).json({
      msg: `No existe un saludo con el nombre ${nombre}`,
    });
  }
  res.json(saludo);
};

/*
    Tarea: Controlador de nombre
    Ayuda:

    TODO: const nombreGet = (req, res) => {
*/


/*
    Tarea: 
*/


module.exports = {
  saludoGet,
  saludoGetNombre,
};
