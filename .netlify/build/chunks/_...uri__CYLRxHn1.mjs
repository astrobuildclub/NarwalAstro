import { a as createComponent, b as renderTemplate, d as addAttribute, e as createAstro, f as renderComponent, m as maybeRenderHead, g as renderSlot, h as renderHead, F as Fragment, u as unescapeHTML, i as defineStyleVars } from './astro/server_N6iVd50k.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { $ as $$Image } from './_astro_assets_BktKzn2s.mjs';
import '@astrojs/internal-helpers/path';

const $$Astro$m = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$l = createAstro();
const $$SiteMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SiteMeta;
  const { title, description, url, image, author } = Astro2.props;
  let subtitle = "Accessible Astro Starter";
  return renderTemplate`<!-- general meta --><meta name="title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><!-- open graph --><meta property="og:title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(Astro2.site ? `${Astro2.site}${image}` : image, "content")}><!-- twitter card --><!-- page title --><title>${title} - ${subtitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/SiteMeta.astro", void 0);

const $$Astro$k = createAstro();
const $$SiteNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SiteNavigation;
  const { menu, generalSettings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-wrap items-center justify-between p-6 bg-gray-950" data-astro-cid-2ioqeek6> <div class="flex items-center flex-shrink-0 mr-6 text-white" data-astro-cid-2ioqeek6> <a href="/" data-astro-cid-2ioqeek6> <svg xmlns="http://www.w3.org/2000/svg" class="logo" color="currentcolor" width="auto" fill="none" preserveAspectRatio="xMidYMin slice" viewBox="0 0 151 40" data-astro-cid-2ioqeek6><g fill="currentcolor" clip-path="url(#a)" data-astro-cid-2ioqeek6><path d="M25.358 23.849v15.32H17.13V25.812c0-4.226-1.283-5.434-4.075-5.434-2.792 0-4.68 1.963-4.68 5.887V39.17H.15V13.585h8.227v3.019c2.037-2.34 4.83-3.623 7.773-3.623 5.283.076 9.208 2.717 9.208 10.868ZM54.34 13.585v25.66h-7.698v-2.792h-.076c-1.66 2.113-4.075 3.245-7.094 3.245-7.094 0-12.076-5.358-12.076-13.283 0-7.849 5.057-13.358 11.774-13.358 2.792 0 5.208 1.132 7.094 3.245h.076v-2.717h8Zm-7.85 12.83c0-3.547-2.339-6.113-5.433-6.113-3.17 0-5.51 2.49-5.51 6.113s2.265 6.113 5.434 6.113c3.095-.075 5.51-2.49 5.51-6.113Zm27.246-13.358v8.83c-.754-.076-1.434-.076-1.886-.076-3.85 0-5.887 2.49-5.887 5.812V39.17h-8.227V13.585h8.227v3.472h.075c1.963-2.642 4.604-4 7.472-4h.226Zm40 .528-8.679 25.66h-6.792l-4-14.34h-.076l-3.849 14.34h-6.868l-8.679-25.66h8.15l4.227 13.736h.076l3.773-13.736h6.415l3.85 13.811h.075l4.226-13.811h8.151Zm25.433 0v25.66h-7.773v-2.792h-.076c-1.66 2.113-4.075 3.245-7.094 3.245-7.094 0-12.076-5.358-12.076-13.283 0-7.849 5.057-13.358 11.774-13.358 2.792 0 5.208 1.132 7.094 3.245h.076v-2.717h8.075Zm-7.924 12.83c0-3.547-2.34-6.113-5.434-6.113-3.17 0-5.51 2.49-5.51 6.113s2.264 6.113 5.434 6.113c3.095-.075 5.51-2.49 5.51-6.113ZM142.793.604h8.151V39.17h-8.151V.604Z" data-astro-cid-2ioqeek6></path></g><defs data-astro-cid-2ioqeek6><clipPath id="a" data-astro-cid-2ioqeek6><path fill="currentcolor" d="M0 0h150.943v40H0z" data-astro-cid-2ioqeek6></path></clipPath></defs></svg> </a> </div> <div class="block w-full lg:flex lg:w-auto lg:items-center" data-astro-cid-2ioqeek6> <ul class="text-sm lg:flex-grow" data-astro-cid-2ioqeek6> ${menu.menuItems.nodes.map((menuItem) => {
    return renderTemplate`<li class="block mt-4 mr-4 text-teal-200 hover:text-white lg:mt-0 lg:inline-block" data-astro-cid-2ioqeek6> <a${addAttribute(menuItem.uri || "/", "href")} data-astro-cid-2ioqeek6>${menuItem.label}</a> </li>`;
  })} </ul> </div> </nav> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/SiteNavigation.astro", void 0);

const $$Astro$j = createAstro();
const $$Widget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Widget;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="widget col"> ${title && renderTemplate`<h5>${title}</h5>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/Widget.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="newsletter"> <form id="newsletter-form" name="newsletter-form" method="get" class="form-fields" aria-label="Newsletter Form"> <label for="name" class="field-label">Name</label> <input class="field-input field_name" maxlength="256" name="name" placeholder="" type="text" id="name"> <label for="email" class="field-label">Email Address</label> <input class="field-input field_email" maxlength="256" name="email" placeholder="" type="email" id="email" required=""> <input type="submit" data-wait="Please wait..." class="field-submit" value="Submit"> </form> <div class="form-success" tabindex="-1" role="region" aria-label="Newsletter Form success"> <p>Thank you! Your submission has been received!</p> </div> <div class="form-error" tabindex="-1" role="region" aria-label="Newsletter Form failure"> <p>Oops! Something went wrong while submitting the form.</p> </div> </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/Newsletter.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> <!-- <CallToAction /> --> <section class="min-h-screen py-8"> <div class="container"> <p>We’re always up to meet new people. Feel free to reach out to discuss your ambitions.</p> <div class="content grid grid-cols-1 md:grid-cols-4"> ${renderComponent($$result, "Widget", $$Widget, { "title": "Join our Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ` })} ${renderComponent($$result, "Widget", $$Widget, { "title": "Address" }, { "default": ($$result2) => renderTemplate` <address> <ul role="list"> <li>Narwal Creative</li> <li>Westerkade 4 — 5</li> <li>3511 HA Utrecht</li> <li>The Netherlands</li> </ul> </address> ` })} ${renderComponent($$result, "Widget", $$Widget, { "title": "Socialize" }, { "default": ($$result2) => renderTemplate` <ul role="list"> <li><a href="https://www.instagram.com/narwalcreative/" target="_blank">Instagram</a></li> <li><a href="https://www.behance.net/jelmerscheffer" target="_blank">Behance</a></li> <li><a href="https://www.linkedin.com/company/narwal-creative" target="_blank">Linkedin</a></li> </ul> ` })} ${renderComponent($$result, "Widget", $$Widget, { "title": "Get in touch" }, { "default": ($$result2) => renderTemplate` <ul role="list"> <li><a href="tel:+31302270459">+31 (0)30 227 04 59</a></li> <li><a href="mailto:info@narwalcreative.com?subject=Hello!">info@narwalcreative.com</a></li> </ul> ` })} </div> <div class="legal"> <p>
&copy; ${currentYear} - Narwal Creative <a href="https://astro.build/">Terms & Conditions</a> </p> </div> </div> </section> </footer>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/SiteFooter.astro", void 0);

async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(`${"https://www.astrobuild.site/narwal/graphql"}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const result = await response.json();
  if (result.errors) {
    throw new Error(`GraphQL Error: ${result.errors.map((e) => e.message).join(", ")}`);
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
async function getAllProjects() {
  const result = await fetchGraphQL(getAllProjectsQuery);
  return result;
}
const getAllUrisQuery = `query GetAllUris {
  pages(first: 100) {
    nodes {
      uri
    }
  }
  posts(first: 100) {
    nodes {
      uri
    }
  }
  work(first: 100) {
    nodes {
      uri
    }
  }
  services(first: 100) {
    nodes {
      uri
    }
  }
  people(first: 100) {
    nodes {
      uri
    }
  }
  clients(first: 100) {
    nodes {
      uri
    }
  }
  careers(first: 100) {
    nodes {
      uri
    }
  }
}`;
async function getAllUris() {
  const result = await fetchGraphQL(getAllUrisQuery);
  const uris = Object.values(result).reduce((acc, currentValue) => acc.concat(currentValue.nodes), []).filter((node) => node.uri !== null).map((node) => {
    if (node.uri === "/") {
      return { params: { uri: "/" } };
    }
    let trimmedURI = node.uri.substring(1);
    trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
    return { params: { uri: trimmedURI } };
  }).filter((node) => node.params.uri !== "");
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
async function getHomeFields() {
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
async function getNavigation() {
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
            fieldGroupName
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
        }
      }
    }
  }
}`;
async function getPageByUri(uri) {
  const result = await fetchGraphQL(getPageByUriQuery, { uri });
  return result;
}
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
async function getPostByUri(uri) {
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
async function getProjectByUri(uri) {
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
async function getSlideFields() {
  const result = await fetchGraphQL(getSlideFieldsQuery);
  return result;
}
const getNodeByUriQuery = `query GetNodeTypename($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
  }
}`;
async function getNodeByUri(uri) {
  const typenameResult = await fetchGraphQL(getNodeByUriQuery, { uri });
  if (!typenameResult.nodeByUri) {
    throw new Error(`No node found for URI: ${uri}`);
  }
  const typename = typenameResult.nodeByUri.__typename;
  switch (typename) {
    case "Page":
      return await getPageByUri(uri);
    case "Project":
      return await getProjectByUri(uri);
    case "Post":
      return await getPostByUri(uri);
    default:
      throw new Error(`Unsupported typename: ${typename}`);
  }
}

const $$Astro$i = createAstro();
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title, description, image = "/social-preview-image.png", author = "AstroBuildClub\u2122" } = Astro2.props;
  const { menus, generalSettings } = await getNavigation();
  const primaryMenu = menus.nodes[0];
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "SiteMeta", $$SiteMeta, { "title": title, "description": description?.substring(0, 100), "url": Astro2.site ? `${Astro2.site}/${title.toLowerCase().replaceAll(" ", "-")}` : `https://accessible-astro.dev/${title.toLowerCase().replaceAll(" ", "-")}`, "image": image, "author": author })}${renderHead()}</head> <body> ${renderComponent($$result, "SiteNavigation", $$SiteNavigation, { "menu": primaryMenu, "generalSettings": generalSettings })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/layouts/DefaultLayout.astro", void 0);

const $$Single = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h1>Single &mdash; overview</h1> </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/Single.astro", void 0);

const $$PageIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="page-intro" data-astro-cid-xdli4msg> <div class="grid grid-cols-2 content-baseline gap-12" data-astro-cid-xdli4msg> <div class="col self-baseline text-lg/8 font-bold" data-astro-cid-xdli4msg> ${renderSlot($$result, $$slots["column-one"])} </div> <div class="col self-baseline text-4xl/tight font-bold" data-astro-cid-xdli4msg> ${renderSlot($$result, $$slots["column-two"])} </div> </div> </section> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/PageIntro.astro", void 0);

const $$Astro$h = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Tag;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="tag rounded-full px-3 py-0.5 text-xs font-medium leading-none tracking-tighter" data-astro-cid-blwjyjpt> ${label} </li> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/Tag.astro", void 0);

const $$Astro$g = createAstro();
const $$TagGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TagGroup;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex gap-2 self-baseline"> ${tags.map((item) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "link": item.link, "label": item.title })}`)} </ul>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/TagGroup.astro", void 0);

function replaceUrls(content, replacementUrl) {
  return content.replaceAll(`${"https://www.astrobuild.site/narwal/"}`, replacementUrl);
}
function slugify(input) {
  if (!input)
    return "";
  var slug = input.toLowerCase().trim();
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}
function getAspectRatioFromEmbedString(embedString) {
  const widthMatch = embedString.match(/width="(\d+)"/);
  const heightMatch = embedString.match(/height="(\d+)"/);
  if (!widthMatch || !heightMatch) {
    throw new Error("Width and/or height attributes not found in the provided embed string");
  }
  const width = parseInt(widthMatch[1]);
  const height = parseInt(heightMatch[1]);
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const gcdValue = gcd(width, height);
  const simplifiedWidth = width / gcdValue;
  const simplifiedHeight = height / gcdValue;
  return `${simplifiedWidth} / ${simplifiedHeight}`;
}

const $$Astro$f = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { clientname, title, imgsrc, imgalt = "", vidsrc, link, size, services, fitCards } = Astro2.props;
  let cardclasses = "";
  if (fitCards !== true) {
    if (size) {
      switch (size) {
        case "small":
          cardclasses = "lg:col-span-4";
          break;
        case "large":
          cardclasses = "lg:col-span-8";
          break;
        case "full":
          cardclasses = "lg:col-span-12";
          break;
        default:
          cardclasses = "lg:col-span-6";
      }
    }
  } else {
    cardclasses = "lg:col-span-2";
  }
  const serviceTitles = services?.map((service) => slugify(service.title)).join(" ") || "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`project-card ${cardclasses}`, "class")}${addAttribute(serviceTitles, "data-services")}> <div class="project-media overflow-hidden rounded-lg"> ${vidsrc ? (
    // if vidsrc is set, show video with poster image
    renderTemplate`<div class="project-video w-full"> <video preload="metadata" tabindex="-1" disablepictureinpicture playsinline loop${addAttribute(title, "title")}${addAttribute(vidsrc, "src")}${addAttribute(imgsrc, "poster")}${addAttribute(true, "autoplay")} muted></video> </div>`
  ) : imgsrc && // if no video, show image
  renderTemplate`<div class="project-image"> ${renderComponent($$result, "Image", $$Image, { "src": imgsrc, "alt": imgalt, "inferSize": true, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "class": "min-w-full" })} </div>`} </div> <div class="project-content"> <div class="project-meta flex justify-between pb-3 pt-6 align-baseline"> ${clientname && renderTemplate`<h3 class="project-client self-baseline text-xs font-bold text-neutral-400">${clientname}</h3>`} ${services && renderTemplate`${renderComponent($$result, "TagGroup", $$TagGroup, { "tags": services })}`} </div> ${title && renderTemplate`<h2 class="project-title text-4xl font-bold"> <a${addAttribute(link, "href")} class="project-link"> ${title} </a> </h2>`} </div>  </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/ProjectCard.astro", void 0);

const $$Astro$e = createAstro();
const $$ProjectList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ProjectList;
  const { projects, layout, fitCards } = Astro2.props;
  const projectCards = projects.map((project) => ({
    title: project.projectHero?.details?.title || "",
    clientname: project.projectMeta?.projectClient?.nodes[0].title || "",
    size: project.projectMeta?.thumbnailGroup?.size?.toString() || "",
    imgsrc: project.projectMeta?.thumbnailGroup?.thumbnail?.node?.sourceUrl || "",
    imgalt: project.projectMeta?.thumbnailGroup?.thumbnail?.node?.altText || "",
    vidsrc: project.projectMeta?.thumbnailGroup?.vimeo || "",
    services: project.projectMeta?.services?.nodes || [],
    link: `/project/${project.slug}/`
  }));
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["my-32", [
    {
      "layout-grid": layout === "grid",
      "layout-list": layout !== "grid"
    }
  ]], "class:list")}> <div class="project-list start grid gap-12"> ${projectCards && projectCards.map((item) => {
    return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { ...item, "fitCards": fitCards })}`;
  })} </div> </section> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/ProjectList.astro", void 0);

const $$Astro$d = createAstro();
const $$ProjectFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProjectFilter;
  const { services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${services && services.map((service) => renderTemplate`<li> <button class="tag-button"${addAttribute(slugify(service), "data-service")}>${service}</button> </li>`)} </ul> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/ProjectFilter.astro", void 0);

const $$Astro$c = createAstro();
const $$WorkOverview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$WorkOverview;
  const { data } = Astro2.props;
  const pageTitle = data.title;
  const pageIntroduction = data.content;
  const projectData = data.work.nodes;
  const allServices = projectData.flatMap(
    (project) => project.projectMeta?.services?.nodes?.map((service) => service.title) || []
  ).filter(Boolean);
  const uniqueServices = [...new Set(allServices)];
  return renderTemplate`${pageTitle && renderTemplate`${maybeRenderHead()}<header><h1>${pageTitle}</h1></header>`}${renderComponent($$result, "PageIntro", $$PageIntro, {}, { "column-one": ($$result2) => renderTemplate`${pageIntroduction && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "column-one" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(pageIntroduction)}` })}`}`, "column-two": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectFilter", $$ProjectFilter, { "services": uniqueServices, "slot": "column-two" })}` })}${renderComponent($$result, "ProjectList", $$ProjectList, { "projects": projectData, "layout": "list", "fitCards": true })}`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/WorkOverview.astro", void 0);

