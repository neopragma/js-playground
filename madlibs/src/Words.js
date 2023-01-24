import { randomEntry } from './utilities.js';

export class Words {
    constructor() {
        this.adjectives = [
            'synergistic', 
            'game-changing',
            'incredible',
            'flexible',
            'iconoclastic',
            'leading-edge',
            'somersaulting',
            'intermediate'
        ]
        this.colors = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet',
            'multicolored',
            'variegated'
        ]
        this.nouns = [
            'rhinoplasty', 
            'pleonasm',
            'banana',
            'hydrant',
            'leprechaun',
            'synecdoche'
        ]
        this.names = [
            'Albert', 
            'Anna',
            'Bertram',
            'Betty',
            'Chuck',
            'Caroline',
            'Donald',
            'Denise',
            'Edward',
            'Ethel'
        ]
        this.verbs = [
            'assimilates',
            'achieves',
            'inculcates',
            'foments',
            'standardizes',  
            'simmers',
            'ablates'
        ]
    }
    adjective() {
        return randomEntry(this.adjectives);
    }
    allAdjectives() {
        return this.adjectives;
    }
    color() {
        return randomEntry(this.colors);
    }
    allColors() {
        return this.colors;
    }
    name() {
        return randomEntry(this.names);
    }
    allNames() {
        return this.names;
    }
    noun() {
        return randomEntry(this.nouns);
    }
    allNouns() {
        return this.nouns;
    }
    verb() {
        return randomEntry(this.verbs);
    }
    allVerbs() {
        return this.verbs;
    }
}