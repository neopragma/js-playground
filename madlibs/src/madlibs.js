import { MadLib } from './MadLib.js';

let madlib = new MadLib();
let numberOfMadLibs = process.argv[2] ? Number(process.argv[2]) : 5; 
for (let i = 0 ; i < numberOfMadLibs ; i++) {
    console.log(madlib.construct());
}