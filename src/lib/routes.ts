import {
  getHomeFields,
  getSlideFields,
  getAllProjects,
  getNodeByUri,
} from '../lib/api';
import { loadQuery } from '../sanity/lib/load-query';
import { HOME_QUERY } from '../sanity/queries';
import type { SanityHome } from '../sanity/types';

// DEBUG: Debug functie voor Sanity data
async function debugSanityData() {
  try {
    const { data } = await loadQuery<SanityHome>({ query: HOME_QUERY });
    console.log('🔍 Sanity HOME_QUERY result:', JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error('❌ Sanity query failed:', error);
    return null;
  }
}

// templates
import Single from '../components/templates/Single.astro';
import WorkOverview from '../components/templates/WorkOverview.astro';
import WorkDetail from '../components/templates/WorkDetail.astro';
import Archive from '../components/templates/Archive.astro';
import Page from '../components/templates/Page.astro';
import Home from '../components/templates/Home.astro';

export async function getNodeData(slug: string) {
  // Alleen Sanity voor homepage
  if (slug === '/' || slug === '') {
    try {
      // DEBUG: Test de query direct
      const debugData = await debugSanityData();
      
      const { data: sanityHome } = await loadQuery<SanityHome>({ query: HOME_QUERY });
      
      if (sanityHome) {
        if (import.meta.env.DEV) {
          console.log('🏠 Using Sanity data for homepage');
          console.log('🏠 Sanity data structure:', {
            _type: sanityHome._type,
            title: sanityHome.title,
            pageType: sanityHome.pageType,
            slidesCount: sanityHome.slides?.length || 0,
            introColsCount: sanityHome.introCols?.length || 0,
            featuredProjectsCount: sanityHome.featuredProjects?.length || 0
          });
        }
        return {
          ...sanityHome,
          dataSource: 'sanity',
        };
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('⚠️ Sanity homepage query failed:', error);
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
  // DEBUG: Log template selection
  if (import.meta.env.DEV) {
    console.log('🎯 Template selection:', {
      dataSource: node.dataSource,
      _type: node._type,
      pageType: node.pageType,
      title: node.title
    });
  }

  // Check for Sanity data first
  if (node.dataSource === 'sanity') {
    switch (node._type) {
      case 'page':
        if (node.pageType === 'homepage') {
          if (import.meta.env.DEV) console.log('🏠 Selected Home template');
          return Home;
        }
        if (node.pageType === 'work') {
          if (import.meta.env.DEV) console.log('📁 Selected WorkOverview template');
          return WorkOverview;
        }
        if (import.meta.env.DEV) console.log('📄 Selected Page template');
        return Page;
      case 'work':
        if (import.meta.env.DEV) console.log('🎨 Selected WorkDetail template');
        return WorkDetail;
      default:
        if (import.meta.env.DEV) console.log('📄 Selected Single template (default)');
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
