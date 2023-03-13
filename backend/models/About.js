const mongoose = require('mongoose')
const Schema = mongoose.Schema

let aboutSchema = new Schema(
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
    collection: 'about',
  },
)

module.exports = mongoose.model('About', aboutSchema)