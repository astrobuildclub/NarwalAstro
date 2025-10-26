import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { linkField } from 'sanity-plugin-link-field';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'narwal-creative',
  title: 'Narwal Creative',
  projectId: 'q178y836',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), linkField()],
  schema: {
    types: schemaTypes,
  },
});
