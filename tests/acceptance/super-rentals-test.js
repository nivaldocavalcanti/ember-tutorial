import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperAluguéis');
    assert.dom('h2').hasText('Bem vindo ao Super Aluguéis!');
    assert.dom('.jumbo a.button').hasText('Sobre');
    await click('.jumbo a.button');
    assert.equal(currentURL(), '/about');

  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperAluguéis');
    assert.dom('h2').hasText('Sobre o Super Aluguéis');

    assert.dom('.jumbo a.button').hasText('Fale Conosco');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperAluguéis');
    assert.dom('h2').hasText('Fale Conosco');

    assert.dom('.jumbo a.button').hasText('Sobre');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperAluguéis');
    assert.dom('nav a.menu-about').hasText('Sobre');
    assert.dom('nav a.menu-contact').hasText('Contato');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });  
});
