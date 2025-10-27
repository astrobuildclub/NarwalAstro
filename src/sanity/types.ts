// Basis Sanity types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanityReference {
  _type: 'reference';
  _ref: string;
}

// Homepage types
export interface SanitySlide {
  _type: 'slide';
  _key: string;
  title: string;
  subtitle?: string;
  image?: SanityImage;
  videoUrl?: string;
  link?: {
    linkType: 'internal' | 'external';
    url?: string;
    internalLink?: {
      _type: 'reference';
      slug: {
        current: string;
      };
    };
  };
}

export interface SanityHome {
  _type: 'page';
  _id: string;
  title: string;
  intro: string;
  statement: string;
  slides: SanitySlide[];
  featuredProjects: SanityProject[];
  seo?: SanitySEO;
}

// Project types
export interface SanityProject {
  _type: 'work';
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  subtitle?: string;
  intro?: string;
  hero?: {
    title?: string;
    subtitle?: string;
    intro?: string;
    coverMedia?: SanityImage;
    color?: string;
  };
  thumbnail?: {
    image?: SanityImage;
    size?: 'small' | 'default' | 'large';
    aspectRatio?: string;
  };
  client?: {
    _type: 'reference';
    title: string;
  };
  services?: Array<{
    _type: 'reference';
    title: string;
  }>;
  credits?: string;
  relatedProjects?: SanityProject[];
  content?: SanityBlock[];
  seo?: SanitySEO;
}

// Page types
export interface SanityPage {
  _type: 'page';
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  pageType: 'default' | 'about' | 'services' | 'contact' | 'work';
  hero?: {
    title?: string;
    col1?: string;
    col2?: string;
  };
  introCols?: Array<{
    _key: string;
    content: any[]; // Portable Text
  }>;
  content?: SanityBlock[];
  seo?: SanitySEO;
}

// Block types
export interface SanityBlock {
  _type: string;
  _key: string;
  [key: string]: any;
}

export interface SanityTextBlock extends SanityBlock {
  _type: 'textBlock';
  text: string;
  size?: 'small' | 'medium' | 'large';
}

export interface SanityImageBlock extends SanityBlock {
  _type: 'imageBlock';
  image: SanityImage;
  showCaption?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
}

export interface SanityVideoBlock extends SanityBlock {
  _type: 'videoBlock';
  videoUrl?: string;
  embedCode?: string;
}

export interface SanityGalleryBlock extends SanityBlock {
  _type: 'galleryBlock';
  images: SanityImage[];
}

export interface SanityTestimonialBlock extends SanityBlock {
  _type: 'testimonialBlock';
  quote: string;
  author?: string;
  role?: string;
}

export interface SanityTeamBlock extends SanityBlock {
  _type: 'teamBlock';
  title?: string;
  team: Array<{
    _type: 'reference';
    title: string;
    roles?: Array<{
      name: string;
      description?: string;
    }>;
    featuredImage?: SanityImage;
  }>;
}

export interface SanityServicesBlock extends SanityBlock {
  _type: 'servicesBlock';
  title?: string;
  services: Array<{
    _type: 'reference';
    title: string;
    content?: any[];
  }>;
}

export interface SanityClientsBlock extends SanityBlock {
  _type: 'clientsBlock';
  title?: string;
  clients: Array<{
    _type: 'reference';
    title: string;
    logo?: SanityImage;
  }>;
}

// Site Settings types
export interface SanitySiteSettings {
  _type: 'siteSettings';
  _id: string;
  title: string;
  description: string;
  url: string;
  logo?: SanityImage;
  navigation?: {
    menuItems: Array<{
      _key: string;
      label: string;
      link: {
        linkType: 'internal' | 'external';
        url?: string;
        internalLink?: {
          _type: 'reference';
          slug: {
            current: string;
          };
        };
      };
      order?: number;
    }>;
  };
  footer?: {
    address?: {
      company?: string;
      street?: string;
      city?: string;
      country?: string;
    };
    contact?: {
      phone?: string;
      email?: string;
    };
    social?: {
      instagram?: string;
      behance?: string;
      linkedin?: string;
    };
  };
  defaultSeo?: SanitySEO;
}

// SEO types
export interface SanitySEO {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: SanityImage;
  canonical?: string;
}
