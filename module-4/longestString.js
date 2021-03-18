/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    if (!Array.isArray(strings) || strings.length < 1) {
        return "";
    }

    var longestWord = "";

    for (word of strings) {
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