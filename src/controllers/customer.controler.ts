import { Customer } from '../models/customer';

type RequestBody = {
  id: number,
  name: string,
  birthDate: Date
}

export class CustomerController {
  addNewCustomer(req: any): Customer {
    req.body as RequestBody;
    const newCustomer : Customer = {
      id: req.body.id,
      name: req.body.name,
      birthDate: req.body.birthDate
    };
    return newCustomer;
  }
}