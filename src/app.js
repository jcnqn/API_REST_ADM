const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//Crea el servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Lee y parsea a json
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})

//Conecta a base de datos
dbConnection()

//Rutas de la api rest
app.use('/mutation', require('./routes/dnas.route'));
app.use('/stats', require('./routes/stats.route'));

module.exports = {
    app,
}


