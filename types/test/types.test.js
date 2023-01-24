import 'mocha';
import { expect } from 'chai';
expect();

import chai from 'chai';
import chaiMatch from 'chai-match';
chai.use(chaiMatch);

chai.use(function (chai) {
    var Assertion = chai.Assertion;
  
    Assertion.addMethod('numbers', function () {
        let obj = this._obj;
        obj.filter((entry) => {
            new Assertion(typeof entry).to.equal('number', 'array must contain only numbers');
        });
    });
});
  
describe('Customer tests', () => {
    let thing;

    it('recognizes thing is a number', () => {
        thing = 123.45;
        expect(typeof thing).to.equal('number');
    });
    
    it('recognizes thing is a string', () => {
        thing = '123.45';
        expect(typeof thing).to.equal('string');
    });
    
    it('recognizes thing looks like a date', () => {
        thing = Date();
        // Match a string that starts with something like this: "Mon Jan 23 2023 14:45:40 GMT-0700"
        expect(thing).to.match(/^[A-Z][a-z]{2}\s[A-Z][a-z]{2}\s\d{1,2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT[+-]\d{4}/);
    });
    
    it('recognizes thing as an object with 2 properties', () => {
        thing = {
            "prop1": "value1",
            "prop2": "value2"
        }
        expect(Object.keys(thing).length).to.equal(2);
    })
    
    it('recognizes thing looks like an array of numbers', () => {
        thing = [ 1, 2, 3.68, -4, 5 ];
        expect(Array.isArray(thing)).to.equal(true);
        expect(thing).to.contain.all.numbers();   // also works: expect(thing).numbers();
    })
})