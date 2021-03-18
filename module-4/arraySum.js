/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(arr) {
    var sum = 0;

    if (!Array.isArray(arr)) {
        return sum;
    }

    // Solution #1 - iteration
    /* arr = arr.flat(Infinity);

    arr.forEach(element => {
        if (typeof element === "number") {
            sum += element;
        }
    }); */

    // Solution #2 - recursion
    arr.forEach(element => {
        if (Array.isArray(element)) {
            sum += arraySum(element);
        } else if (typeof element === "number") {
            sum += element;
        }
    });

    return sum;
}

module.exports = arraySum;