module.exports = {
  configureWebpack: {
    watchOptions: {
      ignored: /.*\.json/
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/style.scss";`,
      },
    },
  },
  devServer: {
    port: 8080,
    // setting for connecting localhost with express server to manipulate API request
    proxy: "http://localhost:3000",
  },
};