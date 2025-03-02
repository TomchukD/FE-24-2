import { Characters } from "../Characters";
import { GAME_CONSTANTS } from "../../Constants";

class Healer extends Characters{
    constructor(name) {
        super(name,  GAME_CONSTANTS.CALSSES.HEALER);
        Object.assign(this.stats, GAME_CONSTANTS.HEALER);
        this.maxHP = this.stats.hp
    }

   heal(){
        const heal = this.stats.attack * 1.5;
        const oldHP = this.stats.hp;
        this.stats.hp = Math.min(this.maxHP, this.stats.hp + heal);
        return this.stats.hp - oldHP;
   }
}
