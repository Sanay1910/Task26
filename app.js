const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/user', db.getUsers)
app.get('/user/:id', db.getUserId)
app.post('/user/create', db.createUser)
app.put('/user/update', db.updateUser)

app.get('/restaurant', db.getRestaurant)
app.get('/restaurant/:id', db.getRestaurantById)
app.post('/restaurant/create', db.createRestaurant)
app.put('/restaurant/update', db.updateRestaurant)

app.get('/review', db.getReview)
app.get('/review/create', db.createReview)
app.put('/review/update', db.updateReview)
app.get('/review/restaurant/:id', db.getReviewRestaurantId)
app.get('/review/latest', db.getLastestReview)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})