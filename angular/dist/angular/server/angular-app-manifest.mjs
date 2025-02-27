
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
    'index.csr.html': {size: 5732, hash: '79b6addd460becd545639ff18fc7231da94eb6479e0056411988943b6eec1334', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1418, hash: '739f4852618aa9a25af273415ecbf8d3c413f90739736b333b68f29a09c4c0dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79640, hash: 'eb948603e592d0c7cd36e7c8328bdea6e38642c1298f6ae6e9f63fda2f4961c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PZGSNEUL.css': {size: 232046, hash: 'rn/Wf9nNYjE', text: () => import('./assets-chunks/styles-PZGSNEUL_css.mjs').then(m => m.default)}
  },
};
