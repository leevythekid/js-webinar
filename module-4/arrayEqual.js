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

function arrayEquals(arrA, arrB) {
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
        return false;
    }

    if (arrA.length !== arrB.length) {
        console.warn(`different array length: ${arrA.length}, ${arrB.length}`);
        return false;
    }

    for (let i = 0; i < arrA.length; i++) {
        if (Array.isArray(arrA[i]) && Array.isArray(arrB[i])) {
            return arrayEquals(arrA[i], arrB[i]);
        }

        if (arrA[i] !== arrB[i]) {
            console.warn(`different array items: ${arrA[i]}, ${arrB[i]}`);
            return false;
        }
    }

    return true;
}

module.exports = arrayEquals;