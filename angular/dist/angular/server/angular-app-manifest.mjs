
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
    'index.csr.html': {size: 6960, hash: '8d06e06092108ed6dab39365262c12c6396f82a3d14d964dd134378370cebbd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2563, hash: 'da7da7786333cdaf63fc2e157119a29b18be4406d4e262cbfcb0650597e37d9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83005, hash: '4e772fa030fe0d49dbc1f2b8502e8859b645183d82b6bb91972be2174f5e912b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-X4NG7N27.css': {size: 232142, hash: 'EZ9oihRQCNQ', text: () => import('./assets-chunks/styles-X4NG7N27_css.mjs').then(m => m.default)}
  },
};