const $$Astro$b = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  const isCover = data.coverMedia;
  const heroTitle = data.title;
  const heroDescription = data.intro;
  const heroBackgroundColor = data.color;
  const $$definedVars = defineStyleVars([{ heroBackgroundColor }]);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["hero", { is_cover: isCover }], "class:list")} data-astro-cid-bbe6dxrz${addAttribute($$definedVars, "style")}> <div class="full grid" data-astro-cid-bbe6dxrz${addAttribute($$definedVars, "style")}> ${heroTitle && renderTemplate`<h1 class="hero-title text-xl4" data-astro-cid-bbe6dxrz${addAttribute($$definedVars, "style")}>${heroTitle}</h1>`} ${heroDescription && renderTemplate`<p class="hero-description" data-astro-cid-bbe6dxrz${addAttribute($$definedVars, "style")}>${heroDescription}</p>`} </div> </section> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/Hero.astro", void 0);

const $$Astro$a = createAstro();
const $$TextBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TextBlock;
  const { title, content, size } = Astro2.props;
  let classes;
  if (size && size.at(0) == "full") {
    classes = "w-full py-8 px-8 bg-black text-white";
  } else {
    classes = "w-8/12 py-8 px-8";
  }
  return renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2>${unescapeHTML(title)}</h2>`}<div${addAttribute(classes, "class")}>${unescapeHTML(content)}</div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/TextBlock.astro", void 0);

const $$Astro$9 = createAstro();
const $$ImageBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImageBlock;
  const { sourceUrl, altText, titleText, size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["image-block", size], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "src": sourceUrl, "width": "10", ";": true, "height": "10", ";": true, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "format": "webp", "alt": altText || "", "title": titleText || "" })} </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/ImageBlock.astro", void 0);

const $$Astro$8 = createAstro();
const $$VideoBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$VideoBlock;
  const { url, type, size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["custom-video", size, type], "class:list")}> <video preload="metadata" tabindex="-1" disablepictureinpicture playsinline loop title=""${addAttribute(url, "src")}${addAttribute(true, "autoplay")} muted></video> </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/VideoBlock.astro", void 0);

const $$ColorBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>ColorBlock</div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/ColorBlock.astro", void 0);

const $$TestimonialBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>TestimonialBlock</div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/TestimonialBlock.astro", void 0);

const $$Astro$7 = createAstro();
const $$MultiCols = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MultiCols;
  const { cols } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-multicols full" data-astro-cid-p6564s6r> ${cols && cols.map((col) => {
    switch (col.contentType) {
      case "image":
        if (!col.showText) {
          return renderTemplate`<div class="col" data-astro-cid-p6564s6r>${renderComponent($$result, "ImageBlock", $$ImageBlock, { "sourceUrl": col.image?.node?.sourceUrl || "", "altText": col.image?.node?.altText || "", "data-astro-cid-p6564s6r": true })}</div>`;
        } else {
          return renderTemplate`<div class="col" data-astro-cid-p6564s6r> ${renderComponent($$result, "ImageBlock", $$ImageBlock, { "sourceUrl": col.image?.node?.sourceUrl || "", "altText": col.image?.node?.altText || "", "data-astro-cid-p6564s6r": true })} ${renderComponent($$result, "TextBlock", $$TextBlock, { "title": col.title || "", "content": col.text || "", "data-astro-cid-p6564s6r": true })} </div>`;
        }
      case "video":
        if (!col.showText) {
          return renderTemplate`<div class="col" data-astro-cid-p6564s6r>${renderComponent($$result, "VideoBlock", $$VideoBlock, { "data-astro-cid-p6564s6r": true })}</div>`;
        } else {
          return renderTemplate`<div class="col" data-astro-cid-p6564s6r> ${renderComponent($$result, "VideoBlock", $$VideoBlock, { "data-astro-cid-p6564s6r": true })} ${renderComponent($$result, "TextBlock", $$TextBlock, { "title": col.title || "", "content": col.text || "", "data-astro-cid-p6564s6r": true })} </div>`;
        }
      case "text":
      default:
        return renderTemplate`${renderComponent($$result, "TextBlock", $$TextBlock, { "title": col.title || "", "content": col.text || "", "data-astro-cid-p6564s6r": true })}`;
    }
  })} </div> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/MultiCols.astro", void 0);

const $$Astro$6 = createAstro();
const $$EmbedBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$EmbedBlock;
  const { code, size } = Astro2.props;
  const aspectRatio = getAspectRatioFromEmbedString(code);
  const $$definedVars = defineStyleVars([{ aspectRatio }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["embed-code", size], "class:list")}${addAttribute($$definedVars, "style")}>${unescapeHTML(code)}</div> `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/blocks/EmbedBlock.astro", void 0);

