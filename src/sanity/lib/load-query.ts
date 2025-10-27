import { type QueryParams } from 'sanity';
import { createClient } from '@sanity/client';

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true';
const token = import.meta.env.SANITY_API_READ_TOKEN;

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  try {
    if (visualEditingEnabled && !token) {
      console.warn(
        'The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.',
      );
    }

    const perspective = visualEditingEnabled ? 'previewDrafts' : 'published';

    // Create client instance
    const client = createClient({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET,
      apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2025-01-28',
      useCdn: !visualEditingEnabled,
      token: visualEditingEnabled ? token : undefined,
      perspective,
    });

    const { result, resultSourceMap } = await client.fetch<QueryResponse>(
      query,
      params ?? {},
      {
        filterResponse: false,
        resultSourceMap: visualEditingEnabled ? 'withKeyArraySelector' : false,
        stega: visualEditingEnabled,
      },
    );

    return {
      data: result,
      sourceMap: resultSourceMap,
      perspective,
    };
  } catch (error) {
    // Log error in development mode
    if (import.meta.env.DEV) {
      console.error(`❌ Sanity query failed:`, error);
      console.warn(`Query:`, query);
      console.warn(`Params:`, params);
    }

    // Throw error instead of returning null - laat de frontend crashen
    throw new Error(`Sanity query failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
