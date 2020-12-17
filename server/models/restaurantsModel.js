const { Pool } = require('pg');

// const dotenv = require('dotenv')

// const path = require('path');

const PG_URI = process.env.DB_CONN;

const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}