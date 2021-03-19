const translateNumber = require('./index.js');
const matrix = require('./index.js');


describe('ma première suite de tests', () => {
    test('mon premier test', () => {})
    expect(translateNumber(146)).toBe('CXLVI')
    expect(translateNumber(1587)).toBe('MDLXXXVII')
    expect(translateNumber(3999)).toBe('MMMCMXCIX')

})