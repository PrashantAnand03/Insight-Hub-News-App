import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure the server is correctly configured, but no special settings needed for MIME types
  }
});
