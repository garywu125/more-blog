// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import path from 'node:path';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ['@astrojs/renderer-preact'], 
  vite: {
    resolve: {
      alias: {
        $src: path.resolve('./src'),
        $components: path.resolve('./src/components'),
        $layouts: path.resolve('./src/layouts'),
      },
    },  
  },
});
