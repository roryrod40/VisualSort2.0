const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection URL
// const mongoUrl = 'mongodb://<your_database_url>';

// // Create a MongoDB client
// const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect()
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB', err);
//   });

// Define your CRUD routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
