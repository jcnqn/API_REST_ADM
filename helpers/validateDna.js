
const validateDna = (dna) => {
    const bases = ['A', 'T', 'C', 'G'];
    let resp = true;
    dna.forEach(eachDna => eachDna.split('').forEach(letter => {
       if ( !bases.includes(letter.toUpperCase())) {
           resp = false
       }
    }))
    return resp;
}

module.exports = {
    validateDna,
}
