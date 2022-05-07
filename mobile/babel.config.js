module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            src: './src',
            i18n: './i18n',
            themes: './themes'
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env'
        }
      ]
    ]
  };
};
