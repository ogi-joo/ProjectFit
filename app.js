const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('f');
});

mongoose.connect('', () => {
    console.log('connected')
});

app.listen('3000')
