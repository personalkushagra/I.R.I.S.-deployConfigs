const express = require('express');
app.use(express.json());
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data sent by the frontend
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'iris_website'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

module.exports = db;