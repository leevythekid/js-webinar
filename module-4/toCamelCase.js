/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

function toCamelCase(toConvert) {
    if (typeof toConvert !== "string") {
        return "";
    }

    toConvert = toConvert.replace(/\?|!|\n|\t/g, " ");

    let strArray = toConvert.toLowerCase().split(" ");

    strArray = strArray.filter(element => element !== "");

    for (let i = 1; i < strArray.length; i++) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1, strArray[i].length);
        //strArray[i][0] = strArray[i][0].toUpperCase();    // why doesn't it works????
    }

    return strArray.join("");
}

module.exports = toCamelCase;