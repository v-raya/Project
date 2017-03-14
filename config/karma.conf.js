// Karma configuration
// Generated on Tue Mar 14 2017 09:24:56 GMT-0700 (PDT)
var webpack = require('webpack');


var webpackConfig = require('./webpack/test.js');
webpackConfig.devtool = 'cheap-module-inline-source-map';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/javascript/*_tests.js', watched: false},
      {pattern: 'test/javascript/**/*_tests.js', watched: false}
    ],


    // list of files to exclude
    exclude: [
      './../node_modules/'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

      'test/javascript/*_test.js': ['webpack'],
      'test/javascript/**/*_test.js': ['webpack']
    },

    webpack:  //kind of a copy of your webpack config
    {},

    plugins: [
      'karma',
      'karma-jasmine',
      'webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      require('karma-webpack') // *** This 'registers' the Karma webpack plugin.
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      //       // i. e.
      stats: 'errors-only'
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
