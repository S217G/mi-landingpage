import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://S217G.github.io',
  base: '/mi-landingpage',
  integrations: [tailwind()]
});

