const { Author} = require('../models/authors.model');
const { User } = require('../models/user.model');
const asyncHandler = require("express-async-handler");



    
module.exports.createAuthor= (req, res) => {
    const newAuthor=req.body;
        Author.create(newAuthor)
        .then(author=> res.json(author))
        .catch(err => res.status(400).json(err));
}

// module.exports.getAllAuthors=(req, res)=>{
//     Author.find().populate('poster')
//     .then(authors=> res.json(authors))
//     .catch(err=>res.status(400).json(err))
// }

module.exports.getAllAuthors= async (req, res)=>{
    const authors= await Author.find()
    return res.json(authors)
    // .catch(err=>res.status(400).json(err))
}

// module.exports.getAllAuthors=(req, res)=>{
//     Author.aggregate([{
//         $lookup:{
//             from: "users",
//             localField:"poster._id",
//             foreginField:"_id",
//             as:"poster",
//             pipeline:[{$documents:Users._id}]
//         }
//     }])
//     .then(authors=> res.json(authors))
//     .catch(err=>res.status(400).json(err))
// }

module.exports.getAllAuthorsWithPosters= asyncHandler( async (req, res)=>{
    try{
        const authors= await Author.find()
        .populate("poster");
        res.json(authors)
    }
    catch(error){
        return res.json({error:error.message})
    }
});

module.exports.getOneAuthor=asyncHandler( async (req, res)=>{
    try{
        const author= await Author.findOne({_id: req.params.id})
        .populate("poster")
        res.json(author)
    }
    catch(error) {
        return res.json({error:error.message})
    }
});

module.exports.updateAuthor=(req,res)=>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedAuthor=>res.json(updatedAuthor))
    .catch(err=>res.status(400).json(err))
}

module.exports.deleteAuthor =(req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err))
}