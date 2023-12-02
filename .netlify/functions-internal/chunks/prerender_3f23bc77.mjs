/* empty css                             */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, j as renderHead, k as renderSlot } from './astro_8c48c1cc.mjs';
import 'html-escaper';
import { $ as $$Image } from './pages/generic_ad574947.mjs';
import 'clsx';
import { MagnifyingGlassIcon, StarIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, Fragment } from 'react';
import { Tab, Listbox, Transition } from '@headlessui/react';
import { HomeIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
/* empty css                        */
const $$Astro$a = createAstro();
const $$NavbarInferior = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NavbarInferior;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed bottom-2 left-0 right-0 flex justify-center z-50"> <div class="bg-black h-10 w-64 rounded-md flex justify-center items-center"> <ul class="flex flex-row gap-10"> <li> <a href="/"> ${renderComponent($$result, "HomeIcon", HomeIcon, { "className": "w-8" })} </a> </li> <li> <a href="/anime/directorio"> ${renderComponent($$result, "ArchiveBoxIcon", ArchiveBoxIcon, { "className": "w-8" })} </a> </li> <!-- <li>
        <a href="/perfil">
          <UserIcon className="w-8" />
        </a>
      </li> --> </ul> </div> </nav>`;
}, "J:/Proyectos/ninjadrama/src/components/NavbarInferior.astro", void 0);

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign(`/anime/directorio/buscar/${search}`);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-row mr-3", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "search",
        placeholder: "  Buscar",
        onChange: handleChange,
        className: "rounded-md placeholder-slate-950 text-slate-950 text-center"
      }
    ),
    /* @__PURE__ */ jsx("button", { onClick: handleSubmit, children: /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "w-7" }) })
  ] });
};

const $$Astro$9 = createAstro();
const $$NavbarSuperior = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NavbarSuperior;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-color-5 w-full h-14 flex flex-row items-center justify-between"> ${renderComponent($$result, "Image", $$Image, { "src": "/Logo2.png", "alt": "Logo", "width": 60, "height": 60, "class": "object-cover object-center ml-3" })} ${renderComponent($$result, "Search", Search, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "J:/Proyectos/ninjadrama/src/components/Search.jsx", "client:component-export": "default" })} </nav>`;
}, "J:/Proyectos/ninjadrama/src/components/NavbarSuperior.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ES"> <head><meta charset="UTF-8"><meta name="description" content="Entretenimiento gratuito y para todas las edades - Anime Manager - Anime Manager es una aplicación web que te permite ver sin registro. También puedes ver anime en tu dispositivo movil. 🥵"><meta name="keywords" content="anime sub español ,anime online, anime de estrenos, anime, manager, anime manager, anime gratis, anime en español, noticias de anime"><meta name="author" content="HyugoDev"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- <ViewTransitions /> -->${renderHead()}</head> <body> ${renderComponent($$result, "NavbarSuperior", $$NavbarSuperior, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "NavbarInferior", $$NavbarInferior, {})}  </body> </html>`;
}, "J:/Proyectos/ninjadrama/src/layouts/Layout.astro", void 0);

async function getLastEpisodes() {
  try {
    const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}LastEpisodes`);

    if (!res.ok) {
      throw new Error('Error al obtener datos');
    }

    return await res.json();

  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}






//allDirectory

async function getDirectory() {
  try {
    const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}allDirectory`);

    return await res.json();

  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}








//moreInfo/:title

async function getInfoAnime(title) {
  const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}moreInfo/${title}`);

  return res.json()
}


//getEpisodes/:title

async function getEpisodes(title) {
  const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}getEpisodes/${title}`);

  return res.json()
}


//getAnimeServers/:id


async function getAnimeServers(id) {
  const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}getAnimeServers/ver/${id}`);



  return res.json()

}


//search/:title

async function getsearch(search) {
  const res = await fetch(`${"https://aruppi.jeluchu.xyz/apis/aruppi/v4/"}search/${search}`);



  return res.json()

}

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { episodes } = await getLastEpisodes();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> <h2 class="text-2xl mb-6 text-center">Nuevos Episodios</h2> <div class="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8"> ${episodes.map((anime) => renderTemplate`<a${addAttribute(`/anime/${anime.id}`, "href")} class="group shadow bg-gray-950 borde rounded-lg"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7"> ${renderComponent($$result2, "Image", $$Image, { "src": `data:image/png;base64,${anime.image}`, "alt": anime.title, "width": 184, "height": 50, "class": "w-max object-cover object-center group-hover:opacity-75" })} </div> <h3 class="ml-1 text-sm overflow-hidden truncate text-center"> ${anime.title} </h3> <p class=" text-lg font-medium text-center">${anime.episode}</p> </a>`)} </div> </section> ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/index.astro", void 0);

const $$file$5 = "J:/Proyectos/ninjadrama/src/pages/index.astro";
const $$url$5 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$CardDirectorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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

const $$Astro$5 = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const { directory } = await getDirectory();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directorio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardDirectorio", $$CardDirectorio, { "directory": directory })} ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/directorio/index.astro", void 0);

