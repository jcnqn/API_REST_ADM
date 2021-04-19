const { response } = require("express");
const Dna = require('../models/dnas.model')

const statsController = async(req, res = response) => {
const mutations = await Dna.find();
const no_mutation = await  Dna.find({result: false});
    console.log(no_mutation);

    res.status(200).json({
        ADN: {
            count_mutations: mutations.length,
            count_no_mutation: no_mutation.length,
            ratio: Number((mutations.length / no_mutation.length).toFixed(2)),
        }});
}

module.exports = {
    statsController,
}
