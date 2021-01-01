const mongoose =  require('mongoose');

const VezbaSchema = mongoose.Schema({
    title = {
        type: String,
        required = true
    },
    description = {
        type: String,
        required = true
    },
    muscle = {
        type: String,
        required = true
    }
});

module.exports = mongoose.model('Vezbe', VezbaSchema);