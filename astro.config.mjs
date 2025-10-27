import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { loadEnv } from 'vite';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sanity from "@sanity/astro";

const {
  IMAGE_DOMAIN,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION
} = loadEnv(process.env.NODE_ENV, process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: IMAGE_DOMAIN,
    },{
      protocol: 'https',
      hostname: '**.netlify.app',
    },{
      protocol: 'https',
      hostname: '**.narwalcreative.com',
    },{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    }],
  },
  compressHTML: true,
  integrations: [
    mdx(), 
    icon(), 
    tailwind({
      applyBaseStyles: false
    }), 
    compress(), 
    react(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // Voor draft preview
      apiVersion: PUBLIC_SANITY_API_VERSION,
      studioBasePath: '/studio',
      stega: {
        studioUrl: '/studio',
      },
    })
  ]
});