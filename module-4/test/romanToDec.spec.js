const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');

describe('Module 4 - romanToDec', () => {
    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    it('should handle non-string arguments', () => {
        expect(() => romanToDec(125)).to.throw("Invalid input! The entered value is not a string!");
    });

    it('should handle empty string arguments', () => {
        expect(() => romanToDec("")).to.throw("Invalid input! The given string is empty!");
    });

    it('should handle strings with non-roman characters', () => {
        expect(() => romanToDec("XXKLI")).to.throw("Invalid character!");
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec(...data.arguments)).to.equal(data.result);
        });
    });
});