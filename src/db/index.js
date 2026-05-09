const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'miniblog',
  password: 'Jrdlr.5120',
  port: 5432,
});

module.exports = pool;