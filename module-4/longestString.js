/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(stringArray) {
    if (!Array.isArray(stringArray) || stringArray.length < 1) {
        return "";
    }

    var longestWord = "";

    for (word of stringArray) {
        if (typeof word === "string") {
            if (word.length > longestWord.length)
                longestWord = word;
            else if (word.length === longestWord.length && word < longestWord)
                longestWord = word;
        }
    }

    return longestWord;
}

module.exports = longestString;