const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data sent by the frontend
app.use(express.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'iris_website'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  
  // Save the form data to the database
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Database error' });
    }
    res.status(200).json({ success: true, message: 'Message received' });
  });
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
