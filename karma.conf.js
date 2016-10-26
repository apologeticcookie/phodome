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

    // This is basically just a copy of what's inside our webpack.config.js,
    // but with a few extra bits (notably, the `externals` section) to make
    // sure karma runs properly
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
      // karma-mocha-reporter is not necessary, but makes our test reports
      // look a bit cleaner + more like mocha's spec reporter
      'karma-mocha-reporter'
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

    // Use the mocha reporter that's defined above in plugins
    reporters: ['mocha'],
    port: 9998,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // `browsers: ['Chrome']` is fine for local testing, but when running karma
    // on Travis (which we detect with process.env.TRAVIS), the browser instead
    // needs to be ['Chrome_travis_ci'] (or whatever the custom launcher name
    // is defined as below in `customLaunchers`)
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],
    singleRun: false,

    // This `customLaunchers` section is needed only for Travis; does not affect
    // the tests when running locally
    customLaunchers: {
      'Chrome_travis_ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });
};
