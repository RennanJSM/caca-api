import { Router } from 'express';
import ArticleController from '../controllers/articleController';

const articleRouter = Router();

// Rota para revisão de artigos
articleRouter.post('/review', ArticleController.review.bind(ArticleController));

export default articleRouter;
