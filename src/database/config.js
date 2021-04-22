const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://jucuneo:adsjhñañsdoiasd8ue@cluster0.9k2sn.mongodb.net/db_adn',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        console.log('DB Online');

    } catch (error) {
        console.warn(error)
        throw new error('Error while trying to connect to DataBase');
    }
}

module.exports = {
    dbConnection,
}
