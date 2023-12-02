import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_dd751d97.mjs';

const _page0  = () => import('./chunks/generic_ec8767f9.mjs');
const _page1  = () => import('./chunks/index_d9aea65c.mjs');
const _page2  = () => import('./chunks/index_02272bce.mjs');
const _page3  = () => import('./chunks/_nombre__c0870d8f.mjs');
const _page4  = () => import('./chunks/_id__62f176e2.mjs');
const _page5  = () => import('./chunks/_id__a965afbc.mjs');
const _page6  = () => import('./chunks/404_abbf4608.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/anime/directorio/index.astro", _page2],["src/pages/anime/directorio/buscar/[nombre].astro", _page3],["src/pages/anime/info/[id].astro", _page4],["src/pages/anime/ver/[id].astro", _page5],["src/pages/404.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
