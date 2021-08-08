const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    const NEW_CODE_TABLE = {};
    // создаю новую кодовую таблицу
    for (const morsetableElement in MORSE_TABLE) {
        let key = morsetableElement;
        let value = MORSE_TABLE[morsetableElement];
        NEW_CODE_TABLE[newCode(key)] = value;
    }

    function newCode(str) {
        let temp = "";
        for (const mElement of str) {
            // if (mElement === '-') temp += "11";
            // if (mElement === '.') temp += "10";
            temp += mElement === '-' ? "11" : "10";
        }
        return temp = temp.padStart(10, "0");
    }

    // в таблицу добовляем пробел
    NEW_CODE_TABLE["**********"] = " ";
    // *****************************************


    let newString = "";
    expr.match(/.{10}/g).map(x => newString+= NEW_CODE_TABLE[x]);
    return newString;
}

module.exports = {
    decode
}





