import HeroCard from '../../hero-card';

export default class Eowyn extends HeroCard {
  static code = '116-007';

    setupCardAbilities(ability) {
        this.action({
          cost: ability.costs.discard(1),
          controller: 'any',
          handler: () => {
            this.modifyWillpower(1)
          }

        })
    }
}
