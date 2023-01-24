import 'mocha';
import { expect } from 'chai';
expect();

describe('MadLibs', () => {
    describe('Operator precedence', () => {
        it('returns 11 for 3 + 4 * 2', () => {
            expect(3 + 4 * 2).to.equal(11);
        });
        it('returns 14 for (3 + 4) * 2', () => {
            expect((3 + 4) * 2).to.equal(14);
        });
        it('returns 4 for 8 / 4 + 2', () => {
            expect(8 / 4 + 2).to.equal(4);
        })
        it('returns approximately 1.333 for 8 / (4 + 2)', () => {
            expect(8 / (4 + 2)).to.be.closeTo(1.333, 0.001);
        }) 
        it('returns -8 for 45 % 15 - 8', () => {
           expect(45 % 15 - 8).to.equal(-8);
        })
        it('returns 3 for 45 % (15 - 8)', () => {
            expect(45 % (15 - 8)).to.equal(3);
        })
        it('returns 3 for 81 / 9 / 3', () => {
            expect(81 / 9 / 3).to.equal(3);
        })
        it('returns 3 for 81 / 9 / 3', () => {
            expect(81 / (9 / 3)).to.equal(27);
        })
        it('returns 69 for 8**2 + 5', () => {
            expect(8**2 + 5).to.equal(69);
        })
        it('returns 2,097,152 for 8**(2 + 5)', () => {
            expect(8**(2 + 5)).to.equal(2097152);
        })
    })
    describe('Number practice exercises', () => {
        let myFavoriteNumber;

        // 1. Create a variable using the let keyword and assign a number to it.
        it('assigns a value to a variable', () => {
            myFavoriteNumber = 237;
            expect(myFavoriteNumber).to.equal(237);
        })

        // 2. On a new line, add 15 to your variable
        it('adds 15 to a variable', () => {
            myFavoriteNumber = myFavoriteNumber + 15;
            expect(myFavoriteNumber).to.equal(252);
        })

        // 3. On a new line, subtract 8 from your variable 
        //    without using the variable when calculating the new value
        it('adds 8 without using the variable in the calculation', () => {
            myFavoriteNumber += 8;
            expect(myFavoriteNumber).to.equal(260);
        })

        // 4. Calculate the average of 26, 44, 72, 86, 112. 
        //    Assign the calculated average to a new variable.
        it('calculates the average of an array of numbers', () => {
            const arr = [26, 44, 72, 86, 112];
            const calculateAverage = (arr = []) => {
                const reducer = (acc, value, index, array) => {
                    let val = acc + value;
                    if (index === array.length - 1) {
                        return val / array.length;
                    };
                    return val;
                };
                const res = arr.reduce(reducer, 0);
                return res;
            };
            let newVariable = calculateAverage(arr);
            expect(newVariable).to.equal(68);
        })

        // 5. Modify the following code so it outputs 15 
        //    without adding any new lines of code.
        //        let theNumber = 14;
        //        console.log(theNumber++)
        it('returns 15 for ++14', () => {
            let theNumber = 14;
            expect(++theNumber).to.equal(15);
        })

        // 6. What operator can you use to find out if a variable contains a number?
        it('returns "number" for "typeof <some number>"', () => {
            let theNumber = 9;
            expect(typeof theNumber).to.equal('number');
        })
    })
})