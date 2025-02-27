
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
    'index.csr.html': {size: 5732, hash: '0a0bc4f463d9d41c1328b2c5e369d47bebb29bfb1d25d6b8fd17b30d02618cdf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1418, hash: '50a3f607c13f1775628ea1acf44dc8caacb8f482f67791e321b1a181f551c346', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80083, hash: 'd71b1a81303771084f6f6e883198520c1d488e90105bee5fc8727718066cbc72', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PZGSNEUL.css': {size: 232046, hash: 'rn/Wf9nNYjE', text: () => import('./assets-chunks/styles-PZGSNEUL_css.mjs').then(m => m.default)}
  },
};
