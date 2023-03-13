const mongoose = require('mongoose')
const Schema = mongoose.Schema

let gameSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    collection: 'games',
  },
)

module.exports = mongoose.model('Game', gameSchema)
