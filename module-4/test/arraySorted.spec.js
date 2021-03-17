const arraySorted = require('../arraySorted');
const expect = require('chai').expect;
const testData = require('./arraySorted.json');

describe.only('Module 4 - arraySorted', () => {
    it('should be a function', () => {
        expect(arraySorted).to.be.instanceOf(Function);
    });

    it('should handle first parameter type error', () => {
        expect(() => arraySorted("hello\nhOla")).to.throw("Invalid parameter type! First parameter should have type: \"Array\"");
    });

    it('should handle second parameter type error', () => {
        expect(() => arraySorted(["hello", "hola", "bonjour"], 12)).to.throw("Invalid parameter type! Second parameter should have type: \"String\"");
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(arraySorted(...data.arguments)).to.equal(data.result);
        });
    });
});