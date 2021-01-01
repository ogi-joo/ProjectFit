const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('f');
});

mongoose.connect('mongodb://root:pJ]9ReK{vW1HQWBo@136.244.81.175:27017/?authSource=admin', () => {
    console.log('connected')
});

app.listen('3000')