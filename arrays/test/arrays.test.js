import 'mocha';
import { expect } from 'chai';
expect();
import chai from 'chai';
import chaiMatch from 'chai-match';
chai.use(chaiMatch);

// Custom assertion: All filenames in a list (array) must end with .jpg, .jpeg, or .png
chai.use(function (chai) {
    var Assertion = chai.Assertion;
  
    Assertion.addMethod('imageFilenameExtensions', function () {
        let obj = this._obj;
        obj.filter((entry) => {
            new Assertion(entry).to.match(/[\.jpg|\.jpeg|.\png]$/, 'filenames must end with .jpg, .jpeg, or .png');
        });
    });
});

describe('Arrays', () => {

    describe('Detect duplicate entries', () => { 

        it('using the ES6 Set class for an array of primitives', () => {
            let testArray = [ 7, 4, 5, 9, 8, 2 ];
            expect(new Set(testArray).size).to.equal(testArray.length);
        });

        it('using the ES6 Set class for an array of objects', () => {
            let testArray = [ 
                { "a": 1, "b": 2 }, 
                { "a": 3, "b": 4 }
            ];
            testArray.forEach((entry) => {
                Object.keys(entry).forEach((keyName) => {
                    expect(new Set(testArray.map(entry => entry[keyName])).size)
                        .to.equal(testArray.length);
                });
            });
        }); 

        it('using a second array when Set is not available (CommonJS)', () => {
            const checkForDuplicates = (array) => {
                let valuesAlreadySeen = []              
                for (let i = 0; i < array.length; i++) {
                  let value = array[i]
                  if (valuesAlreadySeen.indexOf(value) !== -1) {
                    return true
                  }
                  valuesAlreadySeen.push(value)
                }
                return false
            };
            let testArray = [ 7, 4, 5, 9, 8, 2 ];
            expect(checkForDuplicates(testArray)).to.equal(false);
        });
    });

    describe('Filtering arrays', () => { 

        it('filter image file names from a general list of file names, e.g. from fs.readdir() or fs.readdirSync()', () => {

            // Arrange

            const filenamesFrom_fs_readdir = [
                'oregon.txt',
                'mountain_view.jpeg',
                'mountain_scene.png',
                'riverbank-1.jpg',
                'riverbank-2.jpg',
                'trip-notes.docx',
                'expenses.xlsx',
                'trouble',
                '20240619255.jpg'
            ]
            const imageFilenameExtensions = [
                'jpg', 'jpeg', 'png'
            ]
            const filterImageFilenames = (filename) => {
                return imageFilenameExtensions.includes(filename.slice(filename.search(/[^\.]+$/g)));
            };

            // Act

            const filteredFilenames = filenamesFrom_fs_readdir.filter(filterImageFilenames);

            // Assert

            // all entries have an appropriate extension
            expect(filteredFilenames).to.have.imageFilenameExtensions();
            // we didn't miss any image filenames when filtering
            expect(filteredFilenames.length).to.equal(5);
        })
    })
})