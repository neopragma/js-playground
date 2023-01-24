export class Customer { 
    constructor(name) {
        this.active = false;
        this.id = this.generateCustomerId();
        this.name = name;
    }
    generateCustomerId() {
        let newId = null;
        // magic logic to generate a unique identifier
        this.id = newId;
    }
    isActive() {
        return this.active;
    }
    setActive() {
        this.active = true;
    }
    setInactive() {
        this.active = false;
    }
}