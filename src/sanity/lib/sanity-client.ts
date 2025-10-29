import { createClient } from '@sanity/client';

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true';
const token = import.meta.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2025-01-28',
  useCdn: !visualEditingEnabled,
  token: visualEditingEnabled ? token : undefined,
  perspective: visualEditingEnabled ? 'previewDrafts' : 'published',
});
