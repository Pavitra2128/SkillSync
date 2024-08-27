const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 5001;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Default XAMPP MySQL user
  password: '',  // Default XAMPP MySQL password (leave blank if using default)
  database: 'miniproject',
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO miniusers (name, email, password) VALUES (?, ?, ?)',
      [name, email, password] // Storing the password as plain text
    );
    res.status(201).json({ userId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM miniusers WHERE email = ?', [email]);
    if (rows.length > 0) {
      const user = rows[0];
      if (password === user.password) {  // Plain text password comparison
        res.json({ message: 'Login successful' });
      } else {
        res.status(400).json({ error: 'Invalid password' });
      }
    } else {
      res.status(400).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
