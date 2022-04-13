/**
 * @param {number} num
 * @return {string}
 */
const num1 = 3;
const num2 = 58;
const num3 = 12894;
var intToRoman = function(num) {
    const sym = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let string = '';

    for (let i of Object.keys(sym)) {
        let j = Math.floor(num / sym[i]);
        // console.log(q)
        num -= j * sym[i];
        string += i.repeat(j); // kind of like multiplying the roman numeral by j and adding it to the string
        // console.log(string);
    }
    return string;
    }
console.log(intToRoman(num1));
console.log(intToRoman(num2));
console.log(intToRoman(num3));