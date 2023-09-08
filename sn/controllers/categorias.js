const Categoria = require("../models/categoria");

const categoriaGet = async (req, res) => {
  const categories = await Categoria.find();
  res.json(categories);
};

module.exports = {
    categoriaGet
}