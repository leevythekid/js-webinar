/**
 * I got some help with the solution from the following video:
 * https://www.youtube.com/watch?v=hEhf_oz3wsM
 * 
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    if (typeof roman !== "string") {
        throw new Error("Invalid input! The entered value is not a string!");
    }
    if (!roman) {
        throw new Error("Invalid input! The given string is empty!");
    }

    roman = roman.toUpperCase();
    const toDec = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    for (let i = 0; i < roman.length; i++) {
        if (!Object.keys(toDec).includes(roman[i])) {
            throw new Error("Invalid character!")
        }
    }

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        if (i > 0 && toDec[roman[i]] > toDec[roman[i - 1]]) {
            result += toDec[roman[i]] - 2 * toDec[roman[i - 1]];
        } else {
            result += toDec[roman[i]];
        }
    }

    return result;
};

module.exports = romanToDec;