import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_8c48c1cc.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

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
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"anime/directorio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/anime/directorio","type":"page","pattern":"^\\/anime\\/directorio\\/?$","segments":[[{"content":"anime","dynamic":false,"spread":false}],[{"content":"directorio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/anime/directorio/index.astro","pathname":"/anime/directorio","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.713f6ea0.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["J:/Proyectos/ninjadrama/src/pages/404.astro",{"propagation":"none","containsHead":true}],["J:/Proyectos/ninjadrama/src/pages/anime/directorio/buscar/[nombre].astro",{"propagation":"none","containsHead":true}],["J:/Proyectos/ninjadrama/src/pages/anime/directorio/index.astro",{"propagation":"none","containsHead":true}],["J:/Proyectos/ninjadrama/src/pages/anime/info/[id].astro",{"propagation":"none","containsHead":true}],["J:/Proyectos/ninjadrama/src/pages/anime/ver/[id].astro",{"propagation":"none","containsHead":true}],["J:/Proyectos/ninjadrama/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_ede4c984.mjs","J:/Proyectos/ninjadrama/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_e96f1d58.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_04d69739.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_4ce930a7.mjs","\u0000@astro-page:src/pages/anime/directorio/index@_@astro":"chunks/index_6c714016.mjs","\u0000@astro-page:src/pages/anime/directorio/buscar/[nombre]@_@astro":"chunks/_nombre__9d15b4fc.mjs","\u0000@astro-page:src/pages/anime/info/[id]@_@astro":"chunks/_id__d5fbf940.mjs","\u0000@astro-page:src/pages/anime/ver/[id]@_@astro":"chunks/_id__52036ebd.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_dfb8f300.mjs","astro:scripts/page.js":"_astro/page.713f6ea0.js","J:/Proyectos/ninjadrama/src/components/Search.jsx":"_astro/Search.2e0ee827.js","@components/Info.jsx":"_astro/Info.971a09d9.js","@components/Ver.jsx":"_astro/Ver.4988773a.js","@astrojs/react/client.js":"_astro/client.d1770c4c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_nombre_.b0429c2f.css","/404-anime-girl.gif","/favicon.png","/Logo2.png","/logos/Logo1.jfif","/logos/Logo3.jfif","/icon/buscar.svg","/icon/casa.svg","/icon/directorio.svg","/icon/usuario.svg","/_astro/client.d1770c4c.js","/_astro/index.364e49f0.js","/_astro/Info.971a09d9.js","/_astro/jsx-runtime.e2a65d70.js","/_astro/page.713f6ea0.js","/_astro/Search.2e0ee827.js","/_astro/use-is-mounted.bfa166fa.js","/_astro/Ver.4988773a.js","/_astro/page.713f6ea0.js","/index.html","/anime/directorio/index.html","/404.html"]});

export { manifest };