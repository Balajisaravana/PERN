const { Pool } =  require('pg')
 
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'yelp',
    user: 'postgres',
    password: 'Iforgot@12345',
})
 
module.exports = { query: (text, params) => pool.query(text, params)};