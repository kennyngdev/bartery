// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOSTLOCAL || "127.0.0.1",
      database: process.env.DB_NAMELOCAL || "testdb",
      user: process.env.DB_USERLOCAL || "kenny01123",
      url:  process.env.DATABASE_URL
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
