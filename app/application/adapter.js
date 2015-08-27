import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

// 5emPMCtDu7xGkEy7JsUcOjbYVk34X8
// var remote = new PouchDB('https://mansona:5emPMCtDu7xGkEy7JsUcOjbYVk34X8@mansona.cloudant.com/leedsjs-leader-board');
var remote = new PouchDB('http://atterceinapinesseledsher:ff54b8b62e1a10b56fb613419310c9b25e4b2f2a@leedsjs-leader-board.manson.ie');
// var remote = new PouchDB('https://mansona.cloudant.com/leader-board');

window.remote = remote;

var db = new PouchDB('local-leader-board');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the conection is lost
});

export default Adapter.extend({
  db: db
});
