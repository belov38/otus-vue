module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/store/index.js',
    '!src/router/index.js',
    '!src/plugins/vuetify.js',
  ],
};
