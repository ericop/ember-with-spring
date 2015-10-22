import Ember from 'ember';

export default Ember.Route.extend({
  route (params) {
    return this.store.findRecord('calculation', params.calculation_id)
  }
});
