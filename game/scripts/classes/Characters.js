import { GAME_CONSTANTS } from "../Constants.js";

export class Characters{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.stats = {
            hp: 0,
            attack: 0,
            defense: 0,
            dodge: 0,
            criticalDamage: 0,
            speed: 0
        }
        this.maxHP = 0;
        this.points = GAME_CONSTANTS.MAX_POINT
    }
    recaiceAttack(damage){
        const reducedDamage = Math.max(1, damage - this.stats.defense);
        this.stats.hp  = Math.max(0, this.stats.hp - reducedDamage );
        return reducedDamage;
    }
}
