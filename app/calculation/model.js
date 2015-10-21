import DS from 'ember-data';

export default DS.Model.extend({
    equation: DS.attr('string', {defaultValue: ''}),
    //expressions: DS.hasMany('expression'),
    result: DS.attr('string', { defaultValue: '' })
});
