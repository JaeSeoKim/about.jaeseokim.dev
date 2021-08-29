module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'ae9220e5cd694573987b4d2f25a115c3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'JaeSeoKim',
  domain: 'about.jaeseokim.dev',
  author: 'JaeSeoKim',

  // open graph metadata (optional)
  description: '동료학습을 통해 함께 성장하는 개발자 김재서입니다! 👋',
  socialImageTitle: '동료학습을 함께 통해 성장하는',
  socialImageSubtitle: '개발자 김재서입니다! 👋',

  // social usernames (optional)
  github: 'JaeSeoKim',
  facebook: 'devjaeseo',
  email: 'devjaeseo@gmail.com',
  blog: 'https://jaeseokim.dev/',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  defaultSocailImage: 'social-image.png',

  fontFamily: null,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'JaeSeoKim/about.jaeseokim.dev',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/skill': 'a44e4d6362ba4445b5dcda5d597511e6',
    '/resume': 'b1c4915776c9491494ae78d9e08c519a',
    '/portfolio': 'defed3c507da402d84c6bbf3c60b558c',
    '/database': 'b5a09de9d7bd4929a7df153463ecccbc'
  },

  googleAnalytics: 'G-FQMCNLKP4T'
}
