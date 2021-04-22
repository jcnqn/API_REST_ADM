
const validateDna = (dna) => {
    const bases = ['A', 'T', 'C', 'G'];
    let resp = true;

    //Se controla que la matriz sea simétrica comprabando que sea igual el cuadrado de su length a la cantidad de términos
    if((Math.pow(dna.length,2)) !== dna.map(adn => adn.length).reduce((acc, val) => acc + val) ) {
        resp = false
    }
    //Se controla que solo existan letras que estan en el array bases
    dna.forEach(eachDna => eachDna.split('').forEach(letter => {
       if ( !bases.includes(letter.toUpperCase())) {
           resp = false
       }
    }))
    return resp; // retorna false si alguna de las condiciones no se cumple
}

module.exports = {
    validateDna,
}
