//Variables to store current game state and diagram
let state = 0;
let state_img = document.getElementById("state_image");
state_img.src = "state0.png";

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

/*
function getImage(image) {
    moveImage(image.alt);
}
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
    if(state == 3 || state == 13) {
        localStorage.setItem("gameover", "WOLF ATE THE GOAT! GAME OVER!");
        window.location.assign("gameover.html");
    } else if(state == 2 || state == 7) {
        localStorage.setItem("gameover", "GOAT ATE THE CABBAGE! GAME OVER!");
        window.location.assign("gameover.html");
    } else if(state == 11) {
        window.location.assign("gamewin.html");
    }
}

function checkCurrentState(name) {
    console.log(name);
    switch(state) {
        case 0:
            switch(name) {
                case "boat":
                    state = 1;
                    state_img.src = "state1.png";
                    break;
                case "cabbage":
                    state = 3;
                    state_img.src = "state3.png";
                    break;
                case "goat":
                    state = 4;
                    state_img.src = "state4.png";
                    break;                
                case "wolf":
                    state = 2;
                    state_img.src = "state2.png";
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
                    state = 4;
                    state_img.src = "state4.png";
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

    //alert("Game Reset");
}

