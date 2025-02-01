import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log('DATABASE_URL:', typeof process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL não está definida. Verifique seu arquivo .env');
}

console.log('✅ DATABASE_URL carregada!');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: false,
// });

export const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  }
)



export const syncDatabase = async () => {
  
  try {
    await database.authenticate();
    console.log('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }

  const [users] = await database.query('SELECT * FROM users');
    console.log('Usuários encontrados:', users);
};

export default { database, syncDatabase };