const $$Astro$5 = createAstro();
const $$BlockRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlockRenderer;
  const { prefix, blocks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="content"> ${blocks && blocks.map((block) => {
    switch (block.__typename) {
      case `${prefix}ContentTextLayout`:
        return renderTemplate`${renderComponent($$result, "TextBlock", $$TextBlock, { "content": block.text?.text || "", "size": block.text?.size })}`;
      case `${prefix}ContentImageLayout`:
        return renderTemplate`${renderComponent($$result, "ImageBlock", $$ImageBlock, { "sourceUrl": block.image?.node?.sourceUrl, "altText": block.image?.node?.altText, "titleText": block.image?.node?.title, "size": block.size })}`;
      case `${prefix}ContentVideoLayout`:
        if (block.option === "embed") {
          return renderTemplate`${renderComponent($$result, "EmbedBlock", $$EmbedBlock, { "code": block.embedCopy, "size": block.size })}`;
        } else {
          return renderTemplate`${renderComponent($$result, "VideoBlock", $$VideoBlock, { "type": block.option, "url": block.embed, "size": block.size })}`;
        }
      case `${prefix}ContentColorModeLayout`:
        console.log(block);
        return renderTemplate`${renderComponent($$result, "ColorBlock", $$ColorBlock, {})}`;
      case `${prefix}ContentTestimonialLayout`:
        return renderTemplate`${renderComponent($$result, "TestimonialBlock", $$TestimonialBlock, {})}`;
      case `${prefix}ContentMultiColsLayout`:
        return renderTemplate`${renderComponent($$result, "MultiCols", $$MultiCols, { "cols": block.col })}`;
    }
  })} </div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/BlockRenderer.astro", void 0);

const $$Astro$4 = createAstro();
const $$WorkDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WorkDetail;
  const { data } = Astro2.props;
  const projectHero = data.projectHero?.details;
  const projectContent = data.projectContent?.content;
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "data": projectHero, "data-astro-cid-yzhzusyp": true })} ${projectContent && renderTemplate`${maybeRenderHead()}<article class="project" data-astro-cid-yzhzusyp> ${renderComponent($$result, "BlockRenderer", $$BlockRenderer, { "prefix": "ProjectContent", "blocks": projectContent, "data-astro-cid-yzhzusyp": true })} </article>`} `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/WorkDetail.astro", void 0);

const $$Archive = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>
This will display Archive templates, like a category overview, or tags
</div>`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/Archive.astro", void 0);

