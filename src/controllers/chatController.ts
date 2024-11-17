import { Request, Response, NextFunction } from 'express';
import ChatService from '../services/chatService';

class ChatController {
  async sendMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { message } = req.body;

      // Processa a mensagem utilizando o ChatService
      const gptResponse = await ChatService.processMessage([
        { role: 'user', content: message },
      ]);

      // Retorna a resposta da IA para o cliente
      res.status(200).json({ response: gptResponse });
    } catch (error) {
      console.error('Error in ChatController:', error);
      next(error);
    }
  }
}

export default new ChatController();
