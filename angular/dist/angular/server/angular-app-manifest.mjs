
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
    'index.csr.html': {size: 6958, hash: '53e2bd40a6de2b5ca8fde96a97ddf04f9cb17cac1496c6d15d0d44d5f0c0f159', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2563, hash: '3d2ff21f22fd61de84f516b8e3df05a6ef3ca03367cd33f1bfe1e85880a20e8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82959, hash: 'c2fed7b73a41b0964e167292821ad25055b1798b632688bb45db9760871d7d4c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LZ6NN25T.css': {size: 232140, hash: 'mYPFbYIXIKY', text: () => import('./assets-chunks/styles-LZ6NN25T_css.mjs').then(m => m.default)}
  },
};
