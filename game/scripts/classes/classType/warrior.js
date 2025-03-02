import { Characters } from "../Characters";
import { GAME_CONSTANTS } from "../../Constants";

class Warrior extends Characters{
    constructor(name) {
        super(name,  GAME_CONSTANTS.CALSSES.WARIOR);
        Object.assign(this.stats, GAME_CONSTANTS.WARIOR)
        this.maxHP = this.stats.hp
    }

    stunninBlow(target){
        const damage = this.stats.attack * 0.7;
        const damageDeal = target.recaiceAttack(damage);
        target.isStunning = true;
        return damageDeal;
    }
}
