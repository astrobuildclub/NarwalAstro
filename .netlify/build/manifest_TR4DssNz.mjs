import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_N6iVd50k.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/src/pages/[...uri].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[...uri]@_@astro":"pages/_---uri_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_TR4DssNz.mjs","/Users/ronnywieckardt/Development/astrobuildclub/astro/sites/NarwalAstro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_C94G-2HK.mjs","/src/pages/404.astro":"chunks/404_v-hKLBWn.mjs","/src/pages/[...uri].astro":"chunks/_...uri__SInPdz84.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ClKPFmti.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_uri_.DKClmf0D.css","/accessible-components.webp","/astronaut-hero-img.webp","/favicon.svg","/social-preview-image.png","/wcag-compliant.webp","/_astro/client.5I5BMcNS.js","/_astro/hoisted.BUqBwj0Y.css","/_astro/hoisted.ClKPFmti.js","/fonts/Inter-VariableFont_slnt,wght.ttf","/fonts/InterTight-Italic-VariableFont_wght.ttf","/fonts/InterTight-VariableFont_wght.ttf","/fonts/OpenSans-Bold.woff","/fonts/OpenSans-Bold.woff2","/fonts/OpenSans-ExtraBold.woff","/fonts/OpenSans-ExtraBold.woff2","/fonts/OpenSans-Italic.woff","/fonts/OpenSans-Italic.woff2","/fonts/OpenSans-Regular.woff","/fonts/OpenSans-Regular.woff2","/fonts/static/Inter-Black.ttf","/fonts/static/Inter-Bold.ttf","/fonts/static/Inter-ExtraBold.ttf","/fonts/static/Inter-ExtraLight.ttf","/fonts/static/Inter-Light.ttf","/fonts/static/Inter-Medium.ttf","/fonts/static/Inter-Regular.ttf","/fonts/static/Inter-SemiBold.ttf","/fonts/static/Inter-Thin.ttf","/fonts/static 2/InterTight-Black.ttf","/fonts/static 2/InterTight-BlackItalic.ttf","/fonts/static 2/InterTight-Bold.ttf","/fonts/static 2/InterTight-BoldItalic.ttf","/fonts/static 2/InterTight-ExtraBold.ttf","/fonts/static 2/InterTight-ExtraBoldItalic.ttf","/fonts/static 2/InterTight-ExtraLight.ttf","/fonts/static 2/InterTight-ExtraLightItalic.ttf","/fonts/static 2/InterTight-Italic.ttf","/fonts/static 2/InterTight-Light.ttf","/fonts/static 2/InterTight-LightItalic.ttf","/fonts/static 2/InterTight-Medium.ttf","/fonts/static 2/InterTight-MediumItalic.ttf","/fonts/static 2/InterTight-Regular.ttf","/fonts/static 2/InterTight-SemiBold.ttf","/fonts/static 2/InterTight-SemiBoldItalic.ttf","/fonts/static 2/InterTight-Thin.ttf","/fonts/static 2/InterTight-ThinItalic.ttf"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
