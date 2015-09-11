/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-medium-editor',

  included: function(app) {
    this._super.included(app);
    var options = app.options.mediumEditorOptions || {};

    this.app.import(app.bowerDirectory + '/medium-editor/dist/js/medium-editor.js');

    if (options.theme && options.excludeBaseStyles !== false) {      
      this.app.import(app.bowerDirectory + '/medium-editor/dist/css/medium-editor.css');
    }

    if (options.theme && options.theme !== false) {
      this.app.import(app.bowerDirectory + '/medium-editor/dist/css/themes/' + options.theme + '.css');
    }
  }
};
