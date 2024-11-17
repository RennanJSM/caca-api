import express from 'express';
import chatRouter from '../routes/chatRoutes';
import userRouter from './userRoutes';

const app = express();

app.use(express.json()); // Permitir JSON no corpo das requisições

// Conectar o roteador do chat no caminho '/chat'
app.use('/chat', chatRouter);
app.use('/user', userRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
