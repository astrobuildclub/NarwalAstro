import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { loadEnv } from 'vite';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
const {
  IMAGE_DOMAIN
} = loadEnv(process.env.NODE_ENV, process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  image: {
    domains: [IMAGE_DOMAIN]
  },
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), compress(), react()]
});