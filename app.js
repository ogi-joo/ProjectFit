const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routeExercise = require('./routes/exercise');

app.use('/vezba', routeExercise);

/*mongoose.connect('mongodb+srv://root:ogiogi123@cluster0.jhh6l.mongodb.net/<dbname>?retryWrites=true&w=majority', () => {
    console.log('connected')
}); */

app.listen('3000')
