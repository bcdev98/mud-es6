import "babel-core/register";
import "babel-polyfill";


export class Encounter {
    constructor(introText="") {
        this.introText = introText;
    }
    whenEncounter() {
        return this.introText;
    }

    * poke() {
        yield "what's up!";
    }
}

export class Bear extends Encounter {
    constructor() {
        super("grr grow, you encoutered a Bear!");
    }

    * poke() {
        yield "Grr...";
        yield "Bear is aggressive";
        yield "Bear is attacking you! Watch out!";
    }
}

export class Angle extends Encounter {
    constructor() {
        super("Who, you encountered an Angle! This will give you strength and healing possibilities");
    }
}

export class Ghost extends Encounter {
    constructor() {
        super();
        this.introText = "Booh, you encountered a Ghost!";
    }
}

export function generate() {
    var number = Math.floor(Math.random() * (4-1)) + 1;

    if (number == 1) {
        return new Bear();
    }
    else if (number == 2) {
        return new Angle();
    }   
    else if (number == 3) {
        return new Ghost();
    }
    else if (number == 4) {
        return new Encounter();
    }
}