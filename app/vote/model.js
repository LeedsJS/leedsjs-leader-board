import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  user: DS.attr('string')
});
