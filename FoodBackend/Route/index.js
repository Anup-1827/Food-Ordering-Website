const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

// Import Controller
const LoginRegisterController = require('../Controller/LoginRegisterController');
const PaymentController = require('../Controller/PaymentController');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Creating router for controller
router.get('/login/:username', LoginRegisterController.Login)
// router.get('/getData', LoginRegisterController.getData)
// router.post('/userDetails', LoginRegisterController.postUserDetails)
router.post('/payment', PaymentController.PostPayment);
// router.post('/payment',urlencodedParser,(req, res)=>{
//     console.log("Anup");
//     // console.log(req);
//     console.log(req.body);
//     res = "Anup"
//     return res;
// })


module.exports = router;