require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const AWS = require('aws-sdk');

// Konfigurer AWS
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const app = express();
app.use(bodyParser.json());



// Importer ruter
const jsonRoutes = require('./routes/jsonRoutes');
const dishRoutes = require('./routes/dishRoutes');

// Bruk ruter
app.use('/json', jsonRoutes);
app.use('/dishes', dishRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;