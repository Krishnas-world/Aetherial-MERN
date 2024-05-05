const express = require('express');
const signup = require('../controllers/auth.controller.js'); //! Call for the logic part
const router = express.Router();

router.post('/signup',signup) //! Give a route and logic for the same

module.exports = router;