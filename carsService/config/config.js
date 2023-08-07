const dotenv = require('dotenv');
dotenv.config();
const {DB_NAME, DB_PSWD, DB_USER, DB_PORT}=process.env



module.exports={
  "development": {
    "username": DB_USER,
    "password": DB_PSWD,
    "database": `${DB_NAME}_development`,
    "host": "localhost",
    "port":DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
