import DS from 'ember-data';

export default DS.Model.extend({
    operands: DS.hasMany('operand'),
    operator: DS.attr('string')
});
