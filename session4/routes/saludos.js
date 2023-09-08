const { Router } = require("express");
const {saludoGet,saludoGetNombre}= require("../controllers/saludos");
const router = Router();

router.get('/', saludoGet);

router.get('/:nombre', saludoGetNombre);

module.exports = router;

