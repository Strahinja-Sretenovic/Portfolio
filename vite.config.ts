import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

// Mirror the global security headers from vercel.json in `vite preview`, so production CSP issues show up locally.
const vercel = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'vercel.json'), 'utf8'));
const globalHeaders: Record<string, string> = Object.fromEntries(
  (vercel.headers.find((h: { source: string }) => h.source === '/(.*)')?.headers ?? []).map(
    (h: { key: string; value: string }) => [h.key, h.key === 'Content-Security-Policy' ? h.value.replace('; upgrade-insecure-requests', '') : h.value],
  ),
);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Keep animation + React vendor code in long-cacheable chunks separate from app code
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          if (/[\\/](gsap|lenis)[\\/]/.test(id)) return 'gsap';
          if (/[\\/](motion|motion-dom|motion-utils|framer-motion)[\\/]/.test(id)) return 'motion';
        },
      },
    },
  },
  preview: {
    headers: globalHeaders,
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
