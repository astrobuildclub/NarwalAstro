// Nieuwe Sanity imports
import { 
  getHomeData, 
  getPageData, 
  getProjectData 
} from './sanity';
import type { SanityHome, SanityProject, SanityPage } from '../sanity/types';


// templates
import Single from '../components/templates/Single.astro';
import WorkOverview from '../components/templates/WorkOverview.astro';
import WorkDetail from '../components/templates/WorkDetail.astro';
import Archive from '../components/templates/Archive.astro';
import Page from '../components/templates/Page.astro';
import Home from '../components/templates/Home.astro';

export async function getNodeData(slug: string) {
  // Homepage - alleen Sanity
  if (slug === '/' || slug === '') {
    try {
      const sanityHome = await getHomeData();
      return {
        ...sanityHome,
        dataSource: 'sanity',
      };
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('❌ Sanity homepage query failed:', error);
      }
      throw error;
    }
  }

  // Project detail pages - alleen Sanity
  if (slug.startsWith('/project/')) {
    const projectSlug = slug.replace('/project/', '').replace(/\/$/, ''); // Verwijder trailing slash
    try {
      const sanityProject = await getProjectData(projectSlug);
      return {
        ...sanityProject,
        dataSource: 'sanity',
      };
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('❌ Sanity project query failed:', error);
      }
      throw error;
    }
  }

  // Andere pages - alleen Sanity
  try {
    const cleanSlug = slug.replace(/^\//, '').replace(/\/$/, '');
    const sanityPage = await getPageData(cleanSlug);
    return {
      ...sanityPage,
      dataSource: 'sanity',
    };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('❌ Sanity page query failed:', error);
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
      title: node.title,
      hasSlides: !!(node.slides && node.slides.length > 0),
      slidesCount: node.slides?.length || 0,
    });
  }

  // Check for Sanity data first
  if (node.dataSource === 'sanity') {
    switch (node._type) {
      case 'page':
        // Check if this is homepage by pageType OR by having slides (fallback)
        if (
          node.pageType === 'homepage' ||
          (node.slides && node.slides.length > 0) ||
          (node.title === 'Homepage' && node._type === 'page')
        ) {
          if (import.meta.env.DEV)
            console.log('🏠 Selected Home template (homepage detected)', {
              pageType: node.pageType,
              hasSlides: !!(node.slides && node.slides.length > 0),
              title: node.title,
              _type: node._type
            });
          return Home;
        }
        if (node.pageType === 'work') {
          if (import.meta.env.DEV)
            console.log('📁 Selected WorkOverview template');
          return WorkOverview;
        }
        if (import.meta.env.DEV) console.log('📄 Selected Page template');
        return Page;
      case 'work':
        if (import.meta.env.DEV) console.log('🎨 Selected WorkDetail template');
        return WorkDetail;
      default:
        if (import.meta.env.DEV)
          console.log('📄 Selected Single template (default)');
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
