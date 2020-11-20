//Canvas scripts for canvas stored in the index.js as to not overcrowd index.html file
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var wolfImage = document.getElementById("wolf");
var goatImage = document.getElementById("goat");
var cabbageImage = document.getElementById("cabbage");

context.drawImage(wolfImage, 10, 10);
context.drawImage(goatImage, 10, 10);
context.drawImage(cabbageImage, 10, 10);

function getImage(image) {
    alert(image.alt);
}

/*
context.beginPath();
context.rect(20, 40, 50, 50);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();

let Boat = class Boat {
    constructor() {
        this.passenger = 'EMPTY';
    }

    set passenger(passenger) {
        this._passenger = passenger;
    }

    get passenger() {
        return this._passenger
    }
    get isEmpty() {
        if (this._passenger == 'EMPTY') {
            return true;
        } else {
            return false;
        }
    }
}

let boat = new Boat();
let passenger = window.prompt("Who is boarding the boat?");
boat.passenger = passenger;

alert(boat.passenger);
alert(boat.isEmpty);


function myKeyPress(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        alert('UP');
        // up arrow
    }
    else if (e.keyCode == '40') {
        alert('DOWN');
        // down arrow
    }
    else if (e.keyCode == '37') {
        alert('LEFT');
       // left arrow
    }
    else if (e.keyCode == '39') {
        alert('RIGHT');
       // right arrow
    }
}
*/

