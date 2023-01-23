import { Customer } from './Customer.js';

let customer1 = new Customer("Mohammed Said");
let customer2 = new Customer("Emily Zhang");

let activeCustomers = 0;

let customerRegistry = [];

export function incrementActiveCustomers(customer) {
    customer.active = true;
    activeCustomers += 1;
    customerRegistry << customer;
}

console.log(`Before: ${customer1.name} is ${customer1.active ? '' : 'not '}active.`)
console.log(`Before: ${customer2.name} is ${customer2.active ? '' : 'not '}active.`)
console.log(`Number of active customers is ${activeCustomers}`)
console.log(' ')
console.log('Now calling incrementActiveCustomer(customer2)')
console.log(' ')

incrementActiveCustomers(customer2);

console.log(`After: ${customer1.name} is ${customer1.active ? '' : 'not '}active.`)
console.log(`After: ${customer2.name} is ${customer2.active ? '' : 'not '}active.`)
console.log(`Number of active customers is ${activeCustomers}`)
