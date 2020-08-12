// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'siliconvalley-express-db',
      user: 'root',
      password: 'toor',
      database: 'database'
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
