module.exports = {
  app: {
    port: 3000,
  },
  jwt: {
    jwt_secret: 'FAKE_SECRET',
    jwt_session: {
      session: false,
    },
  },
  typeorm: {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,
    logging: false,
  },
  swagger: {
    base_path: '/',
  },
  account: {
    salt: 'FAKE_SALT',
  },
};
