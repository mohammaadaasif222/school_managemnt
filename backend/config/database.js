const dotenv = require("dotenv");
const mysql = require('mysql2');
dotenv.config({ path: "backend/config/config.env" });
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  database:  process.env.DB_NAME,
  port:process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


 connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});
module.exports = connection;
