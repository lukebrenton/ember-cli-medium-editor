(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['MediumEditor'] };
  }

  define('medium-editor', [], vendorModule);
})();
