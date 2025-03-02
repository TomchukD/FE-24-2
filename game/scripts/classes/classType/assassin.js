import { Characters } from "../Characters";
import { GAME_CONSTANTS } from "../../Constants";

class Assassin extends Characters{
    constructor(name) {
        super(name,  GAME_CONSTANTS.CALSSES.ASSASSIN);
        Object.assign(this.stats, GAME_CONSTANTS.ASSASSIN);
        this.maxHP = this.stats.hp
    }

    backstab(target){
        const damage  = this.stats.attack * (1 + this.stats.criticalDamage / 100)
        return target.recaiceAttack(damage);
    }
}
