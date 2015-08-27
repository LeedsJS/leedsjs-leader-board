import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    var voteToken = localStorage.getItem('vote-token');

    if(!voteToken) {
      var newToken = new Date();

      voteToken = newToken.toString();

      localStorage.setItem('vote-token', newToken);
      console.log("new", voteToken);
    } else {
      console.log("old", voteToken);
    }

    return this.store.findRecord('vote', voteToken).then(null, () => {
      //probably doesn't exist
      return this.store.createRecord('vote', {
        id: voteToken
      }).save();
    });
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    }
  }
});
