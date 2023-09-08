const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:root@micloset.fqfzdux.mongodb.net/prueba");

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - Hable con el admin");
  }
};

module.exports = {
  dbConnection,
};
  

