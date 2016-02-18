import Ember from 'ember';

const { computed, observer } = Ember;

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['contenteditable'],
  editable: true,
  isUserTyping: false,
  plaintext: false,
  classNames: ['editable'],
  contenteditable: computed('editable', function() {
    var editable = this.get('editable');
    return editable ? 'true' : undefined;
  }),
  didInsertElement: function() {
    new MediumEditor(this.$(), this.get('options'));
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
  valueDidChange: observer('value', function() {
    if (this.$() && this.get('value') !== this.$().html()) {
      this.setContent();
    }
  }),
  setContent: function() {
    if (this.$()) {
      return this.$().html(this.get('value'));
    }
  }
});
