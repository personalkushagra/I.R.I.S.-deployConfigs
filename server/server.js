import mysql from 'mysql2';
import 'dotenv/config';
import Razorpay from "razorpay";

//const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSOLPORT}/${process.env.MYSQLDATABASE}`

const urlDB = `mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/${{MYSQL_DATABASE}}`

const db = mysql.createConnection(urlDB);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

// Create Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// Log Razorpay instance configuration
//console.log('Razorpay instance:', instance);

export default db;
export { db };
