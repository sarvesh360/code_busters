const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors()); // allow frontend to talk to backend
app.use(express.json()); // allow POST requests with JSON

// Endpoint
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.json({ message: 'Data received successfully!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});