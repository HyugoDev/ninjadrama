/* empty css                             */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from './astro_8c48c1cc.mjs';
import 'html-escaper';
import 'clsx';
import { a as $$Image, $ as $$Layout } from './pages/404_3a7da77c.mjs';
import { StarIcon } from '@heroicons/react/20/solid';
import { b as getDirectory, c as getInfoAnime, d as getEpisodes } from './pages/_id__d5e3d078.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

const $$Astro$2 = createAstro();
const $$CardDirectorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardDirectorio;
  function corregirUrl(url) {
    return url.replace("hhttps://", "https://");
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { directory } = Astro2.props;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-1xl px-4 m-10 mt-14 sm:px-6"><div class="flex flex-wrap justify-center gap-x-6 gap-y-10">${directory.map((anime) => renderTemplate`<article class="w-96 rounded-md shadow-lg bg-gray-950 border-gray-300 border"><div class="flex flex-col  leading-none "><a${addAttribute(`/anime/info/${anime.title}`, "href")} class="flex-none flex flex-col items-center">${renderComponent($$result, "Image", $$Image, { "src": corregirUrl(anime.poster), "alt": anime.title, "width": 200, "height": 150, "class": " object-cover object-center  rounded-md shadow-2xl transform -translate-y-4 border-2 border-gray-300" })}<span class="text-white m-0 text-sm">${anime.type}</span><span class="flex text-md mb-1">${[0, 1, 2, 3, 4].map((rating) => renderTemplate`${renderComponent($$result, "StarIcon", StarIcon, { "className": classNames(
    parseInt(anime.score) > rating ? "text-orange-600" : "text-gray-200",
    "h-5 w-5 flex-shrink-0"
  ), "aria-hidden": "true" })}`)}</span></a><div class="flex-col  text-center"><p class="m-2 text-2xl font-bold">${anime.title}</p><hr class="hr-text" data-content=""><div class="text-md flex gap-1 m-1 flex-wrap justify-center">${anime.genres.map((generos) => renderTemplate`<span class="font-bold">${generos}</span>`)}<span class="font-bold"></span></div><!-- <p class="hidden md:block px-4 my-4 text-sm text-left tex">{anime.description}</p> --></div></div></article>`)}</div></section>`}`;
}, "J:/Proyectos/ninjadrama/src/components/CardDirectorio.astro", void 0);

const $$Astro$1 = createAstro();
const prerender$1 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const { directory } = await getDirectory();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directorio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardDirectorio", $$CardDirectorio, { "directory": directory })} ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/directorio/index.astro", void 0);

const $$file$1 = "J:/Proyectos/ninjadrama/src/pages/anime/directorio/index.astro";
const $$url$1 = "/anime/directorio";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Info({ dataAnime, episodes }) {
  const [data] = useState({
    characters: dataAnime.characters,
    related: dataAnime.related,
    episodes: episodes.episodes
  });
  return /* @__PURE__ */ jsx("section", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "pt-6", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg sx:flex sx:justify-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: dataAnime.poster,
        alt: dataAnime.title,
        width: 260,
        height: 370,
        className: "object-cover object-center"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 lg:border-r lg:border-orange-700 lg:pr-8", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight sm:text-3xl", children: dataAnime.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 lg:row-span-3 lg:mt-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Anime information" }),
        /* @__PURE__ */ jsx("p", { className: "text-1xl tracking-tight ", children: dataAnime.status }),
        /* @__PURE__ */ jsxs("p", { className: "text-1xl tracking-tight ", children: [
          "Episodios: ",
          dataAnime.moreInfo[0].totalEpisodes
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-1xl tracking-tight ", children: [
          "Generos:",
          dataAnime.genres.map((generos) => /* @__PURE__ */ jsxs("span", { className: "text-1xl tracking-tight ", children: [
            " ",
            generos,
            " "
          ] }, generos))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Rating" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ jsx(
              StarIcon,
              {
                className: classNames(
                  parseInt(dataAnime.rating) > rating ? "text-orange-600" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                ),
                "aria-hidden": "true"
              },
              rating
            )) }),
            /* @__PURE__ */ jsxs("p", { className: " text-white", children: [
              " ",
              dataAnime.rating,
              " de 5 estrellas"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-orange-500 lg:pb-16 lg:pr-8 lg:pt-6 justify-center items-center flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Description" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsx("p", { className: "text-base text-white", children: dataAnime.synopsis }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-xl px-2 py-16 sm:px-0 ", children: /* @__PURE__ */ jsxs(Tab.Group, { children: [
          /* @__PURE__ */ jsx(Tab.List, { className: "flex space-x-1 rounded-xl bg-slate-950 p-1", children: Object.keys(data).map((category) => /* @__PURE__ */ jsx(
            Tab,
            {
              className: ({ selected }) => classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                selected ? "bg-slate-700 shadow" : "text-white hover:bg-white/[0.12] hover:text-white"
              ),
              children: category
            },
            category
          )) }),
          /* @__PURE__ */ jsx(Tab.Panels, { className: "mt-2 overflow-y-scroll h-96 w-full transparentScrollbar rounded-xl ", children: Object.keys(data).map((category) => /* @__PURE__ */ jsxs(
            Tab.Panel,
            {
              className: classNames(
                "rounded-xl bg-slate-950 p-3",
                "ring-slate-700 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              ),
              children: [
                category === "characters" && /* @__PURE__ */ jsx("ul", { className: "", children: data.characters.map((character) => /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "rounded-md p-3 hover:bg-slate-700 flex justify-center ",
                    children: /* @__PURE__ */ jsxs("h3", { className: "text-sm font-medium leading-5 flex items-center ", children: [
                      character.name,
                      /* @__PURE__ */ jsx("p", { className: "ml-5", children: character.role }),
                      "  ",
                      /* @__PURE__ */ jsx("img", { src: character.image, alt: character.name, width: 70, height: 70, className: "object-cover ml-5" })
                    ] })
                  },
                  character.id
                )) }),
                category === "related" && /* @__PURE__ */ jsx("ul", { children: data.related.map((item) => /* @__PURE__ */ jsxs(
                  "li",
                  {
                    className: "relative rounded-md p-3 hover:bg-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium leading-5", children: item.title }),
                      /* @__PURE__ */ jsx("img", { src: item.poster, alt: item.title, width: 80, height: 80 }),
                      /* @__PURE__ */ jsx("p", { children: item.type })
                    ]
                  },
                  item.title
                )) }),
                category === "episodes" && /* @__PURE__ */ jsx("ul", { children: data.episodes.map((episode, index) => /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "relative h-10 rounded-md hover:bg-slate-700 flex items-center",
                    children: /* @__PURE__ */ jsxs("a", { href: `/anime/${episode.id}`, className: "ml-3", children: [
                      "Watch ",
                      /* @__PURE__ */ jsxs("span", { className: "ml-1  ", children: [
                        "Episode ",
                        episode.episode
                      ] })
                    ] })
                  },
                  index
                )) })
              ]
            },
            category
          )) })
        ] }) })
      ] })
    ] })
  ] }) });
}

const $$Astro = createAstro();
const prerender = true;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const DataInfo = await getInfoAnime(id);
  const Episodes = await getEpisodes(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `title` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Info", Info, { "dataAnime": DataInfo, "episodes": Episodes, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Info.jsx", "client:component-export": "default" })} ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/info/[id].astro", void 0);

const $$file = "J:/Proyectos/ninjadrama/src/pages/anime/info/[id].astro";
const $$url = "/anime/info/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, index as i };
