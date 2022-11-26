module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/style.scss";`,
      },
    },
  },
  devServer: {
    port: 8080,
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: "http://localhost:3000",
  },
};
