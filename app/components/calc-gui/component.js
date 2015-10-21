import Ember from 'ember';

export default Ember.Component.extend({
  equation: null, //defualt value

  //init () {
    //this.set('equation', this.get('passedEquation'));
    //this._super();
  //}
  actions: {
    eval: function () {
        console.log('eq', this.get('equation'));
        this.sendAction('eval', this.get('equation'));
    }
  }
});
