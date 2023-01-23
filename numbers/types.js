function whatIsThing() {
    let theType = typeof thing;
    let n = theType.startsWith('o') ? 'n' : '';
    console.log(`thing is a${n} ${theType} and its value is ${thing}`);
}

let thing = 12345;

whatIsThing();

thing = '12345';

whatIsThing();

thing = new Date();

whatIsThing();

thing = {
    "prop1": "value1",
    "prop2": "value2"
}

whatIsThing();


