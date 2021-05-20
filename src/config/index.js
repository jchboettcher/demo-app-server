module.exports = {
  appName: 'Backend Starter',
  port: process.env.PORT || 4000,

  tokenSecret: process.env.TOKEN_SECRET || 'qppvaojdovowauilbrydfhjsem',

  db: {
    database_url: process.env.DATABASE_URL,
    max_connections: Number.isNaN(Number(process.env.DB_MAX_CONNECTIONS))
      ? 10
      : Number(process.env.DB_MAX_CONNECTIONS),
  },
}
