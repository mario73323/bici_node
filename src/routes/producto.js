const express = require('express');
const router = express.Router();

const productoControler = require('../controllers/productoController');

router.get('/panel/producto',productoControler.list);
router.post('/panel/addp',productoControler.save);
router.get('/panel/producto/delete/:id',productoControler.delete);
router.get('/panel',productoControler.godash);
router.get('/panel/producto/registro', productoControler.goregis);

//editar
router.get('/panel/producto/editar/:id', productoControler.buscar);
router.post('/panel/producto/editar/:id', productoControler.editar);


module.exports = router;