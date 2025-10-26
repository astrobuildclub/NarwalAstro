import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { linkField } from 'sanity-plugin-link-field';
import { seoMetaFields } from 'sanity-plugin-seo';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'narwal-creative',
  title: 'Narwal Creative',
  projectId: 'q178y836',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), linkField(), seoMetaFields()],
  schema: {
    types: schemaTypes,
  },
});
