var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    player1: String,
    player2: String,
    score1: Number,
    score2: Number
});

module.exports = mongoose.model('Game', gameSchema);