const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/main');


router.get('/', ctrl.home);
router.get('/contacto', ctrl.contacto);

module.exports = router;