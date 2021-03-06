import AllyCard from '../../ally-card';
import { onDeclareDefender } from '../../../events';

export default class GondorianSpearman extends AllyCard {
  static code = '116-029';

  setupCardAbilities() {
    this.response({
      when: {
        [onDeclareDefender]: event => event.target === this,
      },
      handler() {
        this.game.currentAttack.attacker.modifyWounds(1)
      }
    })
  }
}
