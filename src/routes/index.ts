import { Router } from 'express';
import { CustomerController } from '../controllers/customer.controler';

const customerController: CustomerController = new CustomerController();
const router = Router();
 
router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res
    .status(201)
    .json(customerController.addNewCustomer(req));
});
 
export default router;
