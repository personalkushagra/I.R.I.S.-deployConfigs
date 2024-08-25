const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Import the database connection
const db = require('./database');

// Define routes
app.get('/api/home', (req, res) => {
  // Handle home page API request
  res.json({ message: 'Welcome to the home page!' });
});

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const query = 'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
    console.log('Query:', query);
    db.query(query, [name, email, phone, subject, message], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ success: false, error: 'Database error' });
      } else {
        res.status(201).json({ success: true, message: 'Message received' });
      }
    });
  } catch (err) {
    console.error('Error handling request:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});