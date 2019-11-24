const Spots = require('../../models/Spots')
const spotValidator = require('../helpers/validations/spot.validation')

//As a user I should be able to get all the spots in the parking space
exports.all_spots = async function(req, res) {
  try {
    const spots = await Spots.find()
    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}

//As a user I should be able to get all the empty spots in the parking space
exports.empty_spots = async function(req, res) {
  try {
    const spots = await Spots.find({ occupied: false })
    res.json({ data: spots })
  } catch (error) {
    console.log('error')
  }
}

// //As a user I should be able to update that a certian parking space is occupied/unoccupied
// exports.update_spots = async function(req, res) {
//   try {
//     const id = req.body.id

//     const occupiedUpdated = req.body.occupied
//     const x = Spots.find({ occupied: true })
//     // const spots = Spots.findOneAndUpdate(
//     //   { occupied: occupiedUpdated }
//     // )
//     console.log(x)
//     // res.json({ data: spot, msg: 'Spot update successfully ' })
//   } catch (error) {
//     console.log('Error Happened')
//   }
// }
