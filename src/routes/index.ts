import express from 'express';
import chatRouter from '../routes/chatRoutes';
import userRouter from './userRoutes';
import articleRouter from './articleRoutes';

const app = express();

app.use(express.json()); // Permitir JSON no corpo das requisições

app.use('/chat', chatRouter);
app.use('/user', userRouter)
app.use('/review', articleRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
