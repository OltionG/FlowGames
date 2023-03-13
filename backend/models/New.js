const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    author: {
        type: String,
      }
    
  },
  {
    collection: 'new',
  },
)

module.exports = mongoose.model('New', newSchema)