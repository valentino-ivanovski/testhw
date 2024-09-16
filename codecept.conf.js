/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  plugins: {
    allure: {
      enabled: false,
      require: "allure-codeceptjs",
    },
  },

  output: './output',
  helpers: {
    Playwright: {
      url: 'http://test.celtra.com/preview/f576e12f',
      show: true,
      browser: 'chromium',
      channel: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'testhw',

  multiple: {
    parallel: {
      chunks: 2,
      browsers: [
        { browser: 'chromium', channel: 'chrome' },
        { browser: 'chromium', channel: 'msedge' },
        { browser: 'firefox' },
      ]
    }
  }
};
