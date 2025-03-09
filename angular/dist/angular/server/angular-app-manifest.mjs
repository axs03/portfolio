
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
    'index.csr.html': {size: 5629, hash: '8365b88f67030ec9ce967ba52eb813bb610e72d3c8c6e311c61b6d5cf91cae03', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1315, hash: '3e0314dadbe3c980e93de638935273b751d563e1b0cbec354845462f51819730', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79740, hash: '9046c4ece5538a9156a1fcafb59e9ac0841b9e53e1d17fcc2c43066b89e68153', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PZGSNEUL.css': {size: 232046, hash: 'rn/Wf9nNYjE', text: () => import('./assets-chunks/styles-PZGSNEUL_css.mjs').then(m => m.default)}
  },
};
