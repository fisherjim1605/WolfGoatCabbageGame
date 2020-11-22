//Objects to store passenger data
let wolf = {
    image: document.getElementById("wolf"),
    crossed: false
};
wolf.image.style.position = "relative";
wolf.image.style.left = "0px";

let goat = {
    image: document.getElementById("goat"),
    crossed: false
};
goat.image.style.position = "relative";
goat.image.style.left = "0px";

let cabbage = {
    image: document.getElementById("cabbage"),
    crossed: false
};
cabbage.image.style.position = "relative";
cabbage.image.style.left = "0px";

let boat = {
    image: document.getElementById("boat"),
    crossed: false
};
boat.image.style.position = "relative";
boat.image.style.left = "0px";

function getImage(image) {
    moveImage(image.alt);
}

function moveImage(imageName) {
    if(imageName == "Wolf") {
        checkPositions(wolf);
    } else if(imageName == "Goat") {
        checkPositions(goat);
    } else if (imageName == "Cabbage") {
        checkPositions(cabbage);
    } else if (imageName == "Boat") {
        moveBoat();
    }
    checkGameState();
}

function moveBoat() {
    if(boat.crossed) {
        boat.image.style.left = "0px";
        boat.crossed = false;
    } else {
        boat.image.style.left = "300px";
        boat.crossed = true;
    }
}

function checkPositions(passenger) {
    if(passenger.crossed == boat.crossed) { //Check if boat is same side
        moveBoat();
        if(passenger.crossed) {
            passenger.image.style.left = "0px";
            passenger.crossed = false;
        } else {
            passenger.image.style.left = "300px";
            passenger.crossed = true;
        }
    }
}

function checkGameState() {
    //CABBAGE, BOAT | WOLF, GOAT
    if(wolf.crossed && goat.crossed && (!cabbage.crossed) && (!boat.crossed)) {
        alert("Failure: Wolf ate the Goat");
        resetGame();
        
    //WOLF, GOAT | CABBAGE, BOAT 
    } else if((!wolf.crossed) && (!goat.crossed) && cabbage.crossed && boat.crossed) {
       alert("Failure: Wolf ate the Goat");
       resetGame();

    //WOLF, BOAT | GOAT, CABBAGE
    } else if((!wolf.crossed) && goat.crossed && cabbage.crossed && (!boat.crossed)) {
        alert("Failure: Goat ate the Cabbage");
        resetGame();

    //GOAT, CABBAGE | WOLF, BOAT
    } else if(wolf.crossed && (!goat.crossed) && (!cabbage.crossed) && boat.crossed) {
        alert("Failure: Goat ate the Cabbage");
        resetGame();
    //PUZZLE SOLVED
    } else if(wolf.crossed && goat.crossed && cabbage.crossed && boat.crossed) {
        alert("Success!");
        resetGame();
    }
}


function resetGame() {    
    wolf.crossed = false;
    wolf.image.style.left = "0px";

    goat.crossed = false;
    goat.image.style.left = "0px";

    cabbage.crossed = false;
    cabbage.image.style.left = "0px";
    
    boat.image.style.left = "0px";
    boat.crossed = false;

    alert("Game Reset");
}

