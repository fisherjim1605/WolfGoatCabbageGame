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
    //alert(image.alt);
    moveImage(image.alt);
}

function moveImage(imageName) {
    //Take current image and its left offset, and add 20 pixels to move it right
    if(imageName == "Wolf") {
        checkPositions(wolf);
        /*
        if(wolfCrossed) {
            wolfImage.style.left = "0px";
            wolfCrossed = false;
        } else {
            wolfImage.style.left = "300px";
            wolfCrossed = true;
        }
        */
    } else if(imageName == "Goat") {
        checkPositions(goat);
        /*
        if(goatCrossed) {
            goatImage.style.left = "0px";
            goatCrossed = false;
        } else {
            goatImage.style.left = "300px";
            goatCrossed = true;
        }
        */
    } else if (imageName == "Cabbage") {
        checkPositions(cabbage);
        /*
        if(cabbageCrossed) {
            cabbageImage.style.left = "0px";
            cabbageCrossed = false;
        } else {
            cabbageImage.style.left = "300px";
            cabbageCrossed = true;
        }
        */
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
    console.log("WOLF CROSSED: " + wolf.crossed);
    console.log("GOAT CROSSED: " + goat.crossed);
    console.log("CABBAGE CROSSED: " + cabbage.crossed);
    console.log("BOAT CROSSED: " + boat.crossed);

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

