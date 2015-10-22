import DS from 'ember-data';
//import HalAdapter from "ember-data-hal-9000/adapter";

export default DS.RESTAdapter.extend({

    host: 'http://localhost:4201',
    shouldReturnAll: true
});
