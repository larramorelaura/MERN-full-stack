const AuthorController = require('../controllers/author.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api/authors', AuthorController.getAllAuthorsWithPosters);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.delete('/api/authors/:id',authenticate, AuthorController.deleteAuthor);
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
}