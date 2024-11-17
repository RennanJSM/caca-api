import express from 'express';
import session from 'express-session';
import chatRouter from './routes/chatRoutes';
import 'dotenv/config';
import userRouter from './routes/userRoutes';
import articleRouter from './routes/articleRoutes';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true 
}));


app.options('*', cors());

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
