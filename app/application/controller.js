export default Ember.Controller.extend({
  showingComposeModal: false,
  session: Ember.inject.service(), // Add this line
  sessionAccount: Ember.inject.service('session-account'),

  actions: {
    toggleComposeModal: function() {
      // Toggle boolean value
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});