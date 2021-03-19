 translateNumber= (num) => {
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

 romanToArabic = (romanNumber) => {
    const map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    let nums = romanNumber.split('');
    let result = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const first = map[nums[i]];
        const second = map[nums[i + 1]] || 0;
        if (first < second) {
            result += second - first;
            i += 1;
        } else {
            result += first;
        }
    }
    return result;
};


module.exports = translateNumber
module.exports = romanToArabic
