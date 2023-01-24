import { Words } from './Words.js';

export class MadLib {
    constructor() {
        this.words = new Words();
    }
    construct() {
        let adjective = this.words.adjective();
        let indefiniteArticle = 
            ['a','e','i','o','u'].includes(adjective.substring(0,1)) ? 'an' : 'a';

        return `${this.words.name()} ${this.words.verb()} ${indefiniteArticle} ${adjective} ${this.words.color()} ${this.words.noun()}.`;
    }
}