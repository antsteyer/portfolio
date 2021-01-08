module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/theme/main.scss";
        `
      }
    }
  }
};
