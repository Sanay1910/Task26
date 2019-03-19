const express = require('express');
const app = express;

app.use('/user', (req, res) => {
    res.render();
})

app.use('/(restaurant', (req, res) => {
    res.render();
})

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