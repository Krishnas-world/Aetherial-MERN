const express = require('express');
const {signup,signin} = require('../controllers/auth.controller.js'); //! Call for the logic part
const router = express.Router();

router.post('/signup',signup) //! Give a route and logic for the same
router.post('/signin',signin) //! Give a route and logic for the same

module.exports = router;