import {Environment} from './environment.js';
import {options, print} from './additions.js';

const defaultLine = "Start your journey now!";
const BR = "<br />";

var environment = new Environment("Forest -");
var treasures = new WeakMap();
var tresCoords = new Set();

function main() {
    let enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();

    var coordinate1 = {x:2, y:2};
    tresCoords.add(coordinate1);
    treasures.set(coordinate1, {name: "treasure chest", value: 100});

    var coordinate2 = {x:2, y:0};
    tresCoords.add(coordinate2);
    treasures.set(coordinate2, {name: "medaillon", value: 10});

}

function findTreasure() {
    let findCoords;

    for (let coords of tresCoords) {
        if (coords.x == x && coords.y == y) {
            findCoords = coords;
        }
    }

    if (findCoords) {
        var {name, value} = treasures.get(findCoords);

        if (value) {
            addToOutput(`you found  ${name} (${value})`);
        }
    }
}

var x = 0, y = 0;

function navigate(stepX, stepY) {
    [x, y] = [x+stepX, y+stepY];

    let coordinates = document.querySelector("#coordinates");
    //coordinates.innerHTML = x + ", " + y;
    coordinates.innerHTML = `${x}, ${y}`;

    findTreasure();

}

function addToOutput(newLine=defaultLine) {
    let output = document.querySelector("#output")
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    let commands = document.querySelector("#commands")

    if (commands.value == "help") {
        options.outputOptions();
    }
    else if (commands.value == "right"){
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    }
    else if (commands.value == "left") {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    }
    else if (commands.value == "up") {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    }
    else if (commands.value == "down") {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    }
    else if (commands.value == "poke") {
        addToOutput(environment.poke());
    }
    else {
        addToOutput(commands.value);
    }
}

main();

print("log", "hello");
console.log(Object.getOwnPropertySymbols(options));