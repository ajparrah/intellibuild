import { registerAs } from '@nestjs/config';

export const OPEN_AI_CONFIG = registerAs('openai', () => ({
  apiKey: process.env.OPENAI_API_KEY,
}));
