const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env'),
})

const config = require('./src/config')

// Default Knex settings
module.exports = {
  client: 'pg',
  connection: {
    connectionString: config.db.database_url,
    ssl: true,
  },
  migrations: {
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: config.db.max_connections,
    afterCreate(conn, done) {
      conn.on('error', error => {
        console.log('Database connection error!')
        console.log(error)
      })
      conn.query('SELECT version();', error => {
        if (error) {
          done(error, conn)
        } else {
          console.log('Database connection established successfully!')
          done(undefined, conn)
        }
      })
    },
  },
}
