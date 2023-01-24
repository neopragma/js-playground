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
    it('Check if str2 is uppercase', () => {
        let str1 = 'BRIAN';
        let str2 = 'brian';
        expect(str2.toUpperCase()).to.equal('BRIAN')
    })

})
