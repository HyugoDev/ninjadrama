/* empty css                              */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_8c48c1cc.mjs';
import 'html-escaper';
import { a as $$Image, $ as $$Layout } from './404_3a7da77c.mjs';
import { a as getLastEpisodes } from './_id__d5e3d078.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { episodes } = await getLastEpisodes();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> <h2 class="text-2xl mb-6 text-center">Nuevos Episodios</h2> <div class="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8"> ${episodes.map((anime) => renderTemplate`<a${addAttribute(`/anime/${anime.id}`, "href")} class="group shadow bg-gray-950 borde rounded-lg"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7"> ${renderComponent($$result2, "Image", $$Image, { "src": `data:image/png;base64,${anime.image}`, "alt": anime.title, "width": 184, "height": 50, "class": "w-max object-cover object-center group-hover:opacity-75" })} </div> <h3 class="ml-1 text-sm overflow-hidden truncate text-center"> ${anime.title} </h3> <p class=" text-lg font-medium text-center">${anime.episode}</p> </a>`)} </div> </section> ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/index.astro", void 0);

const $$file = "J:/Proyectos/ninjadrama/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
