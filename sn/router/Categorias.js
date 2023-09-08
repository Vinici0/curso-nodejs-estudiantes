const { Router } = require("express");
const router = Router();
const {categoriaGet} = require('../controllers/categorias');
router.get('/', categoriaGet);

module.exports = router;
