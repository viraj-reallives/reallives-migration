// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@components': path.resolve(__dirname, './src/components'),
//       '@pages': path.resolve(__dirname, './src/pages'),
//       '@content': path.resolve(__dirname, './src/content'),
//       '@hooks': path.resolve(__dirname, './src/hooks'),
//       '@context': path.resolve(__dirname, './src/context'),
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Production deploy folder under Laravel `public/` (omit leading slash duplicates). */
const PRODUCTION_BASE = '/reallives-website-main/';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? PRODUCTION_BASE : '/',
  plugins: [
    react(),
    viteCommonjs()
  ],
  
  optimizeDeps: {
    include: ['react-simple-maps', 'prop-types'],
  },

  resolve: {
    alias: {
      // @ represents src folder
      '@': path.resolve(__dirname, './src'),
      
      // Error solving aliases
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      
      // In folders ka path check karein:
      '@context': path.resolve(__dirname, './src/context'),
      '@content': path.resolve(__dirname, './src/content'),
      
      // Compatibility fix
      'prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
    },
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  server: {
    proxy: {
      // Dev-only proxy for the RealLives licensing pricing API. The backend's
      // CORS allowlist doesn't include arbitrary localhost ports, so we proxy
      // through Vite to keep the request same-origin in dev. Production hits
      // the real URL directly.
      '/sls-api': {
        target: 'https://slsapi.reallivesworld.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/sls-api/, ''),
      },
    },
  },
}));