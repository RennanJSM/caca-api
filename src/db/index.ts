import { PrismaClient } from '@prisma/client';

const isProduction = process.env.NODE_ENV === 'production';

const prisma = new PrismaClient({
  log: isProduction ? ['error'] : ['warn', 'error'], 
  errorFormat: isProduction ? 'colorless' : 'pretty', 
});

prisma
  .$connect()
  .then(() => {
    console.log('📦 Successfully connected with database');
  })
  .catch((error) => {
    console.error('❌ Error connecting to database:', error);
  });

export default prisma;
