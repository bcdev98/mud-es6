export const print = (...args) => console.log(args[0] + ": " + args[1]);
export const INPUT_OPTIONS = Symbol("input_option");

export var options = {
    _intro: "You can type",
    [INPUT_OPTIONS]: ["left","right", "up", "down", "help", "poke"],
    outputOptions() {
        this[INPUT_OPTIONS].forEach(f => 
                                addToOutput(this._intro + " " + f));
    }
}
