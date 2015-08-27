import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name       : DS.attr('string'),
  email      : DS.attr('string'),
  image      : DS.attr('string'),
  isEntry    : DS.attr('boolean')
});
