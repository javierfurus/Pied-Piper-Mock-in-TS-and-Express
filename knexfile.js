// Update with your config settings.
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '*******',
      user: '*****',
      password: '******',
      database: '******'
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
