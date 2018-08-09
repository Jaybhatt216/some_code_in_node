#!usr/bin/env node
const program = require('commander');
const {prompt}= require('inquirer');
const {
	addCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer,
	listCustomers

}= require('./index');
//customer questions
const questions = [
{
	type:'input',
	name:'firstname',
	message: 'customer first name'
},
{
	type:'input',
	name:'lastname',
	message: 'customer last name'
},
{
	type:'input',
	name:'email',
	message: 'customer email'
},
{
	type:'input',
	name:'phone',
	message: 'customer phone number'
}];

program
.version('1.0.0')
.description("client Management system")

/*program
.command('add <firstname> <lastname> <phone> <email>')
.alias('a')
.description('add a customer')
.action((firstname, lastname, phone, email) =>{
	addCustomer({firstname,lastname,phone,email});
});*/

//add customer
program
.command('add')
.alias('a')
.description('add a customer')
.action(()=> {
	prompt(questions).then(answers=> addCustomer(answers));
});

//find customer
program
.command('find <name>')
.alias('f')
.description('Find a customer')
.action(name => findCustomer(name));

//update customer
program
.command('update <_id>')
.alias('u')
.description('update a customer')
.action(_id)=> {
	prompt(questions).then(answers=> updateCustomer(_id,answers));

};





//remove customer

program
.command('remove <_id>')
.alias('r')
.description('remove a customer')
.action(_id => removeCustomer(_id));




//list customers
program
.command('list')
.alias('l')
.description('list all customer')
.action(_id => listCustomers());



















program.parse(process.argv);