const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

userSchema.pre('save', function() {
    var hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
})

var User = mongoose.model('User', userSchema)

module.exports = User