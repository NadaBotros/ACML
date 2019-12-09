const Spot = require('../../models/Spots')
const spotValidator = require('../helpers/validations/spot.validation')

//As a user I should be able to get all the spots in the parking space
exports.allSpots = async function(req, res) {
  try {
    const spots = await Spot.find()
    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}

//As a user I should be able to get all the empty spots in the parking space
exports.emptySpots = async function(req, res) {
  try {
    const spots = await Spot.find({ occupied: false })
    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}

//Filter spots according to which parking lot they are in
exports.parkingLot = async function(req, res) {
  try {
    const parkingLot = req.body.parkingLot
    const spots = await Spot.find({ parkingLot: parkingLot })
    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}
//Filter spots according to which parking lot they are in
exports.parkingLotEmpty = async function(req, res) {
	try {
		const parkingLot = req.body.parkingLot
		const spots = await Spot.find({ parkingLot: parkingLot, occupied: false })
		res.json({ data: spots })
	} catch (error) {
		console.log('error')
	}
}

// As a user I should be able to update that a certian parking space is occupied/unoccupied
exports.updateSpot = async function(req, res) {
  try {
    const spotId = req.body.id
    const getSpot = await Spot.findOne({ _id: spotId })
    if (!getSpot) return res.status(400).send({ msg: 'Spot is not found' })
    const isValidated = spotValidator.actionValidation(req.body)
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message })
    const updatedSpot = await Spot.findOneAndUpdate({ _id: spotId }, req.body)
    // const getNewSpot = await Spot.findOne({ _id: spotId })
    const getNewSpot = await Spot.find()

    res.json({ data: getNewSpot })
  } catch (error) {
    console.log(error)
  }
}

//Filter spots according to which parking lot they are in
exports.parkingLotEmpty = async function(req, res) {
  try {
    const parkingLot = req.body.parkingLot
    const spots = await Spot.find({ parkingLot: parkingLot, occupied: false })
    // console.log({ data: spots })

    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}

// // As a user I should be able to update that a certian parking space is occupied/unoccupied
// exports.toggleSpot = async function(req, res) {
//   try {
//     const spotId = req.body.id
//     const getSpot = await Spot.findOne({ _id: spotId })
//     console.log('Aaaaaaaaaa')

//     if (!getSpot) return res.status(400).send({ msg: 'Spot is not found' })
//     const t = 'true'
//     const f = 'false'
//     if (getSpot.occupied == true) {
//       console.log('1' + getSpot.occupied)
//       getSpot.occupied = false
//       console.log('2' + getSpot.occupied)
//     } else if (getSpot.occupied == false) {
//       console.log('3' + getSpot.occupied)
//       getSpot.occupied = true
//       console.log('4' + getSpot.occupied)
//     }

//     const getNewSpot = await Spot.findOne({ _id: spotId })
//     res.json({ data: getNewSpot })
//   } catch (error) {
//     console.log(error)
//   }
// }

exports.parkingLotEmptyAndAll = async function(req, res) {
  try {
    const parkingLot = req.body.parkingLot
    const emptySpots = await Spot.find({
      parkingLot: parkingLot,
      occupied: false
    })
    const allSpots = await Spot.find({ parkingLot: parkingLot })
    res.json({
      emptySpots: emptySpots,
      allSpots: allSpots
    })
  } catch (error) {
    console.log('error')
  }
}

//  As an admin I should be able to add new parking spots
exports.addSpot = async function(req, res) {
  try {
    const isValidated = spotValidator.createValidation(req.body)

    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message })

    const newSpot = await Spot.create(req.body)

    res.json({ data: newSpot })
  } catch (error) {
    console.log(error)
  }
}

//As an admin I should be able to delete parking spots

exports.deleteSpot = async function(req, res) {
  try {
    const isValidated = spotValidator.actionValidation(req.body)

    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message })

    const id = req.body.id
    const deletedSpot = await Spot.findByIdAndRemove({ _id: id })
    res.json({ msg: 'Spot deleted successfully', data: deletedSpot })
  } catch (error) {
    console.log(error)
  }
}
