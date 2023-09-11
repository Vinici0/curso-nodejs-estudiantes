/* 1 Importar Modelo */



/* 2 Pasar del index.js a este archivo las funciones asincronas */
const getAll = async (req, res) => {
    try {
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador"
        })
    }
}


/*  3 Exportar la funciones */
model.exports = {
}