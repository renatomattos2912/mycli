import ptBR from './src/shared/languages/pt-BR';
import enUS from './src/shared/languages/en-US';

require('dotenv').config({ path: './config/.env' });

const config = {
  mode: 'spa',
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    components: 'shared/components',
    plugins: 'shared/plugins',
    assets: 'shared/assets',
    layouts: 'shared/layouts',
    middleware: 'shared/middleware',
    static: 'shared/static',
    store: 'shared/store',
  },
  generate: {
    dir: process.env.BUILD_DIR || 'dist',
  },
  vue: {
    config: {
      devtools: false,
    },
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/shared/plugins/v-maks', '@/shared/plugins/jsdn'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/vuetify',
      {
        lang: {
          locales: {
            ptBR: ptBR.$vuetify,
            enUS: enUS.$vuetify,
          },
          current: 'ptBR',
        },
      },
    ],
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { path: './config' }],
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Português',
            code: 'ptBR',
            iso: 'pt-BR',
            file: 'pt-BR.js',
          },
          {
            name: 'English',
            code: 'enUS',
            iso: 'en-US',
            file: 'en-US.js',
          },
        ],
        lazy: true,
        langDir: 'shared/languages/',
        defaultLocale: 'ptBR',
      },
    ],
  ],
  /*
   ** Router config
   */
  router: {
    mode: 'hash',
    base: process.env.ROUTER_BASE_URL,
    middleware: [],
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: [
      '~/shared/design/variables.scss',
      '~/shared/design/_buttons.scss',
      '~/shared/design/_colors.scss',
      '~/shared/design/_input.scss',
      '~/shared/design/_page.scss',
      '~/shared/design/_spacing.scss',
      '~/shared/design/_table.scss',
      '~/shared/design/_text.scss',
      '~/shared/design/index.scss',
      '~/shared/design/normalize.scss',
    ],
  },
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
};

if (process.env.NODE_ENV === 'development') {
  const DEVTOOLS_HOST = process.env.DEVTOOLS_HOST || 'http://localhost';
  const DEVTOOLS_PORT = process.env.DEVTOOLS_PORT || 8098;

  config.vue.config.devtools = true;
  config.head.script.push({ src: `${DEVTOOLS_HOST}:${DEVTOOLS_PORT}` });
}

export default config;
