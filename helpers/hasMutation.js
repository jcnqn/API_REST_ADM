const {dnaControl} = require("./dnaControl");

const hasMutation = (dna) => {
    dna.push(dna[0][0]+dna[1][1]+dna[2][2]+dna[3][3]+dna[4][4]+dna[5][5])
    dna.push(dna[0][5]+dna[1][4]+dna[2][3]+dna[3][2]+dna[4][1]+dna[5][0])

    return (dna.filter(dnaFiltered => dnaControl.includes(dnaFiltered)).length > 1);

}

module.exports = {
    hasMutation,
}
