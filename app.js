const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const userQueries = require('./apis/userQueries')
const restaurantQueries = require('./apis/restaurantQueries')
const reviewQueries = require('./apis/reviewQueries')
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/user', userQueries.getUsers)
app.get('/user/:id', userQueries.getUserId)
app.post('/user/create', userQueries.createUser)
app.post('/user/update', userQueries.updateUser)

app.get('/restaurant', restaurantQueries.getRestaurant)
app.get('/restaurant/:id', restaurantQueries.getRestaurantById)
app.post('/restaurant/create', restaurantQueries.createRestaurant)
app.post('/restaurant/update', restaurantQueries.updateRestaurant)
app.get('/restaurant/category/:category', restaurantQueries.getRestaurantByCategory)
app.get('/restaurant/name/:name', restaurantQueries.getRestaurantByName)

app.get('/review', reviewQueries.getReview)
app.post('/review/create', reviewQueries.createReview)
app.post('/review/update', reviewQueries.updateReview)
app.get('/review/restaurant/:id', reviewQueries.getReviewRestaurantId)
app.get('/review/latest', reviewQueries.getLastestReview)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})