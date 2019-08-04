const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var usercontroller = require('../controllers/user.controller');
router.get('/users',usercontroller.findAll);
router.post('/users',usercontroller.create);
router.post('/user/validate',usercontroller.validateLogin);
router.get('/users/test', function (req, res) {
    res.send('My App');
  })
module.exports = router;