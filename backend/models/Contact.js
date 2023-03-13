const mongoose = require('mongoose')
const Schema = mongoose.Schema

let contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: 'contact',
  },
)

module.exports = mongoose.model('Contact', contactSchema)