const upperCase = require('./uppercase')

describe('Exercicio 1 do Bloco 10 dia 2', () => {

    it('uppercase "test" equal a "TEST"', (done) => {
        upperCase('test',(str) =>{
            expect(str).toBe('TEST');
            done();
        });
    });
})