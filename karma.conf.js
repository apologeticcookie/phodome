var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/client/**/*.spec.js',
    ],

    preprocessors: {
      'client/src/**/*.js': ['webpack', 'sourcemap'],
      'test/client/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
          /node_modules\/aframe\/dist\/aframe.js/
        ],
        loaders: [
          {
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'],
            test: /\.js$/,
            // Might need query.presets here sometime in the future
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ],
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      }
    },

    reporters: ['progress'],
    port: 9998,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],
    singleRun: false,

    customLaunchers: {
      'Chrome_travis_ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });
};
