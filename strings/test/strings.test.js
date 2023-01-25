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
    describe('trim(), trimStart(), and trimEnd() functions', () => {
        it('trim() removes whitespace from the beginning and end of a string', () => {
            expect('  value with embedded spaces  '.trim()).to.equal('value with embedded spaces');
        })    
        it('trimStart() removes whitespace from the beginning of a string', () => {
            expect('  value with embedded spaces  '.trimStart()).to.equal('value with embedded spaces  ');
        })    
        it('trimEnd() removes whitespace from the end of a string', () => {
            expect('  value with embedded spaces  '.trimEnd()).to.equal('  value with embedded spaces');
        })    
    })
    describe('slice() and substring() functions', () => {
        let originalValue = 'The quick brown fox jumped over the lazy dog';
        it('slice() copies part of a string to a new string', () => {
            expect(originalValue.slice(16,19)).to.equal('fox');
        }) 
        it('slice() with negative start position counts backward from the end of the string', () => {
            expect(originalValue.slice(-3)).to.equal('dog');
        })
        it('slice() does not change the original string', () => {
            let newString = originalValue.slice(1,2);
            expect(originalValue).to.equal('The quick brown fox jumped over the lazy dog');
        })   
        it('substring() copies part of a string to a new string', () => {
            expect(originalValue.substring(16,19)).to.equal('fox');
        }) 
        it('substring() with negative start position operates from the beginning of the string', () => {
            expect(originalValue.substring(-3)).not.to.equal('dog');
        })
        it('substring() does not change the original string', () => {
            let newString = originalValue.substring(1,2);
            expect(originalValue).to.equal('The quick brown fox jumped over the lazy dog');
        })   
        it('substring() swaps the arguments when the start offset is greater than the end offset', () => {
            expect(originalValue.substring(6,2)).to.equal('e qu');
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
