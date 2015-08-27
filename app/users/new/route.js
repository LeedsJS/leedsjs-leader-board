import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
    };
  },

  actions: {
    //no-track
    willTransition: function() {
      this.modelFor(this.routeName).rollbackAttributes();
    }
  }
});
