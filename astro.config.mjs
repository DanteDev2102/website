import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import ssl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
    site: 'https://dantedev.dev',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    server: {
      https: true,
    },
    plugins: [ssl()]
});
