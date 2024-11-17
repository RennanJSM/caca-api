import { Router } from 'express';
import ChatController from '../controllers/chatController';

const chatRouter = Router();

// Endpoint POST para enviar mensagens ao ChatController
chatRouter.post('/', ChatController.sendMessage);

// Endpoint GET para verificar se o servidor está ativo
chatRouter.get('/', (_, res) => {
  res.status(200).send('The chat server is running');
});

export default chatRouter;
