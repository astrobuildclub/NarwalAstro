import type { 
  SanityHome, 
  SanityProject, 
  SanityPage, 
  SanitySiteSettings 
} from './types';

// Homepage query
export const HOME_QUERY = `*[_type == "page" && pageType == "homepage"][0] {
  _id,
  _type,
  title,
  intro,
  statement,
  slides[] {
    _key,
    title,
    subtitle,
    image {
      ...,
      asset->
    },
    videoUrl,
    link {
      linkType,
      url,
      internalLink-> {
        _type,
        "slug": slug.current
      }
    }
  },
  "featuredProjects": featuredProjects[]-> {
    _id,
    _type,
    title,
    "slug": slug.current,
    subtitle,
    thumbnail {
      image {
        ...,
        asset->
      },
      size,
      aspectRatio
    },
    "client": client-> {
      _id,
      title
    },
    "services": services[]-> {
      _id,
      title
    }
  },
  seo {
    title,
    description,
    keywords,
    image {
      ...,
      asset->
    }
  }
}`;

// Site settings query
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  _type,
  title,
  description,
  url,
  logo {
    ...,
    asset->
  },
  navigation {
    menuItems[] {
      _key,
      label,
      link {
        linkType,
        url,
        internalLink-> {
          _type,
          "slug": slug.current
        }
      },
      order
    }
  },
  footer {
    address {
      company,
      street,
      city,
      country
    },
    contact {
      phone,
      email
    },
    social {
      instagram,
      behance,
      linkedin
    }
  },
  defaultSeo {
    title,
    description,
    keywords,
    image {
      ...,
      asset->
    }
  }
}`;

// All projects query
export const ALL_PROJECTS_QUERY = `*[_type == "work"] | order(_createdAt desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  subtitle,
  thumbnail {
    image {
      ...,
      asset->
    },
    size,
    aspectRatio
  },
  "client": client-> {
    _id,
    title
  },
  "services": services[]-> {
    _id,
    title
  }
}`;

// Project by slug query
export const PROJECT_BY_SLUG_QUERY = `*[_type == "work" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  "slug": slug.current,
  subtitle,
  intro,
  hero {
    title,
    subtitle,
    intro,
    coverMedia {
      ...,
      asset->
    },
    color
  },
  thumbnail {
    image {
      ...,
      asset->
    },
    size,
    aspectRatio
  },
  vimeoUrl,
  "client": client-> {
    _id,
    title
  },
  "services": services[]-> {
    _id,
    title
  },
  credits,
  "relatedProjects": relatedProjects[]-> {
    _id,
    _type,
    title,
    "slug": slug.current,
    thumbnail {
      image {
        ...,
        asset->
      },
      size
    },
    "client": client-> {
      _id,
      title
    }
  },
  content[] {
    _type,
    _key,
    ...,
    image {
      ...,
      asset->
    },
    images[] {
      ...,
      asset->
    },
    "team": team[]-> {
      _id,
      title,
      roles,
      featuredImage {
        ...,
        asset->
      }
    },
    "services": services[]-> {
      _id,
      title,
      content
    },
    "clients": clients[]-> {
      _id,
      title,
      logo {
        ...,
        asset->
      }
    }
  },
  seo {
    title,
    description,
    keywords,
    image {
      ...,
      asset->
    }
  }
}`;

// Page by slug query
export const PAGE_BY_SLUG_QUERY = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  "slug": slug.current,
  pageType,
  hero {
    title,
    col1,
    col2
  },
  introCols[] {
    _key,
    content
  },
  content[] {
    _type,
    _key,
    ...,
    image {
      ...,
      asset->
    },
    images[] {
      ...,
      asset->
    },
    "team": team[]-> {
      _id,
      title,
      roles,
      featuredImage {
        ...,
        asset->
      }
    },
    "services": services[]-> {
      _id,
      title,
      content
    },
    "clients": clients[]-> {
      _id,
      title,
      logo {
        ...,
        asset->
      }
    }
  },
  seo {
    title,
    description,
    keywords,
    image {
      ...,
      asset->
    }
  }
}`;

// All slugs query for static paths
export const ALL_SLUGS_QUERY = `{
  "pages": *[_type == "page" && defined(slug.current)].slug.current,
  "projects": *[_type == "work" && defined(slug.current)].slug.current
}`;
