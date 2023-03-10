const mongoose = require('mongoose')
const Schema = mongoose.Schema

let gameSchema = new Schema(
  {
    name: {
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
    collection: 'games',
  },
)

module.exports = mongoose.model('Game', gameSchema)
