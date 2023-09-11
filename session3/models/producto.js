/* 1. Importar  mongoose*/


/* 2. Ubicar el nombre de la colección en singular y en mayúsculas */
const NameSchema = Schema({
    /* 3. Crear un nuevo campo nombre */

    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },

     /* 4. Crear un nuevo campo descripcion */

    disponible: { type: Boolean, defult: true },
    img: { type: String },
});

/*  5. Exportar el modelo */
