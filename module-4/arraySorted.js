/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the itemsay is properly sorted,
 *                    false otherwise
 */

function arraySorted(items, ignore) {
    if (!Array.isArray(items)) {
        throw new Error("Invalid parameter type! First parameter should have type: \"Array\"");
    }
    if (ignore && typeof ignore !== "string") {
        throw new Error("Invalid parameter type! Second parameter should have type: \"String\"")
    }
    if (items.length < 2) {
        return true;
    }


    let whitespaces = " \n\t\r\v";

    if (ignore) {
        whitespaces += ignore;
    }
    //console.log("test: " + whitespaces)

    for (let i = 0; i < items.length; i++) {
        if (typeof items[i] === "string") {
            for (ch of whitespaces) {
                items[i] = items[i].toLowerCase().split(ch).join("");  //items.toLowerCase().replaceAll(ch, "");
            }
        }
    }

    for (let i = 0; i < items.length - 1; i++) {
        if (String(items[i]) > String(items[i + 1])) {
            return false;
        }
    }

    return true;
}

module.exports = arraySorted;