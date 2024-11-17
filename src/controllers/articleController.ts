import { Request, Response, NextFunction } from 'express';
import ArticleReviewService from '../services/articleReviewService';

class ArticleController {
  async review(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { articleText } = req.body;

      if (!articleText) {
        res.status(400).json({ message: 'O texto do artigo é obrigatório.' });
        return;
      }

      const feedback = await ArticleReviewService.reviewArticle(articleText);

      res.status(200).json({ feedback });
    } catch (error) {
      console.error('Erro no controlador de artigos:', error);
      next(error);
    }
  }
}

export default new ArticleController();
