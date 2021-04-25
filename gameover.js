//Retrieve the cause of the game over and update the heading accordingly
var heading = document.getElementById("gameOverHeading");
heading.innerHTML = localStorage.getItem("gameover").bold();