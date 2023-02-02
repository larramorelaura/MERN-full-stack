const PlayerController = require('../controllers/players.controller');


module.exports = function(app){
    app.get('/players', PlayerController.getAllPlayers);
    app.post('/players/addplayer', PlayerController.createPlayer);
    app.delete('/players/:id', PlayerController.deletePlayer);
    app.put('/players/gameOne/:id/', PlayerController.updatePlayerGameOne);
    app.put('/players/gameTwo/:id/', PlayerController.updatePlayerGameTwo);
    app.put('/players/gameThree/:id/', PlayerController.updatePlayerGameThree);
}

