const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//Create express server
const app = express();

//Config CORS
app.use(cors());

//Read and parse JSON
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})

//Connect to database
dbConnection();

//Routes
app.use('/mutation', require('./routes/dnas.route'));



