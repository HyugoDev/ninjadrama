import '@astrojs/internal-helpers/path';
/* empty css                              */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_8c48c1cc.mjs';
import 'html-escaper';
import 'clsx';
import { HomeIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_e64b35dd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
/* empty css                         */
const $$Astro$5 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "J:/Proyectos/ninjadrama/node_modules/astro/components/Image.astro", void 0);

const $$Astro$4 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "J:/Proyectos/ninjadrama/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///J:/Proyectos/ninjadrama/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$3 = createAstro();
const $$NavbarInferior = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro();
const $$NavbarSuperior = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavbarSuperior;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-color-5 w-full h-14 flex flex-row items-center justify-between"> ${renderComponent($$result, "Image", $$Image, { "src": "/Logo2.png", "alt": "Logo", "width": 60, "height": 60, "class": "object-cover object-center ml-3" })} ${renderComponent($$result, "Search", Search, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "J:/Proyectos/ninjadrama/src/components/Search.jsx", "client:component-export": "default" })} </nav>`;
}, "J:/Proyectos/ninjadrama/src/components/NavbarSuperior.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ES"> <head><meta charset="UTF-8"><meta name="description" content="Entretenimiento gratuito y para todas las edades - Anime Manager - Anime Manager es una aplicación web que te permite ver sin registro. También puedes ver anime en tu dispositivo movil. 🥵"><meta name="keywords" content="anime sub español ,anime online, anime de estrenos, anime, manager, anime manager, anime gratis, anime en español, noticias de anime"><meta name="author" content="HyugoDev"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- <ViewTransitions /> -->${renderHead()}</head> <body> ${renderComponent($$result, "NavbarSuperior", $$NavbarSuperior, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "NavbarInferior", $$NavbarInferior, {})}  </body> </html>`;
}, "J:/Proyectos/ninjadrama/src/layouts/Layout.astro", void 0);

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

export { $$Layout as $, _404 as _, $$Image as a, imageConfig as i };
