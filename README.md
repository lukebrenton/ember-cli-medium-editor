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
{{ medium-content-editable value=body options=mediumEditorOptions}}
```
Value (required): the attribute you're trying to bind it to.
Options (optional): Json, options you want the editor to initialize with. You'll have to set these on the controller or component you're calling the editor component from. Options [here](https://github.com/daviferreira/medium-editor). e.g.
```
mediumEditorOptions: {
  "buttons": ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'unorderedlist', 'orderedlist'],
  "checkLinkFormat": true,
  "forcePlainText": true
}
```

Thanks to Davi Ferreira for the editor:
https://github.com/daviferreira/medium-editor
