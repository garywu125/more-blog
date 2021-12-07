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
  // buildOptions: {
  //   site: 'https://astro-blog-template.netlify.app',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  //   sitemap: true,         // Generate sitemap (set to "false" to disable)
  // },
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    port: 3030,             // The port to run the dev server on.
  },
  renderers: ['@astrojs/renderer-preact'], 
  vite: {
    resolve: {
      // alias: {
      //   $src: path.resolve('./src'),
      //   $components: path.resolve('./src/components'),
      //   $layouts: path.resolve('./src/layouts'),
      // },
    },  
  },
});
