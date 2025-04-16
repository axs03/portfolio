
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
    'index.csr.html': {size: 6948, hash: 'f8fa0dc934c4c17b0a12566849c3a110437ef3af243bf51a68af25d4282f7e4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2553, hash: '0037d6d4dbf21e4ccac8de4afbc14913909ded5d6390b75668bbd67ffc8f8dc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82949, hash: 'bfacb61911d9c5f0126c6f8757d48ee3010db3f5e988a8170bd653401c23f317', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LZ6NN25T.css': {size: 232140, hash: 'mYPFbYIXIKY', text: () => import('./assets-chunks/styles-LZ6NN25T_css.mjs').then(m => m.default)}
  },
};
