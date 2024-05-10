const express = require('express');
const {test,signout} = require('../controllers/user.controller.js');
const router = express.Router();

router.get('/test', test)
router.post('/signout', signout)
module.exports = router;