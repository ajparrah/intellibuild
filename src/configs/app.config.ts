import { registerAs } from '@nestjs/config';

export const APP_CONFIG = registerAs('app', () => ({
  port: Number(process.env.PORT) || 3000,
}));
