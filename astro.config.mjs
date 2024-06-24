import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { loadEnv } from 'vite';
import react from "@astrojs/react";
const {
  IMAGE_DOMAIN
} = loadEnv(process.env.NODE_ENV, process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  image: {
    domains: [IMAGE_DOMAIN]
  },
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), compress(), react()]
});