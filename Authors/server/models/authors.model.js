const mongoose = require('mongoose');
const { User } = require('./user.model');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, 
    minlength: [3, "Name must be 3 characters"]},

    poster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);