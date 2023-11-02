// database.js
const CyclicDB = require('@cyclic/dynamodb-data-api-client');

// Initialiserer CyclicDB med din unike database-URL
const db = new CyclicDB(process.env.CYCLIC_DB);

module.exports = db;
