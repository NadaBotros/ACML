const express = require('express')
const router = express.Router()
const spotController = require('../controllers/spot.controller')
router.get('/allSpots', spotController.allSpots)
router.get('/emptySpots', spotController.emptySpots)
router.post('/createSpot', spotController.addSpot)
router.post('/updateSpot', spotController.updateSpot)
router.post('/deleteSpot', spotController.deleteSpot)

module.exports = router
