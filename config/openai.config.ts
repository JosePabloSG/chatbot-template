export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_SECRET_KEY ?? '',
  },
};

export const CHAT_CONTEXT = `
## Contexto del Chatbot IA
`;
