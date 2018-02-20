/**
 * npm install mongoose --save
 * 
 * Reference : https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */
var Customer = require('./model/customer.js');

var chris = new Customer({
    first_name: 'Chris',
    last_name: 'Tuker',
    age: 30
});

chris.addGender(function(err, gender){
    if(err) throw err;

    console.log('Gender set to : ' + gender);
});

chris.save(function(err){
    if(err) throw err;

    console.log('Customer saved successfully!');
});

Customer.find({}, function(err, customers){
    if(err) throw err;

    console.log(customers);
})