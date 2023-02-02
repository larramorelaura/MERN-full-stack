const { Player} = require('../models/player.model');

module.exports.getAllPlayers= (req,res)=>{
    Player.find()
    .then(players=>res.json(players))
    .catch(err=>res.json(err))
}

module.exports.createPlayer= (req, res) => {
    const newPlayer=req.body;
        Player.create(newPlayer)
        .then(player=> res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePlayer =(req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err))
}



module.exports.updatePlayerGameOne=  (req,res)=>{
    Player.findOneAndUpdate({_id: req.params.id,}, {gameOne: req.body.value}, {new:true, setDefaultsOnInsert:false})
    .then(updatedPlayer=>res.json(updatedPlayer))
    .catch(err=>res.status(400).json(err))
}
module.exports.updatePlayerGameTwo=  (req,res)=>{
    Player.findOneAndUpdate({_id: req.params.id,}, {gameTwo: req.body.value}, {new:true, setDefaultsOnInsert:false})
    .then(updatedPlayer=>res.json(updatedPlayer))
    .catch(err=>res.status(400).json(err))
}
module.exports.updatePlayerGameThree=  (req,res)=>{
    Player.findOneAndUpdate({_id: req.params.id,}, {gameThree: req.body.value}, {new:true, setDefaultsOnInsert:false})
    .then(updatedPlayer=>res.json(updatedPlayer))
    .catch(err=>res.status(400).json(err))
}

