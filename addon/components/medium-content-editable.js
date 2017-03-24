import Ember from 'ember';
import MediumEditor from 'medium-editor';

const { computed, observer, run } = Ember;

export default Ember.Component.extend({
  tagName:            'div',
  attributeBindings:  ['contenteditable'],
  editable:           true,
  isUserTyping:       false,
  plaintext:          false,
  classNames:         ['editable'],
  mediumEditor:       undefined,

  contenteditable:    computed('editable', function() {
    return this.get('editable') ? 'true' : undefined;
  }),

  triggerChange() {
    const $el = Ember.$(this.get('element'));
    Ember.run.next(this, function() {
      $el.trigger('change');
    });
  },

  didInsertElement() {
    const _editor = new MediumEditor(this.$(), this.get('options'));
    this.set('mediumEditor', _editor);

    // Setup listeners this way to support IE11 / IE10
    // (browsers that don't natively support the input event)
    Ember.run.scheduleOnce('afterRender', this, function() {
      const $el = Ember.$(this.get('element'));
      $el.bind('blur keyup paste copy cut mouseup input', this.triggerChange.bind(this));
      Ember.$('.medium-editor-toolbar').bind('mouseup',   this.triggerChange.bind(this));
    });
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
    }

    return this.set('isUserTyping', false);
  },

  willDestroyElement() {
    const $el = Ember.$(this.get('element'));
    $el.unbind('blur keyup paste copy cut mouseup input', this.triggerChange.bind(this));
    Ember.$('.medium-editor-toolbar').unbind('mouseup',   this.triggerChange.bind(this));
    this.get('mediumEditor').destroy();
  },

  change() {
    if (this.get('plaintext')) {
      return this.set('value', this.$().text());
    } else {
      return this.set('value', this.$().html());
    }
  },

  focusOut() {
    return this.setUserFinishedTyping();
  },

  keyDown(event) {
    if (!event.metaKey) {
      run.debounce(this, 'setUserFinishedTyping', 2000);
      return this.set('isUserTyping', true);
    }
  },

  valueDidChange: observer('value', function() {
    if (this.$() && this.get('value') !== this.$().html()) {
      this.setContent();
    }
  }),

  setContent() {
    if (this.$() && this.get('mediumEditor')) {
      this.get('mediumEditor').setContent(this.get('value'));
    }
  }
});
