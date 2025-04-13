
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
    'index.csr.html': {size: 5718, hash: '8ebf935292b73b2ba9ce6eaed445c6add673057770ff2774819ace9bacd2c017', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1315, hash: '9df9cc5b282517f0fec6023884d2e7a70eb40b6794f001a33dc1ae8cb88bcc46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81677, hash: '9576a03bb72051c036d3d4d5f3a1fc2b5fa9b29bf73887d3de66789265801160', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LZ6NN25T.css': {size: 232140, hash: 'mYPFbYIXIKY', text: () => import('./assets-chunks/styles-LZ6NN25T_css.mjs').then(m => m.default)}
  },
};
