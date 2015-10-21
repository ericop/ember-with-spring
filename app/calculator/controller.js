import Ember from 'ember';

export default Ember.Controller.extend({

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
        this.get('model').setProperties ({
            equation: equationPassedUp,
            result: this.crunchNumbers(equationPassedUp)
        }).save();
      },

  }
});
