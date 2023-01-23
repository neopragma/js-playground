import 'mocha';
import { expect } from 'chai';
expect();
import { Customer } from '../src/Customer.js';
import { incrementActiveCustomers } from '../src/funWithCustomers.js';

describe('Customer tests', () => {
    let customer1, customer2;
    beforeEach (() => {
        customer1 = new Customer("Mohammed Said");
        customer2 = new Customer("Emily Zhang");
    });
    it('registers a customer', () => {
        incrementActiveCustomers(customer2);
        expect(customer1.isActive()).to.equal(false);
        expect(customer2.isActive()).to.equal(true);
    });
})