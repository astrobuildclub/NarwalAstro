// src/lib/sanity.ts
import { loadQuery } from '../sanity/lib/load-query';
import { 
  ALL_SLUGS_QUERY, 
  HOME_QUERY, 
  PROJECT_BY_SLUG_QUERY, 
  PAGE_BY_SLUG_QUERY,
  ALL_PROJECTS_QUERY,
  SITE_SETTINGS_QUERY 
} from '../sanity/queries';
import type { SanityHome, SanityProject, SanityPage, SanitySiteSettings } from '../sanity/types';

/**
 * Haal alle URIs op voor static path generatie
 */
export async function getAllUris() {
  try {
    const { data } = await loadQuery({ query: ALL_SLUGS_QUERY });

    if (!data) {
      throw new Error('No data returned from Sanity');
    }

    const uris = [];

    // Add homepage
    if (data.homepage) {
      uris.push({ params: { uri: undefined } }); // Homepage heeft undefined URI
    }

    // Add pages
    if (data.pages) {
      uris.push(...data.pages.map(slug => ({ params: { uri: slug } })));
    }

    // Add projects with project/ prefix
    if (data.projects) {
      uris.push(...data.projects.map(slug => ({ params: { uri: `project/${slug}` } })));
    }

    if (import.meta.env.DEV) {
      console.log('🔗 Generated Sanity static paths:', {
        total: uris.length,
        homepage: !!data.homepage,
        pages: data.pages?.length || 0,
        projects: data.projects?.length || 0,
        uris: uris.map(u => u.params.uri)
      });
    }

    return uris;
  } catch (error) {
    console.error('❌ Failed to load Sanity slugs:', error);
    throw error;
  }
}

/**
 * Haal homepage data op
 */
export async function getHomeData(): Promise<SanityHome> {
  try {
    const { data } = await loadQuery<SanityHome>({ query: HOME_QUERY });
    
    if (!data) {
      throw new Error('No homepage data found');
    }

    if (import.meta.env.DEV) {
      console.log('🏠 Homepage data loaded:', {
        title: data.title,
        pageType: data.pageType,
        slidesCount: data.slides?.length || 0,
        introColsCount: data.introCols?.length || 0,
        featuredProjectsCount: data.featuredProjects?.length || 0
      });
    }

    return data;
  } catch (error) {
    console.error('❌ Failed to load homepage data:', error);
    throw error;
  }
}

/**
 * Haal page data op by slug - met pagina type ondersteuning
 */
export async function getPageData(slug: string): Promise<SanityPage> {
  try {
    const { data } = await loadQuery<SanityPage>({ 
      query: PAGE_BY_SLUG_QUERY, 
      params: { slug } 
    });
    
    if (!data) {
      throw new Error(`Page with slug "${slug}" not found`);
    }

    if (import.meta.env.DEV) {
      console.log('📄 Page data loaded:', {
        title: data.title,
        slug: data.slug,
        pageType: data.pageType,
        contentBlocks: data.content?.length || 0
      });
    }

    // Speciale logica per pagina type
    switch (data.pageType) {
      case 'work':
        // WorkOverview pagina - voeg projecten toe
        const { data: projects } = await loadQuery({ query: ALL_PROJECTS_QUERY });
        return {
          ...data,
          work: { nodes: projects || [] }
        };
      
      case 'about':
      case 'services':
      case 'contact':
      case 'default':
        // Standaard pagina's - geen extra data nodig
        return data;
      
      default:
        // Onbekend pagina type - log warning maar return data
        if (import.meta.env.DEV) {
          console.warn(`⚠️ Unknown pageType "${data.pageType}" for page "${slug}"`);
        }
        return data;
    }
  } catch (error) {
    console.error(`❌ Failed to load page "${slug}":`, error);
    throw error;
  }
}

/**
 * Haal site settings op
 */
export async function getSiteSettings(): Promise<SanitySiteSettings> {
  try {
    const { data } = await loadQuery<SanitySiteSettings>({ query: SITE_SETTINGS_QUERY });
    
    if (!data) {
      throw new Error('No site settings found');
    }

    return data;
  } catch (error) {
    console.error('❌ Failed to load site settings:', error);
    throw error;
  }
}

/**
 * Haal project data op by slug
 */
export async function getProjectData(slug: string): Promise<SanityProject> {
  try {
    const { data } = await loadQuery<SanityProject>({ 
      query: PROJECT_BY_SLUG_QUERY, 
      params: { slug } 
    });
    
    if (!data) {
      throw new Error(`Project with slug "${slug}" not found`);
    }

    if (import.meta.env.DEV) {
      console.log('🎨 Project data loaded:', {
        title: data.title,
        slug: data.slug,
        hasHero: !!data.hero,
        contentBlocks: data.content?.length || 0,
        relatedProjects: data.relatedProjects?.length || 0
      });
    }

    return data;
  } catch (error) {
    console.error(`❌ Failed to load project "${slug}":`, error);
    throw error;
  }
}

/**
 * Haal alle projecten op
 */
export async function getAllProjects() {
  try {
    const { data } = await loadQuery({ query: ALL_PROJECTS_QUERY });
    return data || [];
  } catch (error) {
    console.error('❌ Failed to load projects:', error);
    throw error;
  }
}
