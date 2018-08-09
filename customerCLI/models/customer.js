const mongoose = require('mongoose');
 //customer schema
 const customerSchema = mongoose.Schema({
 	firstname: {type: String},
 	lastname: {type: String},
 	phonenumber:{type: String},
 	email:{type: String}

 });

 //define and export
module.exports = mongoose.model('customer', customerSchema);