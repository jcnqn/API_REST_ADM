// route: /mutation

const { Router } = require('express');
const { checkDnas } = require('../controllers/dnas.controller')

const router = Router();

router.post('/', checkDnas);

module.exports = router;
