module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          // alias: {
          //   components: "./src/components",
          //   utils: "./src/utils",
          //   screens: "./src/screens",
          //   navigation: "./src/navigation",
          // },
          alias: {
            assets: "./assets",
            src: "./src",
            i18n: "./i18n",
            themes: "./themes",
          },
        },
      ],
    ],
  };
};
