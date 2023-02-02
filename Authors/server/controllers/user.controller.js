const { User} = require('../models/user.model');
const bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");
const { decrypt } = require('../config/jwt.config');
module.exports.login= async(req, res) => {
    const user = await User.findOne({ email: req.body.email});

    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .cookie("checktoken", userToken, {
            secure: true,
            samesite:"none"
        })
        .json({ msg: "success!", user:user });
}

module.exports.logout= (req, res) => {
    res.clearCookie('usertoken', {
        httpOnly: true
    });
    res.sendStatus(200);
}

module.exports.register= (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
    
            res
                .cookie("usertoken", userToken,  {
                    httpOnly: true
                })
                .cookie("checktoken", userToken, {
                    secure: true,
                    samesite:"none"
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.status(404).json(err));
    }

module.exports.getOne=(req, res)=>{
    
    User.find({_id:req.params.id})
    .then(user=> res.json(user))
    .catch(err=>res.status(400).json(err))
}

module.exports.getAll=(req, res)=>{
    User.find().sort({name:1, _id:1})
    .then(users=> res.json(users))
    .catch(err=>console.log(err))
}