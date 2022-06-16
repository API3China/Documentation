module.exports = {
  env: process.env.NODE_ENV,
  /// Airnode doc set version pick list.
  versions: [
    { name: 'v0.6', url: '/airnode/v0.6/' },
  ],
  /// Next version of airnode, used by /next route.
  airnodeVersionNext: [{ name: 'v0.6', url: '/airnode/v0.6/' }],
  /// Beacon doc set version pick list.
  versionsBeacon: [{ name: 'v0.2', url: '/beacon/v0.2/' }],
  /// OIS doc set version pick list.
  versionsOis: [{ name: 'v1.0.0', url: '/ois/v1.0.0/' }],
  /// Latest/current Airnode doc set version.
  /// Used by api3dao/airnode CI link checking
  latestVersion: '/airnode/v0.6/',
  /// Latest/current Beacon doc set version.
  /// Used by api3dao/airnode CI link checking
  latestBeaconVersion: '/beacon/v0.2/',
  /// Latest/current OIS doc set version.
  /// Used by api3dao/airnode CI link checking
  latestOisVersion: '/ois/v1.0.0/',
  /// Job page revision, incremented when a new job(s) is added
  jobPageRevision: 3,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,user-scalable=yes,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0',
      },
    ],
    ['link', { rel: 'icon', href: '/img/small-logo.png' }],
  ],
  title: '技术文档',
  base: '/',
  description: 'API3技术文档',
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5'],
  },
  themeConfig: {
    startPath: '/airnode/v0.6/',
    sidebarDepth: 0,
    displayAllHeaders: false,
    logo: '/img/logo.png',
    nav: [
      { text: 'Discord', link: 'https://discord.gg/qnRrcfnm5W' },
      { text: 'Forum', link: 'https://forum.api3.org' },
      { text: 'GitHub', link: 'https://github.com/api3dao/api3-docs' },
    ],
    sidebar: {
      '/airnode/v0.6/': require(`../airnode/v0.6/sidebar.js`),
      '/beacon/v0.2/': require(`../beacon/v0.2/sidebar.js`),
      '/ois/v1.0.0/': require(`../ois/v1.0.0/sidebar.js`),
      '/chainapi/': require(`../chainapi/sidebar.js`),
      '/dao-members/': require(`../dao-members/sidebar.js`),
      '/api3/': require(`../api3/sidebar.js`),
      '/dev/': require(`../dev/sidebar.js`),
    },
    /*
      2021-02-17: wkande:
      smoothScroll=true will cause the TOC to require a double click for Ubuntu Firefox.
      Try true again after Firefox gets an update.
    */
    smoothScroll: false,
  },
  /**
   * Tells vuepress live-reload server which files to process.
   * Ignore folders and files when prefixed with !.
   */
  patterns: ['**/*.md', '**/*.vue'],
  /**
   * Loading for PDF, not a great solution.
   * https://github.com/vuejs/vuepress/issues/700
   */
  chainWebpack: (config, isServer) => {
    config.module
      .rule('pdfs')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`,
      });

    config.module
      .rule('vue')
      .uses.store.get('vue-loader')
      .store.get('options').transformAssetUrls = {
      video: ['src', 'poster'],
      source: 'src',
      img: 'src',
      image: ['xlink:href', 'href'],
      a: 'href',
    };
  },
  plugins: [
    ['vuepress-plugin-table-of-contents'],
    //['vue-pdf'],
    ['vuepress-plugin-element-tabs'],
    ['@vuepress/last-updated'],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 15,
        /*
          2021-03-10: wkande:  Do not use "test:", version filtering has been
          added to .vuepress.components/SearchBox.vue
        */
      },
    ],
  ],
};
