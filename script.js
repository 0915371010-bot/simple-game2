console.log("Script Started");
let currentSize = 50;
let timeLeft = 20;
//start the game

function start() {
    createSquare(50, "green");
    createSquare(60, "aqua");
    createSquare(70, "black");
    createSquare(80, "orange")
    console.log(Math.random() * 1000);
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innerText = timeLeft + "s";
    if(timeLeft <= 0) {
        alert("Game Over!");
    }
}

// creates a square
function createSquare(size, color) {
    //create an element (div)
    let square = document.createElement("div");

    // set some styles to make it a square
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "15px"
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // add it to the page
    document.body.appendChild(square);

    // Add click event
    square.addEventListener("click", handleClick);
}

// Generate a ramdom x coordinate
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

//Generate a random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Handle the player clicking the square
function handleClick(event) {
    let square = event.target;
    console.log(square.style.width);
    if(square.style.width == currentSize + "px"){
        console.log("first square");
        square.remove();
        currentSize = currentSize + 10;
    }
    
}