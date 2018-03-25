const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  user:  { type: Schema.Types.ObjectId, ref: 'User' },
  question:  { type: Schema.Types.ObjectId, ref: 'Question' },
  text: String,
})

module.exports= mongoose.model('Answer', answerSchema)
