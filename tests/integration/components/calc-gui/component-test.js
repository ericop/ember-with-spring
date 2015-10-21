import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calc-gui', 'Integration | Component | calc gui', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //this.render(hbs`{{calc-gui}}`);

  //assert.equal(this.$().text().trim(), "");

  // Template block usage:
  this.render(hbs`
    {{#calc-gui passedEquation="1 + 1"}}
    {{/calc-gui}}
  `);

  assert.equal(this.$().text().search(/Enter your Equation/), 1);
});
