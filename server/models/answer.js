const mongoose = require('mongoose')
const Schema = mongoose.Schema

var answerSchema = new mongoose.Schema({
    answer: {
        type: String
    },
    
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    like: [],
    dislike: []
},{
    timestamps: true
})

var Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer