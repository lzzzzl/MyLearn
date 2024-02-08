// create express app
const app = express();
// create express get request for Customer
app.get("/customers", (req, res) => {
  res.send(customers);
})

// customer array
const customers: Customer[] = [];

// create express post request for Customer
app.post('/customer', (req, res) => {
  // validate customer
  const customer: Customer = req.body;
  if (!validateEmail(customer.email)) {
    res.status(400).send('Invalid customer');
    return;
  }

  // store customer
  customers.push(customer);
  res.status(201).send('Customer is created');
});