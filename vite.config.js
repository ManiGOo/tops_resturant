import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tops_resturant/', // ← VERY IMPORTANT
  build: {
    outDir: 'dist',
  },
});