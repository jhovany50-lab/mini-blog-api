require('dotenv').config();

const { Pool } = require('pg');

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    })
  : new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

pool.query(`
  SELECT current_database(),
         current_schema(),
         current_user
`)
.then(({ rows }) => {
  console.log('=== DATABASE INFO ===');
  console.table(rows);
})
.catch(console.error);

module.exports = pool;