// Karma configuration
'use strict';
var path = require('path');
module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.js',
    ],
    exclude: [
    ],
    preprocessors: {
      './test/**/*.js': ['webpack'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
            { 
              loader: 'babel', 
              exclude: path.resolve(__dirname, 'node_modules'),
              query: {
                presets: ['airbnb']
              }
            },
            {
              test: /\.json$/,
              loader: 'json',
            },
        ]
      },
      resolve : {
          extensions: ['', '.js', '.jsx']
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true,
    },

    reporters: ['progress'],
    reportSlowerThan: 20,

    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['PhantomJS'],  // Add Chrome if you want to run tests in Chrome
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher'
      //'karma-chrome-launcher'
    ],
    singleRun: false,
  });
};
