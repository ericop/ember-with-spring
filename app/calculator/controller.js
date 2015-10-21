import Ember from 'ember';

export default Ember.Controller.extend({

  //pastCalcsCtrl: Ember.inject.controller('histories'),
  //pastCalculations: Ember.computed.alias('pastCalcsCtrl.model'),

  equationParts: Ember.computed('model.equation', function () {
      if ( typeof this === 'undefined') {
          return ["?", "?", "?"];
      }
      var equation = this.get('equation');
      console.log('this and equation', this, equation);
      if ( equation) {
        var bits = equation.split(" ");
        console.log('bits', bits);
        return bits;
      }
  }),

  oldEquations: Ember.computed('model', function () {
      if (!this){
        return [];
      }
      var that = this;
      var equations = this.store.findAll('calculation')
      console.log('equations', equations.toArray());
      equations.filter( function (calc) {
           return calc.get('result') !== '';
      });
      console.log('equations filtered', equations.toArray());

      return equations;
  }),

  crunchNumbers (equation) {
    try {
     return eval(equation);
    }
    catch (error) {
      return 'does not compute :(';
    }
  },

  actions: {
      evaluateEquation (equationPassedUp) {
        var that = this;
        this.get('model').setProperties ({
            equation: equationPassedUp,
            result: this.crunchNumbers(equationPassedUp)
        }).save().then( function (){
          that.set('model', that.store.createRecord('calculation'));
        });
      },

  }
});
