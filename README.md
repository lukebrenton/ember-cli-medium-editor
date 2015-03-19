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

You should be able to use it in your handlebars templates like this e.g.:
```
{{ medium-content-editable value=body options='{"buttons": ["bold", "italic"]}' }}
```
Value (required): whatever attribute you're trying to bind it to.
Options (optional): Json string of the medium editor options you want to initialize with. Options [here](https://github.com/daviferreira/medium-editor).


Thanks to Davi Ferreira for the editor:
https://github.com/daviferreira/medium-editor
