//@ts-nocheck

async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });
  
  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL Error: ${result.errors.map(e => e.message).join(', ')}`);
  }

  return result.data;
}

const getAllProjectsQuery = `query GetAllProjects {
  work {
    nodes {
      slug
      projectHero {
        details {
          title
          subtitle
        }
      }
      projectMeta {
        projectClient {
          nodes {
            ... on Client {
              title
            }
          }
        }
        services {
          nodes {
            ... on Service {
              title
            }
          }
        }
        thumbnailGroup {
          size
          aspectRatio
          vimeo
          thumbnail {
            node {
              altText
              title
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;

export async function getAllProjects() {
  const result = await fetchGraphQL(getAllProjectsQuery);
  return result;
}

const getAllUrisQuery = `query GetAllUris {
  pages(first: 100) {
    nodes {
      uri
    }
  }
  work(first: 100) {
    nodes {
      uri
    }
  }
}`;

export async function getAllUris() {
  const result = await fetchGraphQL(getAllUrisQuery);
  const uris = Object.values(result)
  .reduce((acc, currentValue) => acc.concat(currentValue.nodes), [])
  .filter(node => node.uri !== null)
  .map(node => {
    if (node.uri === "/") {
      return { params: { uri: "/" } };
    }
    let trimmedURI = node.uri.substring(1);
    trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
    return { params: { uri: trimmedURI } };
  })
  .filter(node => node.params.uri !== ''); 
  return uris;
}

const getHomeFieldsQuery = `query GetHomeFields {
  pageBy(uri: "/") {
    homeFields {
      content {
        intro
        statement
      }
      featured {
        nodes {
          ... on Project {
            slug
            projectHero {
              details {
                title
                subtitle
              }
            }
            projectMeta {
              projectClient {
                nodes {
                  ... on Client {
                    title
                  }
                }
              }
              services {
                nodes {
                  ... on Service {
                    title
                  }
                }
              }
              thumbnailGroup {
                size
                aspectRatio
                vimeo
                thumbnail {
                  node {
                    altText
                    title
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export async function getHomeFields() {
  const result = await fetchGraphQL(getHomeFieldsQuery);
  return result;
}

const getNavigationQuery = `query GetNavigation {
  menus(where: { location: MAIN }) {
    nodes {
      name
      menuItems {
        nodes {
          uri
          url
          order
          label
        }
      }
    }
  }
  generalSettings {
    title
    url
    description
  }
}`;

export async function getNavigation() {
  const result = await fetchGraphQL(getNavigationQuery);
  return result;
}

const getPageByUriQuery = `query GetPageByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on Page {
      id
      status
      title
      content
      isFrontPage
      template {
        templateName
      }
      pageContent {
        content {
          ... on PageContentContentTextLayout {
            __typename
            text {
              text
              size
            }
          }
          ... on PageContentContentImageLayout {
            __typename
            showCaption
            image {
              node {
                altText
                title
                sourceUrl
              }
            }
            size
          }
          ... on PageContentContentVideoLayout {
            __typename
            embed
            embedCopy
            option
            size
            video {
              node {
                altText
                title
                sourceUrl
              }
            }
          }
          ... on PageContentContentTestimonialLayout {
            __typename
            name
            photo {
              node {
                altText
                title
                sourceUrl
              }
            }
            roleCompany
            testimonial
          }
          ... on PageContentContentMultiColsLayout {
            __typename
            col {
              contentType
              showText
              text
              title
              verticalAlign
              video
              image {
                node {
                  altText
                  title
                  sourceUrl
                }
              }
            }
          }
          ... on PageContentContentColorModeLayout {
            __typename
            colorMode
          }
          ... on PageContentContentGalleryLayout {
            __typename
            gallery {
              nodes {
                altText
                title
                sourceUrl
              }
            }
          }
          ... on PageContentContentTextGridLayout {
           __typename
            title
            image {
              image
            }
            item {
              text {
                text
                title
              }
            }
          }
          ... on PageContentContentTeamLayout {
           __typename
            title
            team {
              nodes {
                ... on Person {
                  id
                  title
                }
              }
            }
          }
          ... on PageContentContentServicesLayout {
           __typename
            title
            services {
              nodes {
                ... on Service {
                  id
                  title
                }
              }
            }
          }
          ... on PageContentContentClientsLayout {
           __typename
            title
            clients {
              nodes {
                ... on Client {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export async function getPageByUri(uri) {
  const result = await fetchGraphQL(getPageByUriQuery, { uri });
  return result;
}

/* Hebben we dit nodig? */
const getPostByUriQuery = `query GetPostByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on Post {
      id
      title
      excerpt
      content
      featuredImage {
        node {
          altText
          title
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          uri
        }
      }
    }
  }
}`;

export async function getPostByUri(uri) {
  const result = await fetchGraphQL(getPostByUriQuery, { uri });
  return result;
}

const getProjectByUriQuery = `query GetProjectByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on Project {
      id
      status
      seo {
        title
        metaDesc
        canonical
      }
      projectHero {
        details {
          color
          coverMedia
          intro
          media {
            coverImage {
              node {
                altText
                title
                sourceUrl
              }
            }
          }
          subtitle
          title
        }
      }
      projectContent {
        content {
          ... on ProjectContentContentTextLayout {
            __typename
            text {
              text
              size
            }
          }
          ... on ProjectContentContentImageLayout {
            __typename
            showCaption
            image {
              node {
                altText
                title
                sourceUrl
              }
            }
            size
          }
          ... on ProjectContentContentVideoLayout {
            __typename
            embed
            embedCopy
            option
            size
            video {
              node {
                altText
                title
                sourceUrl
              }
            }
          }
          ... on ProjectContentContentTestimonialLayout {
            __typename
            name
            photo {
              node {
                altText
                title
                sourceUrl
              }
            }
            roleCompany
            testimonial
          }
          ... on ProjectContentContentMultiColsLayout {
            __typename
            col {
              contentType
              showText
              text
              title
              verticalAlign
              video
              image {
                node {
                  altText
                  title
                  sourceUrl
                }
              }
            }
          }
          ... on ProjectContentContentColorModeLayout {
            __typename
            colorMode
            fieldGroupName
          }
          ... on ProjectContentContentGalleryLayout {
            __typename
            gallery {
              nodes {
                altText
                title
                sourceUrl
              }
            }
          }
        }
      }
      projectMeta {
        credits
        projectClient {
          nodes {
            ... on Client {
              id
              title
            }
          }
        }
        related {
          nodes {
            ... on Project {
              id
              title
            }
          }
        }
        services {
          nodes {
            ... on Service {
              id
              title
            }
          }
        }
      }
    }
  }
}`;

export async function getProjectByUri(uri) {
  const result = await fetchGraphQL(getProjectByUriQuery, { uri });
  return result;
}

const getSlideFieldsQuery = `query GetSlideFields {
  slides {
    nodes {
      status
      slideFields {
        slideTitle
        videoUrl
        slideSub
        image {
          node {
            altText
            sourceUrl
          }
        }
        link {
          url
          title
          target
        }
      }
    }
  }
}`;

export async function getSlideFields() {
  const result = await fetchGraphQL(getSlideFieldsQuery);
  return result;
}

const getNodeByUriQuery = `query GetNodeTypename($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
  }
}`;

export async function getNodeByUri(uri) {
  const typenameResult = await fetchGraphQL(getNodeByUriQuery, { uri });

  if (!typenameResult.nodeByUri) {
    throw new Error(`No node found for URI: ${uri}`);
  }

  const typename = typenameResult.nodeByUri.__typename;

  switch (typename) {
    case 'Page':
      return await getPageByUri(uri);
    case 'Project':
      return await getProjectByUri(uri);
    case 'Post':
      return await getPostByUri(uri);
    default:
      throw new Error(`Unsupported typename: ${typename}`);
  }
}
