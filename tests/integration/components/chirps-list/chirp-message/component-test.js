import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chirps-list/chirp-message', 'Integration | Component | chirps list/chirp message', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{chirps-list/chirp-message}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#chirps-list/chirp-message}}
      template block text
    {{/chirps-list/chirp-message}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
