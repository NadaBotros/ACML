const express = require('express')
const router = express.Router()
const spotController = require('../controllers/spot.controller')
router.get('/allSpots', spotController.all_spots)
router.get('/emptySpots', spotController.empty_spots)
router.put('/updateSpots', spotController.update_spots)

module.exports = router
