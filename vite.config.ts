import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/drag-and-drop-upload/",
  plugins: [
    react({
      babel: {
        plugins: [
          ['twin', {
            "exclude": [
              "\x00commonjsHelpers.js" // Avoid build error
            ]
          }],
          'macros',
          '@emotion/babel-plugin'
        ]
      }
    }),
    tsconfigPaths(),
  ],
  define: {
    'process.env': {},
  },
})
