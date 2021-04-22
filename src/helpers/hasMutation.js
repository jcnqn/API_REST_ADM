const hasMutation = (dna) => {
    let dnaDesc = [];
    let controlDna = [];

    //Separa las cadenas en sus letras y devuelve un array
    dna.forEach( adn => dnaDesc.push(adn.split('')));

    // Se obtienen las cadenas de 4 letras horizontales
    for (let i=0; i <= (dnaDesc.length - 4); i++) {
        for (let y=0; y < dnaDesc.length; y++) {
            controlDna.push([dnaDesc[y][i], dnaDesc[y][i+1], dnaDesc[y][i+2], dnaDesc[y][i+3]]);
        }
    }

    // Se obtienen las cadenas verticales
    for (let i=0; i <= (dnaDesc.length - 4); i++) {
        for (let y=0; y < dnaDesc.length; y++) {
            controlDna.push([dnaDesc[i][y], dnaDesc[i+1][y], dnaDesc[i+2][y], dnaDesc[i+3][y]]);
        }
    }

    //Se obtienen las cadenas oblicuas
    for (let i=0; i <= dnaDesc.length -4; i++) {
        for (let y = 0; y <= dnaDesc.length -4; y++) {
            controlDna.push([dnaDesc[i][y], dnaDesc[i+1][y+1], dnaDesc[i+2][y+2], dnaDesc[i+3][y+3]]);
        }
    }

    //Se obtienen las cadenas oblicuas invertidas
    for (let i=0; i <= dnaDesc.length -4; i++) {
        for (let y = dnaDesc.length -1; y >= 3; y--) {
            controlDna.push([dnaDesc[i][y], dnaDesc[i+1][y-1], dnaDesc[i+2][y-2], dnaDesc[i+3][y-3]]);
        }
    }

    //Se genera un array de booleans donde los true son cadenas de cuatro letras iguales

    const res = controlDna.map(ctlDna => (ctlDna[0] === ctlDna[1] && ctlDna[1] === ctlDna[2] && ctlDna[2] === ctlDna[3]))

    //Se retorna true si existe algun término = true
    return res.some(element => element===true)
}


module.exports = {
    hasMutation,
}