const $$Astro$3 = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Page;
  const { data } = Astro2.props;
  const pageTitle = data.title;
  const pageIntroduction = data.content;
  const pageContent = data.pageContent?.content;
  return renderTemplate`${pageTitle && renderTemplate`${maybeRenderHead()}<header><h1>${pageTitle}</h1></header>`}${renderComponent($$result, "PageIntro", $$PageIntro, {}, { "column-one": ($$result2) => renderTemplate`${pageIntroduction && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "column-one" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(pageIntroduction)}` })}`}` })}${renderComponent($$result, "BlockRenderer", $$BlockRenderer, { "prefix": "PageContent", "blocks": pageContent })}`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/Page.astro", void 0);

const $$Astro$2 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { slides } = Astro2.props;
  const processedSlides = slides.map((slide) => {
    const linkObj = slide.slideFields.link;
    const updatedUrl = replaceUrls(linkObj.url, `${"http://localhost:4321/"}`);
    return {
      ...slide,
      slideFields: {
        ...slide.slideFields,
        link: {
          title: linkObj.title,
          url: updatedUrl,
          target: linkObj.target
        }
      }
    };
  });
  const backgroundSlides = processedSlides.map((slide) => ({
    imgsrc: slide.slideFields?.image?.node?.sourceUrl || "",
    imgalt: slide.slideFields?.image?.node?.altText || slide.slideFields?.slideTitle || "",
    vidsrc: slide.slideFields?.videoUrl || ""
  }));
  const foregroundSlides = processedSlides.map((slide) => ({
    title: slide.slideFields?.slideTitle || "",
    subtitle: slide.slideFields?.slideSub || "",
    link: [slide.slideFields?.link]
  }));
  return renderTemplate`${maybeRenderHead()}<section class="carousel-gallery" data-astro-cid-wfe7xcno> <div class="carousels" data-astro-cid-wfe7xcno> <!-- Background Carousel --> <div class="carousel carousel-background swiper" data-astro-cid-wfe7xcno> <!-- Slides --> <div role="list" class="swiper-wrapper" data-astro-cid-wfe7xcno> ${backgroundSlides && backgroundSlides.map((slide) => (
    // slide
    renderTemplate`<div role="group" class="swiper-slide" data-astro-cid-wfe7xcno> ${slide.vidsrc && // video
    renderTemplate`<div class="video-wrapper" data-astro-cid-wfe7xcno> <div class="video-overlay" data-astro-cid-wfe7xcno> <video class="video" playsinline="" loop="" muted="" autoplay="" data-astro-cid-wfe7xcno> <source${addAttribute(slide.vidsrc, "src")} data-astro-cid-wfe7xcno> </video> </div> </div>`} ${slide.imgsrc && // image 
    renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": slide.imgsrc, "alt": slide.imgalt, "inferSize": true, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "class": "poster", "data-astro-cid-wfe7xcno": true })}`} </div>`
  ))} </div> </div> <!-- Foreground Carousel --> <div class="carousel carousel-foreground swiper" data-astro-cid-wfe7xcno> <div role="list" class="swiper-wrapper" data-astro-cid-wfe7xcno> ${foregroundSlides && foregroundSlides.map((slide) => (
    // slide
    renderTemplate`<div role="group" class="swiper-slide" data-astro-cid-wfe7xcno> ${slide.link ? slide.link.map((l) => (
      // slide
      renderTemplate`<a${addAttribute(l.url, "href")}${addAttribute(l.target, "target")} data-astro-cid-wfe7xcno> <h3 data-astro-cid-wfe7xcno>${slide.subtitle}</h3> <h1 data-astro-cid-wfe7xcno>${slide.title}</h1> </a>`
    )) : renderTemplate`<h3 data-astro-cid-wfe7xcno>${slide.subtitle}</h3>
                <h1 data-astro-cid-wfe7xcno>${slide.title}</h1>`} </div>`
  ))} </div> </div> <!-- Carousel Controls --> <div class="controls swiper-controls" data-astro-cid-wfe7xcno> <div class="controls-wrapper" data-astro-cid-wfe7xcno> <a href="#" class="control-button swiper-button-prev" data-astro-cid-wfe7xcno> <div class="control-button_icon is_reversed" data-astro-cid-wfe7xcno> <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wfe7xcno><path d="M5 12h14m0 0-7-7m7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wfe7xcno></path></svg> </div> </a> <a href="#" class="control-button swiper-button-next" data-astro-cid-wfe7xcno> <div class="control-button_icon" data-astro-cid-wfe7xcno> <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wfe7xcno><path d="M5 12h14m0 0-7-7m7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wfe7xcno></path></svg> </div> </a> <div class="control-indicator swiper-indicator" data-astro-cid-wfe7xcno> <p class="swiper-counter" data-astro-cid-wfe7xcno> <span class="swiper-number-current" data-astro-cid-wfe7xcno>00</span> &mdash;
