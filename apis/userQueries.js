

const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://cwxubiblgpndeb:f902c4ee1c11e90effa8b8a1eee578cdc6972ad6ee9b486c458dc5dc5a4142f2@ec2-54-228-252-67.eu-west-1.compute.amazonaws.com:5432/ddodrdvhbpfs19",
  ssl: true,
});

client.connect();

//Users 
const getUsers = (req, res) => {
    client.query('SELECT * FROM _user ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows)
    })
  }

const getUserId = (req, res) => {
  const id = parseInt(req.params.id)

  client.query('SELECT * FROM _user WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  }) 
}

const createUser = (req, res) => {
  const { username, email, password, role } = req.body

  client.query('INSERT INTO _user (username, email, password, role) VALUES ($1, $2, $3, $4)', [username, email, password, role], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send('User added with ID:  ${result.insertId}')
  })
}

const updateUser = (req, res) => {
  const user_id = parseInt(req.params.user_id)
  const {username, email, password, role} = req.body

  client.query(
    'UPDATE _user SET username = $1, email=$2, password= $3, role = $4 WHERE user_id=$5', 
    [username, email, password, role, user_id],
    (error, results) => {
      if(error) {
        throw error;
      }
      res.status(200).send('User modified with ID: ${id}')
    }
  )
}

module.exports = {
    getUsers,
    getUserId,
    createUser,
    updateUser

}
