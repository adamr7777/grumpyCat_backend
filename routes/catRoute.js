

const express = require('express');
require('dotenv').config();

const sendCat = require('../controllers/cat')

const router = express.Router();


router.post('/', sendCat);

module.exports = router;