const translateNumber = require('./index.js');
const matrix = require('./index.js');


describe('ma première suite de tests', () => {
    test('mon premier test', () => {})
        matrix.forEach(() => {
            it('should ', () => {
                //expect(translateNumber([matrix.value])).toBe([matrix.key])
                expect(translateNumber([matrix.key])).toBe([matrix.value])
            })
        })
})