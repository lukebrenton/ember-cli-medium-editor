/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-medium-editor',

  included: function(app) {
    this._super.included(app);
    var options = app.options.mediumEditorOptions || {};

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.app.import(app.bowerDirectory + '/medium-editor/dist/js/medium-editor.js');
    }

    if (!options.excludeBaseStyles) {
      this.app.import(app.bowerDirectory + '/medium-editor/dist/css/medium-editor.css');
    }

    if (options.theme) {
      this.app.import(app.bowerDirectory + '/medium-editor/dist/css/themes/' + options.theme + '.css');
    } else if (options.theme !== false) {
      this.app.import(app.bowerDirectory + '/medium-editor/dist/css/themes/default.css');
    }
  }
};
