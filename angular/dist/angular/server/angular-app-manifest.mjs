
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7114, hash: '7e8077664061c8c67f99a411b19d23e4668622fbc43fbc676fc1e0922d36f5bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2562, hash: '65674b21ea801d8f01d64849fa3ad90f04da01c0e16935fcbefb2b31aafe296d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83025, hash: '7f225b58c1501c24b53fbc704421793765d0843cf5a94726939d7602d37beaf8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DJPCDDOI.css': {size: 231414, hash: 'mNrVPoIBkWU', text: () => import('./assets-chunks/styles-DJPCDDOI_css.mjs').then(m => m.default)}
  },
};
