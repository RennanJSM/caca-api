import express from 'express';
import session from 'express-session';
import chatRouter from './routes/chatRoutes';
import 'dotenv/config';
import userRouter from './routes/userRoutes';
import articleRouter from './routes/articleRoutes';


const app = express();

app.use(express.json());

// Configuração do middleware 'express-session'
app.use(
  session({
    secret: 'seu-segredo',
    resave: false,
    saveUninitialized: true,
  })
);

// Rotas
app.use('/chat', chatRouter);
app.use('/user', userRouter)
app.use('/articles', articleRouter)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
