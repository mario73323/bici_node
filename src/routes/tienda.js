const express = require('express');
const router = express.Router();

const tiendaControler = require('../controllers/tiendaController');

router.get('/tienda',tiendaControler.list);
router.get('/producto/:id',tiendaControler.buscar_producto)


module.exports = router;