const mongoose = require('mongoose')
const Schema = mongoose.Schema

var questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    like: [],
    dislike: []
},{
    timestamps: true
})

var Question = mongoose.model('Question', questionSchema)

module.exports = Question