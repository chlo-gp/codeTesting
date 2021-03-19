require("./index");

describe('ma première suite de tests', () => {
    test('Conversion de l\'arabique vers romain', () => {
        expect(translateNumber(146)).toBe('CXLVI')
        expect(translateNumber(1587)).toBe('MDLXXXVII')
        expect(translateNumber(3999)).toBe('MMMCMXCIX')

    })
    test('Conversion du romain vers l\'arabique', () => {
        expect(romanToArabic('CXXIX')).toBe(129)
        expect(romanToArabic('MCCLXVIII')).toBe(1268)
        expect(romanToArabic('MMMCMXCIX')).toBe(3999)
    })
})