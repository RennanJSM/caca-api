import 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    history: Array<{ role: 'user' | 'assistant'; content: string }>;
  }
}
