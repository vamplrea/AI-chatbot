const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    address: String,
    phone: String
});

mongoose.model('registration', registrationSchema);