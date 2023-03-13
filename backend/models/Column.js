const mongoose = require('mongoose')
const Schema = mongoose.Schema

let columnSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    
    
  },
  {
    collection: 'column',
  },
)

module.exports = mongoose.model('Column', columnSchema)