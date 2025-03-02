import { Characters } from "../Characters";
import { GAME_CONSTANTS } from "../../Constants";

class Hunter extends Characters{
    constructor(name) {
        super(name,  GAME_CONSTANTS.CALSSES.HUNTER);
        Object.assign(this.stats, GAME_CONSTANTS.HUNTER);
        this.maxHP = this.stats.hp
    }

    preciseShot(target){
        const damage = this.stats.attack * 1.5;
        target.stats.hp += damage;
        return damage;
    }
}
