const express = require('express')
const gameRoute = express.Router()

// model
let AboutModel = require('../models/About')

aboutRoute.route('/create-about').post((req, res, next) => {
  AboutModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

aboutRoute.route('/').get((req, res, next) => {
  AboutModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

gameRoute.route('/edit-about/:id').get((req, res, next) => {
  GameModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
gameRoute.route('/update-about/:id').put((req, res, next) => {
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
        console.log('About successfully updated!')
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
