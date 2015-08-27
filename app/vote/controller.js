import Ember from 'ember';

export default Ember.Controller.extend({

  application: Ember.inject.controller(),

  actions: {
    vote(user) {
      this.get('application.model').set('user', user.id).save();
    }
  }
});
