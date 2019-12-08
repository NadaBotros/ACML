//importing packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoURI = require('./config/keysDev').mongoURI
const populate = require('./populationScript').populate
var path = require('path')
//Importing Middleware
const loggerMiddleware = require('./api/middleware/logger')

//intiating express app
const app = express()

// import route handlers
const spots = require('./api/routes/spots.router')

// init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(loggerMiddleware)

mongoose
  .connect(mongoURI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected...'))
  // .then(() => mongoose.connection.db.dropDatabase())
  // .then(() => console.log('Database Dropped'))
  // .then(() => populate())
  // .then(() => console.log('Populated DB'))
  .catch(err => console.log(err))

// Direct to Route Handlers
app.use('/api/spots', spots)

//Server static assets if in the production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on ${port} 👍 .`))
