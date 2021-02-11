const express = require('express');
const router = express.Router();

const categoriaControler = require('../controllers/categoriaController');

router.get('/panel/categoria',categoriaControler.list);
router.get('/panel/categoria/delete/:id',categoriaControler.delete);
router.post('/panel/addcat',categoriaControler.save);

//editar


module.exports = router;