const express = require('express');

const router = express.Router();

const Vezba = require('../models/Vezba')

router.get('/', (req, res) => {
    res.send('vezba')
})

module.exports = router;