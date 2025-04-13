
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
    'index.csr.html': {size: 5719, hash: '14d394f93e57eb9feee30025a38c8979319aa60ecdc58013d2ba7b1f2466322e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1315, hash: '76c2a51e4328976a8b9e6f100590b70cf6fbafda91dbecd8724be06443dcb5b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81002, hash: 'dd5d49b05bc05a303255fc1a137e25a9b42c4e030ec6a9ce8f94d050ad59675a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PRFQ7FOV.css': {size: 232141, hash: 'o3IoxQREkgo', text: () => import('./assets-chunks/styles-PRFQ7FOV_css.mjs').then(m => m.default)}
  },
};
