const { Schema, model } = require('mongoose');

const DnaSchema = new Schema({
    dna: {
        type: [String],
        required: true,
    },
    result: {
        type: Boolean,
        required: true,
    }
});

module.exports = model('Dna', DnaSchema);
