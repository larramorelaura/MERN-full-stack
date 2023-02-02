const Users = require('../controllers/user.controller');
const { authenticate, decrypt } = require('../config/jwt.config');
module.exports = function(app) {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.post("/api/logout", Users.logout);
    app.get("/api/users/", decrypt);
    app.get("/api/users/:id", authenticate, Users.getOne);
}