const $$file$4 = "J:/Proyectos/ninjadrama/src/pages/anime/directorio/index.astro";
const $$url$4 = "/anime/directorio";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  prerender,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$CardSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardSearch;
  function corregirUrl(url) {
    return url.replace("hhttps://", "https://");
  }
  const { search } = Astro2.props;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-1xl px-4 m-10 mt-14 sm:px-6"><div class="flex flex-wrap justify-center gap-x-6 gap-y-10">${search.map((anime) => renderTemplate`<article class="w-96 rounded-md shadow-lg bg-gray-950 border-gray-300 border"><div class="flex flex-col  leading-none "><a${addAttribute(`/anime/info/${anime.title}`, "href")} class="flex-none flex flex-col items-center">${renderComponent($$result, "Image", $$Image, { "src": corregirUrl(anime.image), "alt": anime.title, "width": 200, "height": 150, "class": " object-cover object-center  rounded-md shadow-2xl transform -translate-y-4 border-2 border-gray-300" })}<span class="text-white m-0 text-sm">${anime.type}</span></a><div class="flex-col  text-center"><p class="m-2 text-2xl font-bold">${anime.title}</p><hr class="hr-text" data-content=""></div></div></article>`)}</div></section>`}`;
}, "J:/Proyectos/ninjadrama/src/components/CardSearch.astro", void 0);

const $$Astro$3 = createAstro();
const $$nombre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$nombre;
  const { nombre } = Astro2.params;
  const Busqueda = await getsearch(nombre);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": nombre }, { "default": ($$result2) => renderTemplate`${Busqueda.search ? renderTemplate`${renderComponent($$result2, "CardSearch", $$CardSearch, { "search": Busqueda.search })}` : renderTemplate`${maybeRenderHead()}<span>No se encontro resultados</span>`}` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/directorio/buscar/[nombre].astro", void 0);

const $$file$3 = "J:/Proyectos/ninjadrama/src/pages/anime/directorio/buscar/[nombre].astro";
const $$url$3 = "/anime/directorio/buscar/[nombre]";

const _nombre_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$nombre,
  file: $$file$3,
  url: $$url$3
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

const $$Astro$2 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const DataInfo = await getInfoAnime(id);
  const Episodes = await getEpisodes(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `title` }, { "default": ($$result2) => renderTemplate`${DataInfo ? renderTemplate`${renderComponent($$result2, "Info", Info, { "dataAnime": DataInfo, "episodes": Episodes, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Info.jsx", "client:component-export": "default" })}` : renderTemplate`${maybeRenderHead()}<span>Cargando........</span>`}` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/info/[id].astro", void 0);

const $$file$2 = "J:/Proyectos/ninjadrama/src/pages/anime/info/[id].astro";
const $$url$2 = "/anime/info/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

function Ver({ dataserver }) {
  const [selected, setSelected] = useState(dataserver.servers[0]);
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("article", { className: "flex flex-col m-4 items-center", children: /* @__PURE__ */ jsx("div", { className: "w-48 flex flex-col ", children: /* @__PURE__ */ jsx(Listbox, { value: selected, onChange: setSelected, children: /* @__PURE__ */ jsxs("div", { className: "relative mt-1 bg-color-5 rounded-md", children: [
      /* @__PURE__ */ jsxs(Listbox.Button, { className: "relative w-full cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "block truncate", children: selected.id }),
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsx(
          ChevronUpDownIcon,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          as: Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-color-1 py-1 text-base shadow-lg ring-1 ring-black/5 transparentScrollbar", children: dataserver.servers.map((server) => /* @__PURE__ */ jsx(
            Listbox.Option,
            {
              className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-color-5 text-amber-900" : "text-color-3"}`,
              value: server,
              children: ({ selected: selected2 }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block truncate ${selected2 ? "font-medium" : "font-normal"}`,
                    children: server.id
                  }
                ),
                selected2 ? /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-color-2", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
              ] })
            },
            server.id
          )) })
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ jsx("article", { className: "flex flex-col m-4", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: selected.url,
        allowFullScreen: true,
        title: selected.id,
        controls: true,
        className: "aspect-video text-white"
      }
    ) })
  ] });
}

const $$Astro$1 = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const DataServer = await getAnimeServers(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `title` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Ver", Ver, { "dataserver": DataServer, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Ver.jsx", "client:component-export": "default" })} ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/ver/[id].astro", void 0);

const $$file$1 = "J:/Proyectos/ninjadrama/src/pages/anime/ver/[id].astro";
const $$url$1 = "/anime/ver/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found Error 404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-color-2" data-astro-cid-zetdm5md> <h2 data-astro-cid-zetdm5md>Not Found</h2> ${renderComponent($$result2, "Image", $$Image, { "alt": "404", "src": "/404-anime-girl.gif", "width": 184, "height": 100, "class": "object-cover object-center group-hover:opacity-75", "data-astro-cid-zetdm5md": true })} <p data-astro-cid-zetdm5md>404</p> </div> ` })} `;
}, "J:/Proyectos/ninjadrama/src/pages/404.astro", void 0);

const $$file = "J:/Proyectos/ninjadrama/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _nombre_ as _, index as a, _id_$1 as b, _id_ as c, _404 as d, index$1 as i };
