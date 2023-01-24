import 'mocha';
import { expect } from 'chai';
expect();
import { Words } from '../src/Words.js';
import { MadLib } from '../src/MadLib.js';

describe('MadLibs', () => {
    let words = new Words();
    describe('Randomly select words', () => {
        it('returns a randomly-selected adjective', () => {
            expect(words.allAdjectives()).to.contain(words.adjective());
        });
        it('returns a randomly-selected color word', () => {
            expect(words.allColors()).to.contain(words.color());
        });
        it('returns a randomly-selected name', () => {
            expect(words.allNames()).to.contain(words.name());
        });
        it('returns a randomly-selected noun', () => {
            expect(words.allNouns()).to.contain(words.noun());
        });
        it('returns a randomly-selected verb', () => {
            expect(words.allVerbs()).to.contain(words.verb());
        });
    });
    describe('Construct a Mad Lib', () => {
        let madlib = new MadLib();
        it('constructs a Mad Lib from randomly-selected words', () => {
            let tokens = madlib.construct().slice(0,-1).split(' ');
            expect(words.allNames()).to.include(tokens[0]);
            expect(words.allVerbs()).to.include(tokens[1]);
            expect(['a','an']).to.include(tokens[2]);
            expect(words.allAdjectives()).to.include(tokens[3]);
            expect(words.allColors()).to.include(tokens[4]);
            expect(words.allNouns()).to.include(tokens[5]);
        })
    })
});