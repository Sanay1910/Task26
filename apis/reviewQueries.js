
const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://cwxubiblgpndeb:f902c4ee1c11e90effa8b8a1eee578cdc6972ad6ee9b486c458dc5dc5a4142f2@ec2-54-228-252-67.eu-west-1.compute.amazonaws.com:5432/ddodrdvhbpfs19",
  ssl: true,
});

client.connect();


const getReview = (req, res) => {
    client.query('SELECT * FROM review ORDER BY review_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }
  
const createReview = (req, res) => {
    const { rating, reviewText, user_id, restaurant_id } = req.body
  
    client.query('INSERT INTO review (rating, reviewText, user_id, restaurant_id) VALUES ($1, $2, $3, $4)', [rating, reviewText, user_id, restaurant_id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send('Review added with ID:  ${result.insertId}')
    })
  }

  
  const updateReview = (req, res) => {
    const review_id = parseInt(req.params.review_id)
    const {  rating, reviewText, user_id, restaurant_id } = req.body
  
    client.query(
      'UPDATE review SET rating = $1, review=$2, user_id= $3, restaurant_id = $4 WHERE review_id=$5', 
      [ rating, reviewText, user_id, restaurant_id, review_id],
      (error, results) => {
        if(error) {
          throw error;
        }
        res.status(200).send('Review modified with ID: ${id}')
      }
    )
  }

  const getReviewRestaurantId = (req, res) => {
    const id = parseInt(req.params.id)
  
    client.query('SELECT reviewText FROM review WHERE restaurant_id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }) 
  }

  const getLastestReview = (req, res) => {
      client.query('SELECT * FROM review ORDER BY updated_at DESC LIMIT 1', (error, results) => {
          if(error) {
              throw error;
          }
          res.status(200).json(results.rows)
      })
  }

  module.exports = {
      getReview,
      getReviewRestaurantId,
      createReview,
      updateReview,
      getLastestReview
  }