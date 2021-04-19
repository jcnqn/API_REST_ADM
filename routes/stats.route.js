const { Router } = require('express');
const { statsController } = require('../controllers/stats.controller')

const router = Router();

router.get('/', statsController);

module.exports = router;
