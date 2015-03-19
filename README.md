# Ember CLI Medium Editor

This is an npm package that contains the Medium Editor library
packaged as an [Ember CLI](https://github.com/ember-cli/ember-cli) Addon.


## Installation
To install simply run:

```
npm install --save ember-cli-medium-editor
ember g ember-cli-medium-editor
Add "MediumEditor" to the "predef" section in .jshintrc
```
in your Ember CLI project's root.


## Usage
Providing the model and route are set up correctly, content typed in the contentEditable field should get bound to the ember model's attribute.

You should then be able to use it in your handlebars templates like this:
```
{{medium-content-editable valueBinding="body"}}
```
valueBinding being whatever attribute you're trying to bind it to.


## Todo
Pass options to MediumEditor initialization. For now you can override it, however:
```
// app/components/medium-content-editable.js
import Ember from 'ember';
import MediumContentEditable from 'ember-cli-medium-editor/components/medium-content-editable';

export default MediumContentEditable.extend({
  didInsertElement: function() {
    new MediumEditor(this.$(), {
      // Medium editor options here.
    });
    return this.setContent();
  }
});
```
Multiple component support, i.e. different options per initialization


Thanks to Davi Ferreira for the editor:
https://github.com/daviferreira/medium-editor
