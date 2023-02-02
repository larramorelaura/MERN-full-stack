const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); // This is new
app.use(cors(methods=['GET', 'PUT', 'POST', 'DELETE']));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/products.routes')(app);
app.listen(8001, () => {
    console.log("Listening at Port 8001")
})