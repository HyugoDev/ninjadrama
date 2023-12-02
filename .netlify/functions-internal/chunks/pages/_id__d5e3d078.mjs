/* empty css                              */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_8c48c1cc.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_3a7da77c.mjs';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { useState, Fragment } from 'react';

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

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const DataServer = await getAnimeServers(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `title` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Ver", Ver, { "dataserver": DataServer, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Ver.jsx", "client:component-export": "default" })} ` })}`;
}, "J:/Proyectos/ninjadrama/src/pages/anime/ver/[id].astro", void 0);

const $$file = "J:/Proyectos/ninjadrama/src/pages/anime/ver/[id].astro";
const $$url = "/anime/ver/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, getLastEpisodes as a, getDirectory as b, getInfoAnime as c, getEpisodes as d, getsearch as g };
