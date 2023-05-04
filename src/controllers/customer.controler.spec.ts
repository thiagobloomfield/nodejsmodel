import { Customer } from '../models/customer';
import { CustomerController } from './customer.controler';

const customerController: CustomerController = new CustomerController();

describe('CustomerController', () => {
  it('double function', () => {
    const customer: Customer = {
      id: 1,
      name: 'Teste de Nome',
      birthDate: new Date('2023-01-01')
    }
    const request = {
      body: customer
    }
    const expectedResult: Customer[] = [];
    expectedResult.push(customer);
    expect(customerController.addNewCustomer(request)).toEqual(expectedResult);
  });
});