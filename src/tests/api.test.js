const request = require('supertest');
const { app } = require('../app');

describe('Testeando el end point /mutation', () => {
    it('Responde code 200 y json { ok: true , msg: Existe mutación }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({
                ok: true,
                msg: 'Existe mutación',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

 it('Responde code 200 y json { ok: true , msg: Existe mutación }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna:["ATGCGAG","CAGTGCC","TTATGTG","AGAAGGA","CCCCTAT","TCACTGG","GAGTAGA"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({
                ok: true,
                msg: 'Existe mutación',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

it('Responde code 200 y json { ok: true , msg: Existe mutación }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna:["ATGCG","CAGTG","TTATG","AGAAG","CCCCT"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({
                ok: true,
                msg: 'Existe mutación',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

    it('Responde code 403 y json { ok: false , msg: No existe mutación }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna: ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]
            })
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(403)
            .expect({
                ok: false,
                msg: 'No existe mutación',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

 it('Responde code 403 y json { ok: false , msg: No existe mutación }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna: ["ATGCGAG", "CAGTGCA", "TTATTTC", "AGACGGA", "GCGTCAT", "TCACTGG", "TAGTATC"]
            })
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(403)
            .expect({
                ok: false,
                msg: 'No existe mutación',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

    it('Responde code 400 y json { ok: false , msg: Cadena de DNA inválida }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna:["ATCCGA","CTTRGC","TTATGT","ATAJAG","CTCCTA","TTACGG"]
            })
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({
                ok: false,
                msg: 'Cadena de DNA inválida',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

 it('Responde code 400 y json { ok: false , msg: Cadena de DNA inválida }', (done) => {
        request(app)
            .post('/mutation')
            .send({
                dna:["ATCCGA","CTTAGC","TTATGT","ATATAG","CTCCTAT","TTACGG"]
            })
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({
                ok: false,
                msg: 'Cadena de DNA inválida',
            })
            .end(err => {
                if (err) return done(err);
                return done();
            })
    }).timeout(5000)

})

describe('Testeando el end point /stats', () => {
    it('Responde code 200 }', () => {
        request(app)
            .get('/stats')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .end(function (err) {
                if (err) throw err;
            });
    })

})
