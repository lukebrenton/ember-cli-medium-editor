import Ember from 'ember';

const { computed, observer, run } = Ember;

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['contenteditable'],
  editable: true,
  isUserTyping: false,
  plaintext: false,
  classNames: ['editable'],
  mediumEditor: undefined,
  contenteditable: computed('editable', function() {
    var editable = this.get('editable');
    return editable ? 'true' : undefined;
  }),
  didInsertElement: function() {
    var _editor = new MediumEditor(this.$(), this.get('options'));
    this.set('mediumEditor', _editor);
    return this.setContent();
  },
  setUserFinishedTyping: function() {
    if (this.get('isUserTyping')) {
      let action = this.attrs.onFinishedTyping;

      if (typeof action === 'string') {
        this.sendAction('onFinishedTyping');
      } else if (typeof action === 'function') {
        action();
      }

      return this.toggleProperty('isUserTyping');
    }
  },
  focusOut: function() {
    this.setUserFinishedTyping();
  },
  keyDown: function(event) {
    if (!event.metaKey) {
      run.debounce(this, 'setUserFinishedTyping', 2000);
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
  valueDidChange: observer('value', function() {
    if (this.$() && this.get('value') !== this.$().html()) {
      this.setContent();
    }
  }),
  setContent: function() {
    if (this.$() && this.get('mediumEditor')) {
      this.get('mediumEditor').setContent(this.get('value'));
    }
  }
});
