/* jshint node: true */
'use strict';

module.exports = {
  name: 'Medium Editor',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/medium-editor/dist/js/medium-editor.js');
    this.app.import(app.bowerDirectory + '/medium-editor/dist/css/medium-editor.css');
    this.app.import(app.bowerDirectory + '/medium-editor/dist/css/themes/flat.css');
  }
};
