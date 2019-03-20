

const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://cwxubiblgpndeb:f902c4ee1c11e90effa8b8a1eee578cdc6972ad6ee9b486c458dc5dc5a4142f2@ec2-54-228-252-67.eu-west-1.compute.amazonaws.com:5432/ddodrdvhbpfs19",
  ssl: true,
});

client.connect();


const getRestaurant = (req, res) => {
    client.query('SELECT * FROM restaurant ORDER BY restaurant_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const getRestaurantById = (req, res) => {
    const id = parseInt(req.params.id)
  
    client.query('SELECT * FROM restaurant WHERE restaurant_id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }) 
  }

  const createRestaurant = (req, res) => {
    const { name, address, category, description, user_id } = req.body
  
    client.query('INSERT INTO restaurant (name, address, category, description, user_id) VALUES ($1, $2, $3, $4, $5)', [name, address, category, description, user_id ], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send('Restaurant added with ID:  ${result.insertId}')
    })
  }

  const updateRestaurant = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, address, category, description, user_id} = req.body
  
    client.query(
      'UPDATE restaurant SET name = $1, address=$2, category= $3, description = $4, user_id=$5', 
      [ name, address, category, description, user_id],
      (error, results) => {
        if(error) {
          throw error;
        }
        res.status(200).send('Restaurant modified with ID: ${id}')
      }
    )
  }

  const getRestaurantByCategory = (req, res) => {
    const {category} = req.params.category

    client.query('SELECT * FROM restaurant WHERE category = $1',[category], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }) 
  }

  const getRestaurantByName = (req, res) => {
    const {name} = req.params.name
  
    client.query('SELECT * FROM restaurant WHERE name = $1',[name], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }) 
  }
  module.exports = {
      getRestaurant,
      getRestaurantById,
      createRestaurant,
      updateRestaurant,
      getRestaurantByCategory,
      getRestaurantByName
  }
