/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    // Solution #1:
    /*if (score >= 0 && score <= 100) {
        if (score >= 90) {
            gradeOfStudent = 5;
        } else if (score >= 80) {
            gradeOfStudent = 4;
        } else if (score >= 70) {
            gradeOfStudent = 3;
        } else if (score >= 60) {
            gradeOfStudent = 2;
        } else {
            gradeOfStudent = 1;
        }
    } else {
        gradeOfStudent = 0;
    }*/

    // Solution #2
    /*gradeOfStudent = (score <= 100 && score >= 90) ? 5
        : (score <= 89 && score >= 80) ? 4
        : (score <= 79 && score >= 70) ? 3
        : (score <= 69 && score >= 60) ? 2
        : (score <= 59 && score >= 0) ? 1 : 0;
    */

    // Solution #3
    if (score >= 0 && score <= 100) {
        gradeOfStudent = Math.floor((Math.max(50, Math.min(99, score)) - 40) / 10);
    } else {
        gradeOfStudent = 0;
    }
    return gradeOfStudent;
    // ...AND THIS COMMENT LINE!
}

module.exports = grade;