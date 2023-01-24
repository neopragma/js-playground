export class CustomerRegistry {
    constructor() {
        this.registeredCustomers = 0;
        this.registry = [];
    }
    registerCustomer(customer) {
        this.registry << customer;
        this.registeredCustomers += 1;
        customer.setActive();
    }
    unregisterCustomer(customer) {
        for(let i = 0; i < this.registry.length; i++){                                    
            if ( this.registry[i] === customer) { 
                this.registry.splice(i, 1); 
                i--; 
            }
        }
        customer.setInactive();
        this.registeredCustomers -= 1;
    }
    getRegisteredCustomersCount () {
        return this.registeredCustomers;
    }
}