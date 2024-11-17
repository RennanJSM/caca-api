# Chatbot e Revisão de Artigos Científicos com IA

Este é o repositório do back-end de uma aplicação que utiliza inteligência artificial para oferecer funcionalidades de **chatbot** e **revisão de artigos científicos**. O projeto foi desenvolvido com foco em fornecer uma interface fácil de integrar, aproveitando APIs avançadas da OpenAI.

---

## **Features**

### 1. **Chatbot**
- Um chatbot baseado no modelo GPT da OpenAI.
- Capaz de responder perguntas, oferecer suporte geral e realizar conversas contextuais.
- Histórico de mensagens mantido por sessão, permitindo interações contínuas.

### 2. **Revisão de Artigos Científicos**
- Serviço de revisão detalhada de textos acadêmicos.
- Utiliza inteligência artificial para fornecer feedback sobre qualidade, estrutura e clareza dos artigos.
- Ideal para pesquisadores e estudantes que buscam melhorar seus manuscritos antes de submetê-los.

---

## **Tecnologias**

As principais tecnologias utilizadas neste projeto incluem:

- **Node.js**: Plataforma de execução JavaScript no servidor.
- **Express.js**: Framework web para Node.js, utilizado para configurar as rotas e middleware.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao projeto.
- **OpenAI API**: API para integrar os modelos de inteligência artificial GPT da OpenAI.

---

## **Como Rodar o Projeto**

### **Pré-requisitos**
Antes de começar, você precisará ter as seguintes ferramentas instaladas no seu computador:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### **Passo a Passo**

1. **Clone o repositório:**

   ```
   git clone https://github.com/RennanJSM/caca-api.git
   cd caca-api
   ```
2. **Instale as dependências:**

```
npm install
```

3. **Configure as variáveis de ambiente**





    Crie um arquivo .env na raiz do projeto.
    Adicione a seguinte configuração, substituindo SUA_API_KEY pela sua chave de API da OpenAI:

```
OPENAI_API_KEY=SUA_API_KEY
PORT=3001
```
4.  **Inicie o servidor:**

```
npm run dev
```
O servidor será iniciado na porta definida no arquivo .env (padrão: 3001).

5. **Endpoints Disponíveis:**

  
- **Chatbot:**
    - Endpoint: ``` POST/CHAT```
    - Body (JSON):
    ```
    {
        "message": "Sua mensagem para o chatbot"
    }
    ```

- **Revisão de Artigos:**

    - **Endpoint:** ```POST /articles/review```
    - Body (JSON):
    ```
    {
        "articleText": "Texto do artigo que será revisado"
    }
    ```

6. **Testando com o cURL:**
 
 
- Para testar os endpoints, você pode usar ferramentas como o cURL.
- Exemplo com cURL:
```
curl -X POST http://localhost:3001/chat -H "Content-Type: application/json" -d '{"m ```
