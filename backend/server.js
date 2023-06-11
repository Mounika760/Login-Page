const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock user data
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'password' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a user in the mock data
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});