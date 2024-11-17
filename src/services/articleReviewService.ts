import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class ArticleReviewService {
  async reviewArticle(articleText: string): Promise<string> {
    try {
      const prompt = `Você é um revisor de artigos científicos. Forneça um feedback detalhado sobre o seguinte artigo:\n\n${articleText}\n\nComentários:`;

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: prompt },
        ],
        max_tokens: 1500,
        temperature: 0.7,
      });

      const content = response.choices?.[0]?.message?.content?.trim();

      if (content) {
        return content;
      } else {
        throw new Error('Não foi possível obter a resposta da IA.');
      }
    } catch (error: any) {
      console.error('Erro ao processar o artigo:', error);
      throw new Error('Não foi possível revisar o artigo no momento.');
    }
  }
}

export default new ArticleReviewService();
