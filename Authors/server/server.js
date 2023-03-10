const express= require ("express");
const app= express();
const port=8000;
const cors=require("cors");
const jwt = require("jsonwebtoken");


require('dotenv').config();

require("./config/mongoose.config");

const cookieParser = require('cookie-parser');

app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));



app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./routes/authors.routes")(app);
require("./routes/user.routes")(app);

app.listen(port, ()=>console.log(`Listening on port: ${port}`))