import 'mocha';
import { expect } from 'chai';
expect();
import { Customer } from '../src/Customer.js';
import { CustomerRegistry } from '../src/CustomerRegistry.js';

describe('Customer Registry tests', () => {
    let customer1, customer2, registry;
    beforeEach (() => {
        customer1 = new Customer("Mohammed Said");
        customer2 = new Customer("Emily Zhang");
        registry = new CustomerRegistry();
    });
    it('registers a customer', () => {
        registry.registerCustomer(customer2);
        expect(customer1.isActive()).to.equal(false);
        expect(customer2.isActive()).to.equal(true);
        expect(registry.getRegisteredCustomersCount()).to.equal(1);
    });
    it('unregisters a customer', () => {
       registry.registerCustomer(customer1);
       registry.registerCustomer(customer2);
       expect(customer1.isActive()).to.equal(true);
       expect(customer2.isActive()).to.equal(true);
       expect(registry.getRegisteredCustomersCount()).to.equal(2);
       registry.unregisterCustomer(customer2);
       expect(customer1.isActive()).to.equal(true);
       expect(customer2.isActive()).to.equal(false);
       expect(registry.getRegisteredCustomersCount()).to.equal(1);
    })
})