<span class="swiper-number-total" data-astro-cid-wfe7xcno>00</span> </p> </div> </div> </div> </div> </section>  `;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/Carousel.astro", void 0);

const $$Astro$1 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Home;
  const { data } = Astro2.props;
  const fields = data.homeFields;
  const slides = data.slides.nodes;
  const projects = fields.featured.nodes;
  const intro = fields.content.intro;
  const statement = fields.content.statement;
  return renderTemplate`${renderComponent($$result, "Carousel", $$Carousel, { "slides": slides })} ${renderComponent($$result, "PageIntro", $$PageIntro, {}, { "column-one": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "column-one" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(intro)}` })}`, "column-two": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "column-two" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(statement)}` })}` })} ${renderComponent($$result, "ProjectList", $$ProjectList, { "projects": projects, "layout": "grid" })}`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/components/templates/Home.astro", void 0);

async function getNodeData(slug) {
  const data = await getNodeByUri(slug);
  let node = data.nodeByUri;
  if (node.isFrontPage) {
    let homeFields = await getHomeFields();
    let slideFields = await getSlideFields();
    node = { ...node, ...homeFields.pageBy, ...slideFields };
  }
  if (node.template?.templateName === "Work") {
    let allProjects = await getAllProjects();
    node = { ...node, ...allProjects };
  }
  return node;
}
function getTemplateByRoute(node) {
  switch (node.__typename) {
    case "Post":
      return $$Single;
    case "Page":
      if (node.isFrontPage) return $$Home;
      if (node.template?.templateName === "Work") return $$WorkOverview;
      return $$Page;
    case "Project":
      return $$WorkDetail;
    case "Category":
    case "Tag":
      return $$Archive;
    default:
      return $$Single;
  }
}

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return await getAllUris();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { uri } = Astro2.params;
  const slug = uri ? `/${uri}/` : "/";
  let node = await getNodeData(slug);
  const Template = getTemplateByRoute(node);
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": node.title || "Studio Homepage", "description": "Our amazing studio from Rotterdam" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Template", Template, { "data": node })} ` })}`;
}, "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/pages/[...uri].astro", void 0);

const $$file = "/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/pages/[...uri].astro";
const $$url = "/[...uri]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
