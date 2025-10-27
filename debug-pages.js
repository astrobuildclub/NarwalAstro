import { loadQuery } from './src/sanity/lib/load-query.js';
import { DEBUG_PAGES_QUERY } from './src/sanity/queries.js';

async function debugPages() {
  try {
    const { data } = await loadQuery({ query: DEBUG_PAGES_QUERY });
    console.log('📄 Pages in Sanity:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Error fetching pages:', error);
  }
}

debugPages();
