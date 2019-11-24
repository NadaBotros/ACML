const Spot = require('../../models/Spots')
const spotValidator = require('../helpers/validations/spot.validation')

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
    const getNewSpot = await Spot.findOne({ _id: spotId })
    res.json({ data: getNewSpot })
  } catch (error) {
    console.log(error)
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
