//Function scripts for images stored in the index.js as to not overcrowd index.html file
let wolfImage = document.getElementById("wolf");
wolfImage.style.position = "relative";
wolfImage.style.left = "0px";


let goatImage = document.getElementById("goat");
goatImage.style.position = "relative";
goatImage.style.left = "0px";

let cabbageImage = document.getElementById("cabbage");
cabbageImage.style.position = "relative";
cabbageImage.style.left = "0px";


function getImage(image) {
    alert(image.alt);
    moveImage(image.alt);
}

function moveImage(imageName) {
    //Take current image and its left offset, and add 20 pixels to move it right
    if(imageName == "Wolf") {
        wolfImage.style.left = (wolfImage.offsetLeft) + 20 + "px";
    } else if(imageName == "Goat") {
        goatImage.style.left = (goatImage.offsetLeft) + 20 + "px";
    } else if (imageName == "Cabbage") {
        cabbageImage.style.left = (cabbageImage.offsetLeft) + 20 + "px";
    }
}



