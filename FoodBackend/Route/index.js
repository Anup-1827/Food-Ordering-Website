const express = require('express');
const router = express.Router();

// Import Controller
const LoginRegisterController = require('../Controller/LoginRegisterController');


//Creating router for controller
router.get('/login/:username', LoginRegisterController.Login)
router.get('/getData', LoginRegisterController.getData)


module.exports = router;