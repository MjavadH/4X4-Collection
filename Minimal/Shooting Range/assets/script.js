let background = document.getElementById("background");
let Crosshair = document.getElementById("Crosshair");
let hold = false;
let soundsrc = "assets/GunSound/Sound2.mp3"
document.addEventListener("click", Fire);
document.addEventListener("mousemove", Cursor);
document.addEventListener("keydown", Hold_Breath);
document.addEventListener("keyup", Hold_Breath);

function Hold_Breath(e) {
    if (e.shiftKey){
        hold = true;
        Crosshair.style.animationPlayState = "paused";
    }
    else{
        hold = false;
        Crosshair.style.animationPlayState = "running";
    }
}
function Cursor(e) {
    Crosshair.style.left = (e.clientX - (Crosshair.clientWidth / 2)) + "px";
    Crosshair.style.top = (e.clientY - (Crosshair.clientHeight / 2)) + "px";
}

function Fire(e) {
    let Traces = CreateTraces(e.clientX, e.clientY)
    background.appendChild(Traces);
    new Audio(soundsrc).play();
    setTimeout(() => {
        Traces.remove();
    }, 10000);
}

function CreateTraces(x, y) {
    let Traces = document.createElement("div");
    Traces.className = "Traces";
    if (hold){
        Traces.style.top = (y - 11) + "px";
        Traces.style.left = (x - 12) + "px";
    }
    else{
        Traces.style.top = (y + Random_Position(-30, 10)) + "px";
        Traces.style.left = (x + Random_Position(-30, 10)) + "px";
    }
    Traces.style.backgroundImage = "url(assets/Traces/Trace" + Random_Position(1, 5) + ".png)";
    return Traces
}

function Random_Position(min, max) {
    return Math.floor(Math.random() * (max - (min) + 1)) + (min);
}