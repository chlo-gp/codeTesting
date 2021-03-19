function convert(valueToTranslate, arab, roman) {

    if (valueToTranslate === 1) {
        return 'I'
    }
    else if (valueToTranslate ==='I') {
        return 1
    }
   else if (valueToTranslate === 2) {
        return 'I'
    }
    else if (valueToTranslate ==='II') {
        return 2
    }
}

let matrix = new Map([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [478, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M']

]);
function translateNumber(num) {
    if(num < 1){ return "";}
    if(num >= 1000){ return "M" + translateNumber(num - 1000);}
    if(num >= 900){ return "CM" + translateNumber(num - 900);}
    if(num >= 500){ return "D" + translateNumber(num - 500);}
    if(num >= 400){ return "CD" + translateNumber(num - 400);}
    if(num >= 100){ return "C" + translateNumber(num - 100);}
    if(num >= 90){ return "XC" + translateNumber(num - 90);}
    if(num >= 50){ return "L" + translateNumber(num - 50);}
    if(num >= 40){ return "XL" + translateNumber(num - 40);}
    if(num >= 10){ return "X" + translateNumber(num - 10);}
    if(num >= 9){ return "IX" + translateNumber(num - 9);}
    if(num >= 5){ return "V" + translateNumber(num - 5);}
    if(num >= 4){ return "IV" + translateNumber(num - 4);}
    if(num >= 1){ return "I" + translateNumber(num - 1);}
}

module.exports = translateNumber
module.exports = matrix