// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      titleTemplate: '%s - PT. Ambil Gambar',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        { hid: 'description', name: 'description', content: 'Memberikan Solusi sesuai dengan kebutuhan bisnis anda. #MakeITeasy' }
      ]
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  runtimeConfig: {
		BASE_URL: process.env.BASE_URL,
		public: {
			BASE_URL: process.env.BASE_URL,
		},
	},
  devServer: {
    host: '0',
    port: 3100
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss"]
})