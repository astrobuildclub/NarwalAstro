import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true";
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
        "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing."
      );
    }

    const perspective = visualEditingEnabled ? "previewDrafts" : "published";

    const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
      query,
      params ?? {},
      {
        filterResponse: false,
        perspective,
        resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
        stega: visualEditingEnabled,
        ...(visualEditingEnabled ? { token } : {}),
      }
    );

    return {
      data: result,
      sourceMap: resultSourceMap,
      perspective,
    };
  } catch (error) {
    // Log error in development mode
    if (import.meta.env.DEV) {
      console.warn(`Sanity query failed:`, error);
      console.warn(`Query:`, query);
      console.warn(`Params:`, params);
    }
    
    // Return null gracefully for missing content
    return {
      data: null,
      sourceMap: null,
      perspective: "published",
    };
  }
}
