import * as encounter from "./encounter.js";

export class Environment {
    constructor(name) {
        this.name = name;
        this.encounter = encounter.generate();
    }

    stumbleUpon() {
        var interaction = this.name + " You just stuble upon ..." + this.encounter.whenEncounter();
        this.encounter = encounter.generate();
        this.pokeEncounter = this.encounter.poke();

        return interaction;
    }

    poke() {
        var pokeReturn = this.pokeEncounter.next();

        if (!pokeReturn.done) {
            return pokeReturn.value;
        }
    }
}
