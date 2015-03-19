#  Ember CLI Medium Editor

This is an npm package that contains the Medium Editor library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

## Installation
To install simply run:

```
npm install --save ember-cli-medium-editor
ember g ember-cli-medium-editor
Add "MediumEditor" to the "predef" section in .jshintrc
```
in your Ember CLI project's root.

## Simple example
Providing the model and route are set up correctly, content typed in the contentEditable field should get bound to the ember model's attribute.

Create the contenteditable.js view in the app/views folder:

```
import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['contenteditable'],
  editable: true,
  isUserTyping: false,
  plaintext: false,
  classNames: ['editable'],
  contenteditable: (function() {
  var editable = this.get('editable');
    return editable ? 'true' : undefined;
  }).property('editable'),
  didInsertElement: function() {
    new MediumEditor(this.$(), {
      // Medium editor options Here
    });
    return this.setContent();
  },
  focusOut: function() {
    return this.set('isUserTyping', false);
  },
  keyDown: function(event) {
    if (!event.metaKey) {
      return this.set('isUserTyping', true);
    }
  },
  input: function() {
    if (this.get('plaintext')) {
      return this.set('value', this.$().text());
    } else {
      return this.set('value', this.$().html());
    }
  },
  render: function(buffer) {
    buffer.push((this.get('value') || null));
  },
  setContent: function() {
    var this_m = this;
    if (this_m.$()) {
      return this_m.$().html(this_m.get('value'));
    }
  }
});
```

You should then be able to use it in your handlebars templates like this:
```
{{view 'contenteditable' valueBinding="body"}}
```
valueBinding being whatever attribute you're trying to bind it to.

Thanks to Davi Ferreira for the editor:
https://github.com/daviferreira/medium-editor
