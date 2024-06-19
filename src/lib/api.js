// @ts-nocheck
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function loadQuery(queryFile) {
  try {
    const filePath = join(__dirname, '../queries', queryFile);
    return await readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading query file ${queryFile}:`, error);
    throw error;
  }
}

async function fetchGraphQL(query, variables = {}) {
  try {
    const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error('Failed to fetch data from GraphQL API');
    }

    return result.data;
  } catch (error) {
    console.error('Fetch GraphQL error:', error);
    throw error;
  }
}

export async function getNodeByUri(uri) {
  const typenameQuery = `
    query GetNodeTypename($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
      }
    }
  `;

  const typenameResult = await fetchGraphQL(typenameQuery, { uri });

  if (!typenameResult.nodeByUri) {
    throw new Error(`No node found for URI: ${uri}`);
  }

  const typename = typenameResult.nodeByUri.__typename;

  let queryFile;

  switch (typename) {
    case 'Page':
      queryFile = 'getPageByUri.gql';
      break;
    case 'Project':
      queryFile = 'getProjectByUri.gql';
      break;
    case 'Post':
      queryFile = 'getPostByUri.gql';
      break;
    default:
      throw new Error(`Unsupported typename: ${typename}`);
  }

  const query = await loadQuery(queryFile);
  return await fetchGraphQL(query, { uri });
}

export async function getAllUris() {
  const query = await loadQuery('getAllUris.gql');
  const data = await fetchGraphQL(query);
  const uris = Object.values(data)
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

export async function getNavigation() {
  const query = await loadQuery('getNavigation.gql');
  return await fetchGraphQL(query);
}


export async function getHomeFields() {
  const query = await loadQuery('getHomeFields.gql');
  return await fetchGraphQL(query);
}


export async function getSlideFields() {
  const query = await loadQuery('getSlideFields.gql');
  return await fetchGraphQL(query);
}

export async function getAllProjects() {
  const query = await loadQuery('getAllProjects.gql');
  return await fetchGraphQL(query);
}






// export async function getProjectDataByUri(uri){
//   const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//         query getProjectDataByUri($uri: String!) {
//           nodeByUri(uri: $uri) {
//             ... on Project {
//               id
//               excerpt
//               featuredImage {
//                 node {
//                   altText
//                   sourceUrl
//                 }
//               }
//               projectFields {
//                 details {
//                   color
//                   coverMedia
//                   intro
//                   media {
//                     coverImage {
//                       node {
//                         altText
//                         sourceUrl
//                       }
//                     }
//                   }
//                   subtitle
//                   title
//                 }
//               }
//               title
//             }
//           }
//         }`,
//       variables: {
//         uri: uri
//       },
//     }),
//   });
//   const { data } = await response.json();
// return data;
// }

// export async function getContentFieldsByUri(uri){
//   const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//         query getContentFieldsByUri($uri: String!) {
//           nodeByUri(uri: $uri) {
//             id
//             uri
//             ... on Project {
//               __typename
//               id
//               contentFields {
//                 content {
//                   __typename
//                   ... on ContentFieldsContentTextLayout {
//                     text {
//                       text
//                       width
//                     }
//                   }
//                   ... on ContentFieldsContentImageLayout {
//                     showCaption
//                     size
//                     image {
//                       node {
//                         altText
//                         sourceUrl
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }`,
//       variables: {
//         uri: uri
//       },
//     }),
//   });
//   const { data } = await response.json();
// return data;
// }

