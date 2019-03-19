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



app.post('/user', db.createUser)

app.put('/user/:id', db.updateUser)

app.get('/restaurant', db.getRestaurant)

app.get('/review', db.createReview)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})