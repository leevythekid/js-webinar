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

    /* const specialChars = ["\n", "\t", "!", "?"];
    for (let i = 0; i < specialChars.length; i++) {
        //toConvert = toConvert.replace(specialChars[i], " ");    //(it only replaces the first occurrence) why I cannot use replaceAll? (because of node version)
        toConvert = toConvert.split(specialChars[i]).join(" ");

    } */

    toConvert = toConvert.replace(/\?|!|\n|\t/g, " ");

    /*         var find = 'abc';
            var re = new RegExp(find, 'g');
            str = str.replace(re, ''); */


    let strArray = toConvert.toLowerCase().split(" ");

    strArray = strArray.filter(element => element !== "");

    for (let i = 1; i < strArray.length; i++) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1, strArray[i].length);
        //strArray[i][0] = strArray[i][0].toUpperCase();
    }

    return strArray.join("");

}

module.exports = toCamelCase;