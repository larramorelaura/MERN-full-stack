const express= require ("express");
const app= express();
const port=8000;
const cors=require("cors");





require("./config/mongoose.config");




// Change the app.use(cors()) to the one below
app.use(cors({origin: 'http://localhost:3000'}));



app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./routes/players.routes")(app);


app.listen(port, ()=>console.log(`Listening on port: ${port}`))