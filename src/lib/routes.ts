import {
  getHomeFields,
  getSlideFields,
  getAllProjects,
  getNodeByUri,
} from '../lib/api';
import { loadQuery } from '../sanity/lib/load-query';
import { HOME_QUERY } from '../sanity/queries';
import type { SanityHome } from '../sanity/types';

// templates
import Single from '../components/templates/Single.astro';
import WorkOverview from '../components/templates/WorkOverview.astro';
import WorkDetail from '../components/templates/WorkDetail.astro';
import Archive from '../components/templates/Archive.astro';
import Page from '../components/templates/Page.astro';
import Home from '../components/templates/Home.astro';

export async function getNodeData(slug: string) {
  // Probeer eerst Sanity data voor homepage
  if (slug === '/' || slug === '') {
    try {
      const { data: sanityHome } = await loadQuery<SanityHome>({
        query: HOME_QUERY,
      });

      if (sanityHome) {
        if (import.meta.env.DEV) {
          console.log('🏠 Using Sanity data for homepage');
        }
        return {
          ...sanityHome,
          dataSource: 'sanity',
        };
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn(
          '⚠️ Sanity homepage query failed, falling back to WordPress:',
          error,
        );
      }
    }
  }

  // Fall back naar WordPress
  try {
    const data = await getNodeByUri(slug);
    let node = data.nodeByUri;

    //fetch additional fields on the homepage
    if (node.isFrontPage) {
      let homeFields = await getHomeFields();
      let slideFields = await getSlideFields();
      node = { ...node, ...homeFields.pageBy, ...slideFields };
    }
    // fetch additional fields on the project
    if (node.template?.templateName === 'Work') {
      let allProjects = await getAllProjects();
      node = { ...node, ...allProjects };
    }

    return {
      ...node,
      dataSource: 'wordpress',
    };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('❌ WordPress fallback failed:', error);
    }
    throw error;
  }
}

export function getTemplateByRoute(node: any) {
  // Check for Sanity data first
  if (node.dataSource === 'sanity') {
    switch (node._type) {
      case 'page':
        if (node.pageType === 'homepage') return Home;
        if (node.pageType === 'work') return WorkOverview;
        return Page;
      case 'work':
        return WorkDetail;
      default:
        return Single;
    }
  }

  // Fall back to WordPress logic
  switch (node.__typename) {
    case 'Post':
      return Single;
    case 'Page':
      if (node.isFrontPage) return Home;
      if (node.template?.templateName === 'Work') return WorkOverview;
      return Page;
    case 'Project':
      return WorkDetail;
    case 'Category':
    case 'Tag':
      return Archive;
    default:
      return Single;
  }
}
