var express = require('express');
var router = express.Router();
const { register, login, loginfb } = require('../controllers/user-controller')

router.post('/register', register)
router.post('/login', login)
router.post('/loginfb', loginfb)

module.exports = router;
