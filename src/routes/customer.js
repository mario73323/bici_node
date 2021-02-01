const express = require('express');
const router = express.Router();

const customerControler = require('../controllers/customerController');

router.get('/',customerControler.list);
router.post('/add',customerControler.save);
router.get('/registro', customerControler.goregis);


module.exports = router;