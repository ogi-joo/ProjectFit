const express = require('express');

const router = express.Router();

const Vezba = require('../models/Vezba')




    router.post('/', (req, res) => {
        
        const exercise = new Vezba({
            title:req.query.title,
            discription:req.query.discription,
            mucle:req.query.muscle
        });
    
        exercise.save().then(data => {
            console.log(data);
        })
    })
    

module.exports = router;