module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    reporters: ['progress', 'coverage'],

    files: [
      // libraries
      'bower_components/jquery/jquery.js',
      'bower_components/jquery-ui/ui/jquery-ui.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // app
      'src/ez-zero-clipboard.js',
      'dist/ez-zero-clipboard-tpl.js',

      // tests
      'test/**/*Spec.js',
    ],

    preprocessors: {
      'src/ez-zero-clipboard.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },

    background: false,

    port: 3651,

    browsers: ['Chrome']
  });
};
