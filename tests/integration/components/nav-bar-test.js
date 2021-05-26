import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the navbar with index, about and contact links', async function (assert) {
    await render(hbs`<NavBar />`);

    assert.dom('.menu a.menu-index').exists();
    assert.dom('.menu a.menu-index').hasText('SuperAluguéis');
    assert.dom('.links a.menu-about').exists();
    assert.dom('.links a.menu-about').hasText('Sobre');
    assert.dom('.links a.menu-contact').exists();
    assert.dom('.links a.menu-contact').hasText('Contato');

  });
});
