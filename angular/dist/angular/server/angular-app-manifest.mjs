
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
    'index.csr.html': {size: 7114, hash: '116564de06b4d790c4cfa3b1f23422c270bc457c46abf4da5008801207463015', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2562, hash: '5d5c959019083b97832683e2033a35c8b1e696a89b5f9c40ad8763e7a0c44acb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 86857, hash: 'a4b74e32c646f3f6df2f39491f02df65be62db955d47f1dafe0a1c57d558fe44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DJPCDDOI.css': {size: 231414, hash: 'mNrVPoIBkWU', text: () => import('./assets-chunks/styles-DJPCDDOI_css.mjs').then(m => m.default)}
  },
};
