import { defineConfig } from '@prisma/client';

export default defineConfig({
  client: {
    // Adapter points to your database
    adapter: 'mysql',
    url: process.env.DATABASE_URL,
  },
});