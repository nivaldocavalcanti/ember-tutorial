import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function (assert) {
    this.setProperties({
      rental: {
        title: 'Antiga Grande Mansão',
        owner: 'Veruca Salt',
        city: 'São Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Propriedade',
        type: 'Privado',
        bedrooms: 15,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description:
          'Esta grande mansão contempla mais de 40 hectares de colinas e densas florestas de sequoias.',
      },
    });

    await render(hbs`<Rental @rental={{this.rental}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article .details h3').hasText('Antiga Mansão Grande');
    assert.dom('article .detail.owner').includesText('Veruca Salt');
    assert.dom('article .detail.type').includesText('Privado');
    assert.dom('article .detail.location').includesText('São Francisco');
    assert.dom('article .detail.bedrooms').includesText('15');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });

});
