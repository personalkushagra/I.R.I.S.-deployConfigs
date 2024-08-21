const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define routes
app.get('/api/home', (req, res) => {
  // Handle home page API request
  res.json({ message: 'Welcome to the home page!' });
});

app.post('/api/contact', (req, res) => {
  // Handle contact form submission
  const { name, email, message } = req.body;
  // Save the contact form data to the SQL database
  res.json({ message: 'Contact form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});