
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularShopp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularShopp/home"
  },
  {
    "renderMode": 2,
    "route": "/angularShopp/product"
  },
  {
    "renderMode": 2,
    "route": "/angularShopp/about"
  },
  {
    "renderMode": 2,
    "route": "/angularShopp/contact"
  },
  {
    "renderMode": 2,
    "route": "/angularShopp/card"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angularShopp/home",
    "route": "/angularShopp/*"
  }
],
  assets: {
    'index.csr.html': {size: 19220, hash: 'e31676acb2ed4928069fe02e873d83ade5c15c80dc1101b9071a9c9fffc6d3f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: 'f2a8959ef62f1ab7b57be8190549da88de08bc89d7a323775375a910b93602bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'product/index.html': {size: 27275, hash: 'c61cdd82eb8f7c54e2f8d791a4e43d4f5a8da56c59297b7e4030dca390616ef4', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 36197, hash: '39eabe8b933128395b1c00c0fb1cf6fe52a27a8e7335fa2ab565acdbc759b817', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28083, hash: '18d8365de471ae6f8c341d999c49f0df6f7867f8994d7e381d7b82fae36dd5ac', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28417, hash: '932cd4bb1ee6a7a2bbdec96059a11ca4fac602777516c40971cdfb32beea090c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'card/index.html': {size: 29583, hash: '56e90173af512894d27bd5d355b4064cb81ca3f6f9e239cd00c8ac7b4b86509f', text: () => import('./assets-chunks/card_index_html.mjs').then(m => m.default)},
    'styles-2ZQHUR2N.css': {size: 245849, hash: 'zllxm2Mcz2I', text: () => import('./assets-chunks/styles-2ZQHUR2N_css.mjs').then(m => m.default)}
  },
};
