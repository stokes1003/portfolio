import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_SERVICE_ID': JSON.stringify(
      process.env.VITE_SERVICE_ID || ''
    ),
    'import.meta.env.VITE_TEMPLATE_ID': JSON.stringify(
      process.env.VITE_TEMPLATE_ID || ''
    ),
    'import.meta.env.VITE_PUBLIC_KEY': JSON.stringify(
      process.env.VITE_PUBLIC_KEY || ''
    ),
  },
});
