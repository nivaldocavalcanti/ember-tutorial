import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        return {
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
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'Esta grande mansão contempla mais de 40 hectares de colinas e densas florestas de sequoias.',
        };
    }
}
