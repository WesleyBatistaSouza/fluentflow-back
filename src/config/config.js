import 'dotenv/config';

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    migrationStorage: 'json',
    migrationStoragePath: 'src/migrations/20250201153546-create-user.js',
  }
};
