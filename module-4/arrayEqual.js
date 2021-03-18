/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

function arrayEquals(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        return false;
    }

    if (first.length !== second.length) {
        console.warn(`different array length: ${first.length}, ${second.length}`);
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        if (Array.isArray(first[i]) && Array.isArray(second[i])) {
            return arrayEquals(first[i], second[i]);
        }

        if (first[i] !== second[i]) {
            console.warn(`different array items: ${first[i]}, ${second[i]}`);
            return false;
        }
    }

    return true;
}

module.exports = arrayEquals;