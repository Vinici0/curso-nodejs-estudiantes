const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

/*
    Tarea 1
    Realizar una ruta que responda a la petición GET /saludo y devuelva el texto "Hola, ¿cómo estás?".
*/

/*
    Tarea 2
    Realizar una ruta que responda a la petición GET /saludo y devuelva el texto "Hola, ¿cómo estás?".
*/

app.listen(3000, () => {
console.log('Servidor iniciado en http://localhost:3000');
});