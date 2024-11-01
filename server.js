const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();
const port = 3000;

// Define the path to the JSON file
const filePath = path.join(__dirname, 'data.json');

// Create an endpoint to serve the JSON data
app.get('/data', (req, res) => {
  // Read the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      res.status(500).send('Error reading the file');
      return;
    }

    // Parse the JSON data
    try {
      const jsonData = JSON.parse(data);
      console.log('JSON data:', jsonData); // Optional: log the JSON data
      res.json(jsonData); // Send the JSON response to the client
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Error parsing JSON');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
