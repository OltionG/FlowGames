const express = require('express')
const gameRoute = express.Router()

// model
let GameModel = require('../models/Game')

gameRoute.route('/create-game').post((req, res, next) => {
  GameModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

gameRoute.route('/').get((req, res, next) => {
  GameModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

gameRoute.route('/edit-game/:id').get((req, res, next) => {
  GameModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
gameRoute.route('/update-game/:id').put((req, res, next) => {
  GameModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Game successfully updated!')
      }
    },
  )
})

// Delete
gameRoute.route('/delete-game/:id').delete((req, res, next) => {
  GameModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = gameRoute
