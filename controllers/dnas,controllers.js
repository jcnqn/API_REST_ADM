const { response } = require('express');
const { validateDna } = require("../helpers/validateDna");
const { hasMutation } = require("../helpers/hasMutation");
const { dnaControl } = require('../helpers/dnaControl');
const Dna = require('../models/dnas.model')

const checkDnas = async (req, res = response) =>{

    let dna = req.body.dna

    if (!validateDna(dna)) {
        res.status(400).json({
            ok: false,
            msg: 'Cadena de DNA inválida',
        })
    }

    if (JSON.stringify(dna).toUpperCase() === JSON.stringify(dnaControl.slice(0,6))) {
        res.status(400).json({
            ok: false,
            msg: 'Cadena de DNA a controlar es idéntica a la original',
        })
    }
    const resp = hasMutation(dna);

    if (resp){
        const dnaToDB = new Dna({
            dna,
            result: true,
        })

        try {
            await dnaToDB.save(()=>{
                res.status(200).json({
                    ok: true,
                    msg: 'Existe mutación',
                })
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                msg: error,
            })
        }
    } else {
        const dnaToDB = new Dna({
            dna,
            result: false,
        })

        try {
            await dnaToDB.save();
            res.status(403).json({
                ok: false,
                msg: 'No existe mutación',
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                msg: error,
            })
        }
    }
}

module.exports = {
    checkDnas,
}

