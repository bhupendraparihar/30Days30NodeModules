var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/newcustomers');

var customerSchema = new Schema({
    first_name: { type: String, required: true},
    last_name: { type: String},
    age: Number,
    gender: String
});

customerSchema.methods.addGender = function(){
    if(!this.gender){
        this.gender = 'male';
    }

    return this.gender;
}

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;