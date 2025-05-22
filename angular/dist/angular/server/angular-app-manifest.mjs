
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
    'index.csr.html': {size: 7104, hash: 'a33617fa808b2046d8b0e4999a35b508b18ccfd2bb71299c00383c196affa004', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2563, hash: '677db83b565a80edffe8765f473ce4a4b018a7eecbcbcb9a759ddf411fbffad0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83135, hash: 'e656961e170e04058000f89d2cab19c89692e98782836ac9d9c815eca976297d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YIISL52A.css': {size: 231403, hash: 's/t/kiVP0Rs', text: () => import('./assets-chunks/styles-YIISL52A_css.mjs').then(m => m.default)}
  },
};
