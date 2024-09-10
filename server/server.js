import mysql from 'mysql2';
import 'dotenv/config';
import Razorpay from "razorpay";

//this below url was added from MySQL's RAW Editor MySQL_URL
//const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_PRIVATE_DOMAIN}:3306/${process.env.MYSQL_DATABASE}`

//this below url was added from repo's MySQL_URL
// done with this:const urlDB = `mysql://root:etMIPZfGQafWtrFlnFZQhbsMXItVpOVj@iris-deployconfigs.railway.internal:3306/railway`

//and this is from SQL's MySQL_URL
const urlDB = `mysql://root:etMIPZfGQafWtrFlnFZQhbsMXItVpOVj@mysql.railway.internal:3306/railway`

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
