const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
username: {
type: String,
required: true,
unique: true,
match: [/.+@.+\..+/, 'Must match an email address!'],
},
password: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 15,
    },
})




const User = mongoose.model('User', userSchema);
module.exports = User;