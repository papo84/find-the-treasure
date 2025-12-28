import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        instructions: resolve(__dirname, 'instructions.html'),
        riddle1: resolve(__dirname, 'riddle1.html'),
        riddle2: resolve(__dirname, 'riddle2.html'),
        riddle3: resolve(__dirname, 'riddle3.html'),
        riddle4: resolve(__dirname, 'riddle4.html'),
        riddle5: resolve(__dirname, 'riddle5.html'),
        celebration: resolve(__dirname, 'celebration.html'),
        end: resolve(__dirname, 'end.html'),
      },
    },
  },
  publicDir: 'public',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

