# Ember CLI Medium Editor

This is an npm package that contains the Medium Editor library
packaged as an [Ember CLI](https://github.com/ember-cli/ember-cli) Addon.


## Installation
To install simply run:

```
ember install ember-cli-medium-editor
Add "MediumEditor" to the "predef" section in .jshintrc
```
in your Ember CLI project's root.

## Themes and CSS
To change or customize the theme add `mediumEditorOptions` to your
`ember-cli-build.js` file. Themes available include `bootstrap`, `default`,
`flat`, `mani`, and `roman`. For older ember-cli versions, look in Brocfile.js.

```javascript
var app = new EmberApp(defaults, {
  mediumEditorOptions: {
    theme: 'bootstrap'
  }
});
```

To use provide your own theme set `theme: false` and provide your own css within
your project. To remove the base styles set `excludeBaseStyles: true`.

```javascript
var app = new EmberApp(defaults, {
  mediumEditorOptions: {
    theme: 'bootstrap',
    excludeBaseStyles: true
  }
});
```

## Usage
Providing the model and route are set up correctly, content typed in the contentEditable field should get bound to the ember model's attribute.

You should be able to use it in your handlebars templates like this e.g.:
```
{{ medium-content-editable value=body options=mediumEditorOptions
  onFinishedTyping=(action "optionalActionNameHere")
  onUpdate=(action "optionalUpdateActionHere")}}
```

Value (required): the attribute you're trying to bind it to.

Options (optional): Json, options you want the editor to initialize with. You'll have to set these on the controller or component you're calling the editor component from. Options [here](https://github.com/daviferreira/medium-editor). e.g.
```
mediumEditorOptions: {
  "toolbar": {
    "buttons": ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'unorderedlist', 'orderedlist'],
  },
  "checkLinkFormat": true,
  "forcePlainText": true
}
```

onFinishedTyping (optional): This is an action that will be called after a 2 second debounce after the user has stopped typing. Can be used as an autosave etc. For example in the controller or component:
```
optionalActionNameHere: function() {
  console.log('Bla');
}
```

onUpdate (optional): This is an action that will be called with no debounce on any change in the
medium editor. Unlike onFinishedTyping, it will fire on copy/paste events and format changes.

Thanks to Davi Ferreira for the editor and to everyone else who has contributed:
https://github.com/daviferreira/medium-editor
