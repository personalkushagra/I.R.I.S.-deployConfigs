import express from 'express';
import 'dotenv/config';
import db from './server.js';
import paymentRoutes from "./paymentRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define routes
app.get('/api/home', (req, res) => {
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

app.post('/api/event2', (req, res) => {
  try {
    const {
      team_name,
      leader_name,
      leader_phone,
      leader_email,
      leader_prn,
      leader_branch,
      member2_name,
      member2_phone,
      member2_email,
      member2_prn,
      member2_branch,
      member3_name,
      member3_phone,
      member3_email,
      member3_prn,
      member3_branch,
      member4_name,
      member4_phone,
      member4_email,
      member4_prn,
      member4_branch,
    } = req.body;

    const query = `
      INSERT INTO event2_registrations (
        team_name,
        leader_name,
        leader_phone,
        leader_email,
        leader_prn,
        leader_branch,
        member2_name,
        member2_phone,
        member2_email,
        member2_prn,
        member2_branch,
        member3_name,
        member3_phone,
        member3_email,
        member3_prn,
        member3_branch,
        member4_name,
        member4_phone,
        member4_email,
        member4_prn,
        member4_branch
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    console.log('Query:', query);
    db.query(
      query,
      [
        team_name,
        leader_name,
        leader_phone,
        leader_email,
        leader_prn,
        leader_branch,
        member2_name,
        member2_phone,
        member2_email,
        member2_prn,
        member2_branch,
        member3_name,
        member3_phone,
        member3_email,
        member3_prn,
        member3_branch,
        member4_name,
        member4_phone,
        member4_email,
        member4_prn,
        member4_branch,
      ],
      (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ success: false, error: 'Database error' });
        } else {
          res.status(201).json({ success: true, message: 'Registration successful' });
        }
      }
    );
  } catch (err) {
    console.error('Error handling request:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Use payment routes
app.use('/api', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
