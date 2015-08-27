import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    add(user) {
      user.set('isEntry', true).save();
    },

    remove(user) {
      user.set('isEntry', false).save();
    }
  }
});
