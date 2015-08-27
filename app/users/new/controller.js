import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.store.createRecord('user', this.get('model')).save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Public List created successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while creating Public List ${err.responseText || err.message || err}`
        });
      });
      this.transitionToRoute('admin');
    }
  }
});
