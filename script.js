console.log("Script Started");

//start the game

function start() {
    createSquare(50);
    createSquare(80);
    createSquare(90);
    createSquare(110)
    console.log(Math.random() * 1000);
}

// creates a square
function createSquare(size) {
    //create an element (div)
    let square = document.createElement("div");

    // set some styles to make it a square
    square.style.background = "aqua";
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "15px"
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // add it to the page
    document.body.appendChild(square);
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