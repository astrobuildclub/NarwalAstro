import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { linkField } from 'sanity-plugin-link-field';
import { seoMetaFields } from 'sanity-plugin-seo';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'narwal-creative',
  title: 'Narwal Creative',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    structureTool(), 
    visionTool(), 
    linkField(), 
    seoMetaFields()
  ],
  schema: {
    types: schemaTypes,
  },
});
