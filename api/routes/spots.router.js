const express = require('express')
const router = express.Router()
const spotController = require('../controllers/spot.controller')
router.get('/allSpots', spotController.allSpots)
router.get('/emptySpots', spotController.emptySpots)
router.post('/parkingLot', spotController.parkingLot)
router.post('/createSpot', spotController.addSpot)
router.post('/updateSpot', spotController.updateSpot)
router.post('/deleteSpot', spotController.deleteSpot)
router.post('/lotEmpty', spotController.parkingLotEmpty)
router.post('/lotAllAndEmptySpots', spotController.parkingLotEmptyAndAll)

// router.post('/toggleSpot', spotController.toggleSpot)

module.exports = router
