require('dotenv').config()
module.exports = {
  ...process.env,
  APP_ID: process.env.ID || 'MY',
  SECRET: process.env.SECRET || 'secret',
  BASE_URL: process.env.BASE_URL || 'http://localhost:30001/page/appointment/api/',
}
