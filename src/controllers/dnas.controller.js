const { response } = require('express');
const { validateDna } = require("../helpers/validateDna");
const { hasMutation } = require("../helpers/hasMutation");
const Dna = require('../models/dnas.model')

const checkDnas = async (req, res = response) =>{

    let dna = req.body.dna

    //En caso de que la cadena no sea válida..

    if (!validateDna(dna)) {
        res.status(400).json({
            ok: false,
            msg: 'Cadena de DNA inválida',
        })
    }

    //Se controla si existe mutación

    const resp = hasMutation(dna);

    //Si existe mutación
    if (resp){
        const dnaToDB = new Dna({
            dna,
            result: true,
        })

        try {
            await dnaToDB.save() // Se guarda el registro en mongo
                res.status(200).json({
                    ok: true,
                    msg: 'Existe mutación',
                })

        } catch (error) {
            res.status(500).json({
                ok: false,
                msg: error,
            })
        }
        //Si no existe mutación
    } else {
        const dnaToDB = new Dna({
            dna,
            result: false,
        })

        try {
            await dnaToDB.save(); //Se guarda el registro en mongo
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

