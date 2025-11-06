const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.static('.'));

// Simple in-memory users (no database)
let users = [];
const JWT_SECRET = 'secret123';

// Auth middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token' });
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = users.find(u => u.id === decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'JWT Auth API',
    routes: ['POST /register', 'POST /login', 'GET /profile (protected)']
  });
});

// Register
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const id = Date.now();
  
  users.push({ id, username, email, password, role: 'user' });
  const token = jwt.sign({ id }, JWT_SECRET);
  
  res.json({
    success: true,
    token,
    user: { id, username, email, role: 'user' }
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  res.json({
    success: true,
    token,
    user: { id: user.id, username: user.username, email: user.email, role: user.role }
  });
});

// Protected route
app.get('/profile', auth, (req, res) => {
  res.json({
    success: true,
    message: 'Protected route accessed',
    user: req.user
  });
});

app.listen(5001, () => console.log('Server on http://localhost:5001'));