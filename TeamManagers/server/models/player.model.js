const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: { type: String, 
    minlength: [2, "Name must be 2 characters"]},
    position:{type:String},
    gameOne:{type:String, default:"undecided"},
    gameTwo:{type:String, default:"undecided"},
    gameThree:{type:String, default:"undecided"},

}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);