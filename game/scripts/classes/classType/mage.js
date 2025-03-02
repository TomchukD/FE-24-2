import { Characters } from "../Characters";
import { GAME_CONSTANTS } from "../../Constants";

class Mage extends Characters{
    constructor(name) {
        super(name,  GAME_CONSTANTS.CALSSES.MAGE);
        Object.assign(this.stats, GAME_CONSTANTS.MAGE);
        this.maxHP = this.stats.hp
    }

    fireBall(target){
        const damage = this.stats.attack * 2;
        this.isStunning = true;
        return this.recaiceAttack(damage);
    }
}
