const mongoose =require('mongoose');
//map global promise get rid of warnng
mongoose.Promise = global.Promise;
//connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
	//useMongoClient:true
});
//import model
const Customer = require('./models/customer.js');

//add customer with arrow functions
const addCustomer = (customer) => {
Customer.create(customer).then(customer => {
	console.info('New Customer added');
	db.close();
});//then is a promiese
}


//find customer with arrow functions
const findCustomer = (name) => {
// Make case insensitve so caps dont matter for names
const search = new RegExp(name, 'i');
Customer.find({$or:[{firstname:search},{lastname:search}]})
.then(customer => {
	console.info(customer);
	console.info(`${customer.length} matches`);
	db.close();
});

}

//update customer
const updateCustomer = (_id, customer) => {
	Customer.update({_id}, customer)
	.then(customer =>{
		console.info('customer updated');
		db.close();
	});
}

//remove customer
const removeCustomer = (_id) => {
	Customer.remove({_id})
	.then(customer =>{
		console.info('customer removed');
		db.close();
	});
}

//list all customers
const listCustomers =() => {
	Customer.find()
	.then(customers => {
		console.info(customers);
		console.info(`${customers.length} matches`);
		db.close();
	});
}









//explore all methods
module.exports = {
	addCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer,
	listCustomers
}