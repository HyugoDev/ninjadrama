/* empty css                              */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_8c48c1cc.mjs';
import 'html-escaper';
import 'clsx';
import { a as $$Image, $ as $$Layout } from './404_3a7da77c.mjs';
import { g as getsearch } from './_id__d5e3d078.mjs';

const $$Astro$1 = createAstro();
const $$CardSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardSearch;
  function corregirUrl(url) {
    return url.replace("hhttps://", "https://");
  }
  const { search } = Astro2.props;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-1xl px-4 m-10 mt-14 sm:px-6"><div class="flex flex-wrap justify-center gap-x-6 gap-y-10">${search.map((anime) => renderTemplate`<article class="w-96 rounded-md shadow-lg bg-gray-950 border-gray-300 border"><div class="flex flex-col  leading-none "><a${addAttribute(`/anime/info/${anime.title}`, "href")} class="flex-none flex flex-col items-center">${renderComponent($$result, "Image", $$Image, { "src": corregirUrl(anime.image), "alt": anime.title, "width": 200, "height": 150, "class": " object-cover object-center  rounded-md shadow-2xl transform -translate-y-4 border-2 border-gray-300" })}<span class="text-white m-0 text-sm">${anime.type}</span></a><div class="flex-col  text-center"><p class="m-2 text-2xl font-bold">${anime.title}</p><hr class="hr-text" data-content=""></div></div></article>`)}</div></section>`}`;
}, "J:/Proyectos/ninjadrama/src/components/CardSearch.astro", void 0);

const $$Astro = createAstro();
const $$nombre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$nombre;
  const { nombre } = Astro2.params;
  const Busqueda = await getsearch(nombre);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": nombre }, { "default": ($$result2) => renderTemplate`${Busqueda.search ? renderTemplate`${renderComponent($$result2, "CardSearch", $$CardSearch, { "search": Busqueda.search })}` : renderTemplate`${maybeRenderHead()}<span>No se encontro resultados</span>`}` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/directorio/buscar/[nombre].astro", void 0);

const $$file = "J:/Proyectos/ninjadrama/src/pages/anime/directorio/buscar/[nombre].astro";
const $$url = "/anime/directorio/buscar/[nombre]";

export { $$nombre as default, $$file as file, $$url as url };
