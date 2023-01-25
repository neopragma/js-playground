import 'mocha';
import { expect } from 'chai';
expect();
import { stringConcat } from '../src/strings.js';

describe('Strings', () => {
    it('concatenates two strings using plus', () => {
        let str1 = 'Brian';
        let str2 = 'Poirier';
        expect(str1 + str2).to.equal('BrianPoirier');
    })
    it('concatenates two strings using a string template', () => {
        let str1 = 'Brian';
        let str2 = 'Poirier';
        expect(`${str1}${str2}`).to.equal('BrianPoirier');
    })
    it('concatenates two strings using the concat function', () => {
        let str1 = 'Brian';
        let str2 = 'Poirier';
        expect(str1.concat(str2)).to.equal('BrianPoirier');
    })
    it('toUpperCase() converts a string to upper case', () => {
        expect('brian'.toUpperCase()).to.equal('BRIAN');
    })
    it('toLowerCase() converts a string to lower case', () => {
        expect('BRIAN'.toLowerCase()).to.equal('brian');
    })
    it('trim() removes whitespace from the beginning and end of a string', () => {
        expect('  value with embedded spaces  '.trim()).to.equal('value with embedded spaces');
    })

})
