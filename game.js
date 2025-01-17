//Variables to store current game state and diagram
let state = 0;
let state_img = document.getElementById("state_image");
state_img.src = "state0.png";

//Variables to control audio
let muteButton = document.getElementById("muteButton");
let audio = document.getElementById("backgroundAudio");
audio.volume = 0.1;

//Objects to store passenger data
let wolf = {
    image: document.getElementById("wolf"), //image: The image element in game.html
    crossed: false                          //crossed: What side of the river the entity is on (false = left, true = right)
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

/**
 * Check which entity has been clicked and pass the correct object
 * to the appropriate method and checkCurrentState
 * 
 * @param {HTMLElement} image Image object that has been clicked
 */
function moveImage(image) {
    imageName = image.alt;
    if(imageName == "Wolf") {
        checkPositions(wolf);
        checkCurrentState("wolf");
    } else if(imageName == "Goat") {
        checkPositions(goat);
        checkCurrentState("goat");
    } else if (imageName == "Cabbage") {
        checkPositions(cabbage);
        checkCurrentState("cabbage");
    } else if (imageName == "Boat") {
        moveBoat();
        checkCurrentState("boat");
    }
    checkGameState();
}

/**
 * Move the boat image in game.html
 */
function moveBoat() {
    if(boat.crossed) {
        boat.image.style.left = "0px";
        boat.crossed = false;
    } else {
        boat.image.style.left = "300px";
        boat.crossed = true;
    }
}

/**
 * Check the position of the selected entity and move it to the correct side
 * 
 * @param {object} passenger The entity object that is being moved
 */
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

/**
 * Checks the current state to determine whether the game has ended or not
 */
function checkGameState() {
    if(state == 2 || state == 13) {
        localStorage.setItem("gameover", "WOLF ATE THE GOAT! GAME OVER!");
        window.setTimeout(function() {
            window.location.assign("gameover.html");
        }, 500);
    } else if(state == 3 || state == 7) {
        localStorage.setItem("gameover", "GOAT ATE THE CABBAGE! GAME OVER!");
        window.setTimeout(function() {
            window.location.assign("gameover.html");
        }, 500);
    } else if(state == 11) {
        window.setTimeout(function() {
            window.location.assign("gamewin.html");
        }, 500);
    }
}

/**
 * Checks the current game state and the entity that is being moved to determine
 * what the new state is and update the state diagram accordingly
 * 
 * @param {string} name The name of the entity that is being moved
 */
function checkCurrentState(name) {
    switch(state) {
        case 0:
            switch(name) {
                case "boat":
                    state = 1;
                    state_img.src = "state1.png";
                    break;
                case "cabbage":
                    state = 2;
                    state_img.src = "state2.png";
                    break;
                case "goat":
                    state = 4;
                    state_img.src = "state4.png";
                    break;                
                case "wolf":
                    state = 3;
                    state_img.src = "state3.png";
                    break;
                default: 
                    break;
            }
            break;
            
        case 1:
            switch(name) {
                case "boat":
                    state = 0;
                    state_img.src = "state0.png";
                    break;
                default: 
                    break;
            }
            break;
        case 4:
            switch(name) {
                case "boat":
                    state = 5;
                    state_img.src = "state5.png";
                    break;
                case "goat":
                    state = 0;
                    state_img.src = "state0.png";
                    break;        
                default: 
                    break;
            }
            break;
            
        case 5:
            switch(name) {
                case "boat":
                    state = 4;
                    state_img.src = "state4.png";
                    break;
                case "cabbage":
                    state = 6;
                    state_img.src = "state6.png";
                    break;               
                case "wolf":
                    state = 12;
                    state_img.src = "state12.png";
                    break;
                default: 
                    break;
            }
            break;
            
        case 6:
            switch(name) {
                case "boat":
                    state = 7;
                    state_img.src = "state7.png";
                    break;
                case "goat":
                    state = 8;
                    state_img.src = "state8.png";
                    break;  
                case "cabbage":
                    state = 5;
                    state_img.src = "state5.png";
                    break;       
                default: 
                    break;
            }
            break;
            
        case 8:
            switch(name) {
                case "boat":
                    state = 2;
                    state_img.src = "state2.png";
                    break;
                case "goat":
                    state = 6;
                    state_img.src = "state6.png";
                    break;                
                case "wolf":
                    state = 9;
                    state_img.src = "state9.png";
                    break;
                default: 
                    break;
            }
            break;

        case 9:
            switch(name) {
                case "boat":
                    state = 10;
                    state_img.src = "state10.png";
                    break;
                case "cabbage":
                    state = 14;
                    state_img.src = "state14.png";
                    break;           
                case "wolf":
                    state = 8;
                    state_img.src = "state8.png";
                    break;
                default: 
                    break;
            }
            break;
            
        case 10:
            switch(name) {
                case "boat":
                    state = 9;
                    state_img.src = "state9.png";
                    break;
                case "goat":
                    state = 11;
                    state_img.src = "state11.png";
                    break;           
                default: 
                    break;
            }
            break;            
            
        case 12:
            switch(name) {
                case "boat":
                    state = 13;
                    state_img.src = "state13.png";
                    break;
                case "goat":
                    state = 14;
                    state_img.src = "state14.png";
                    break;                 
                case "wolf":
                    state = 5;
                    state_img.src = "state5.png";
                    break;  
                default: 
                    break;
            }
            break;            
            
        case 14:
            switch(name) {
                case "boat":
                    state = 3;
                    state_img.src = "state3.png";
                    break;
                case "cabbage":
                    state = 9;
                    state_img.src = "state9.png";
                    break;
                case "goat":
                    state = 12;
                    state_img.src = "state12.png";
                    break;   
                default: 
                    break;
            }
            break;

        default:
            break;

    }
}

/**
 * Moves all entities back to the left side of the river and resets the state
 * back to S0
 */
function resetGame() {    
    wolf.crossed = false;
    wolf.image.style.left = "0px";

    goat.crossed = false;
    goat.image.style.left = "0px";

    cabbage.crossed = false;
    cabbage.image.style.left = "0px";
    
    boat.image.style.left = "0px";
    boat.crossed = false;

    state = 0;
    state_img.src = "state0.png";
}

/**
 * Mutes/unmutes the background music depending on the current state of the audio
 */
function muteAudio() {
    if(audio.muted == true) {
        audio.muted = false;
        muteButton.value = "Mute Sound";
    } else {
        audio.muted = true;
        muteButton.value = "Unmute Sound";
    }
}
