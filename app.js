const express = require('express');
const app = express;

app.use('/user', (req, res) => {
    res.render();
})

app.get('/user/id', (req, res => {
  res
}))

app.post('/user/create', (req, res) => {
  res
})

app.use('/restaurant', (req, res) => {
    res.render();
})

app.use('/review', (res, req) => {
  res.render();
})

port = process.env.port || 8080;

app.listen(port);

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const getUserId = (req, res) => {
  const id = parseInt(req.params.id)

  client.query('SELECT * user WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.row);
  }) 
}

const createUser = (req, res) => {
  const { username, email, password, role } = req.body

  client.query('INSERT INTO user (username, email, password, role) VALUES ($1, $2, $3, $4)', [username, email, password, role], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send('User added with ID:  ${result.insertId}')
  })
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const {username, email, password, role} = req.body

  client.query(
    'UPDATE user SET username = $1, email=$2, password= $3, role = $4', 
    [username, email, password, role],
    (error, results) => {
      if(error) {
        throw error;
      }
      res.status(200).send('User modified with ID: ${id}')
    }

  )
}

module.exports = {
  getUserId,
  createUser,
  updateUser
}
