const commandString = 'npm test --dir=';
const testOptions = [
    'customer',
    'madlibs',
    'numbers',
    'types'
]

console.log('You can run the following tests:')
testOptions.forEach((testOption) => {
    console.log(`${commandString}${testOption}`);
})