import 'mocha';
import { expect } from 'chai';
expect();
import { stringConcat } from '../src/strings.js';

describe('Strings', () => {
    describe('concatentation', () => {
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
    })
    describe('toUpperCase() and toLowerCase() functions', () => {
        it('toUpperCase() converts a string to upper case', () => {
            expect('brian'.toUpperCase()).to.equal('BRIAN');
        })
        it('toLowerCase() converts a string to lower case', () => {
            expect('BRIAN'.toLowerCase()).to.equal('brian');
        })    
    })
    describe('trim() function', () => {
        it('trim() removes whitespace from the beginning and end of a string', () => {
            expect('  value with embedded spaces  '.trim()).to.equal('value with embedded spaces');
        })    
    })
    describe('slice() function', () => {
        it('slice() copies part of a string to a new string and leaves the original unchanged', () => {
            let originalValue = 'The quick brown fox jumped over the lazy dog';
            let fox = originalValue.slice(16,19);
            expect(fox).to.equal('fox');
            expect(originalValue).to.equal('The quick brown fox jumped over the lazy dog');
        })    
    })
    describe('search() function', () => {
        it('search() specifying a regex returns the offset of a substring within a string', () => {
            expect('Now is the time'.search(/time/)).to.equal(11);
        })
        it('search() specifying a string returns the offset of a substring within a string', () => {
            expect('Now is the time'.search('time')).to.equal(11);
        })
        it('search() with the "i" flag ignores case', () => {
            expect('Now is the time'.search(/now/i)).to.equal(0);
        })
        it('search() returns -1 when the substring is not found', () => {
            expect('Now is the time'.search(/place/)).to.equal(-1);
        })    
    })
    describe('replace() function', () => {
        let testValue = 'alpha beta delta GAMMA alpha beta delta gamma';
        it('replace() specifying a regex replaces the first occurrence of the substring', () => {
            expect(testValue.replace(/delta/, "epsilon")).to.equal('alpha beta epsilon GAMMA alpha beta delta gamma');
        })
        it('replace() specifying a regex with "g" replaces all occurrences of the substring', () => {
            expect(testValue.replace(/delta/g, "epsilon")).to.equal('alpha beta epsilon GAMMA alpha beta epsilon gamma');
        })
        it('replace() specifying a regex with "g" and "i" ignores case', () => {
            expect(testValue.replace(/gamma/gi, "epsilon")).to.equal('alpha beta delta epsilon alpha beta delta epsilon');
        })
        it('replace() specifying a string replaces the first occurrence of the value', () => {
            expect(testValue.replace("delta", "epsilon")).to.equal('alpha beta epsilon GAMMA alpha beta delta gamma');
        })
    })
    describe('repeat() function', () => {
        it('repeat() repeats a single character', () => {
            expect('X'.repeat(6)).to.equal('XXXXXX');
        })
        it('repeat() repeats a string', () => {
            expect("Don't make me repeat" + " myself".repeat(3) + "!")
                .to.equal("Don't make me repeat myself myself myself!");
        })
        it('repeat() helps make a comments flowerbox for C and similar languages', () => {
            let asterisk = '*';
            let space = ' ';
            let lineWithAsterisks = `/${asterisk.repeat(78)}/\n`
            let lineWithSpaces = `/${asterisk}${space.repeat(76)}${asterisk}/\n`;
    
            expect(`${lineWithAsterisks}${lineWithSpaces.repeat(4)}${lineWithAsterisks}`)
            .to.equal("/******************************************************************************/\n"
                    + "/*                                                                            */\n"
                    + "/*                                                                            */\n"
                    + "/*                                                                            */\n"
                    + "/*                                                                            */\n"
                    + "/******************************************************************************/\n"
            );
        })
    })

})
