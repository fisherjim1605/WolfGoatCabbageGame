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

