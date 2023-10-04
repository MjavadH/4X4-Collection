// Determines the number of snow particles
let snowflakes = 200;

// Creates an empty array to store snow particles
let flakes = [];

// A function to create a snowflake with a random profile
function createSnowflake() {
    // Pick a random element from the chars array for the snowflake shape
    let chars = ["❄", "❉", "❋", "❅", "❆", "⁕"];
    let char = chars[Math.floor(Math.random() * chars.length)];

    // Generate a random number between min and max
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Pick a random color for the snowflake
    let colors = ["#ffffff", "#d9d9d9", "#bfbfbf", "#e6e8fa", "#f5f5f5"];
    let color = colors[Math.floor(Math.random() * colors.length)];

    // Choosing a random speed for the snowflake to move
    let speed = random(2, 9);

    // Pick a random horizontal position for the snowflake to start
    let x = random(0, window.innerWidth);

    // Picking a random vertical position to start the snowflake
    let y = random(-100, -10);

    // Choose a random size between 10 and 30 pixels for the snowflake
    let size = random(10, 30);

    // Pick a random opacity for the snowflake
    let opacity = Math.random();

    // Returns an object with snowflake properties
    return {
        char: char,
        color: color,
        speed: speed,
        x: x,
        y: y,
        size: size,
        number: opacity
    };
}

// A loop to fill the flakes array with snowflakes
function FillFlakes() {
    for (let i = 0; i < snowflakes; i++) {
        flakes.push(createSnowflake());
    }
}

// Get the canvas element
const canvas = document.getElementById("canvas");

// Setting the dimensions of the canvas to the dimensions of the browser window
function SetSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Get context object from canvas to draw on it
let ctx = canvas.getContext("2d");

// The draw function that draws each frame
function draw() {

    // Clearing the canvas before drawing a new frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // A loop over all the snowflakes in the flakes array
    for (let i = 0; i < flakes.length; i++) {

        // Get the current snowflake
        let flake = flakes[i];

        // Setting the color and size and opacity of the pen to draw a snowflake
        ctx.fillStyle = flake.color;
        ctx.font = flake.size + "px Arial";
        ctx.opacity = flake.opacity;

        // Draw a snowflake using the fillText method
        ctx.fillText(flake.char, flake.x, flake.y);

        // The vertical position of the snow particle increases with the amount of its speed
        flake.y += flake.speed;

        // If the snowflake reaches the bottom of the screen, we move its position to the top of the screen
        if (flake.y > canvas.height) {
            flake.y = -10;
        }
    }

    // Request a new frame using the requestAnimationFrame method
    requestAnimationFrame(draw);
}

// Call the draw function to start the animation
window.addEventListener("resize", function () {
    SetSize();
    flakes = [];
    FillFlakes();
})
FillFlakes();
SetSize();
draw();
