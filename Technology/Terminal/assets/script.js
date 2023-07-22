const BLACKLISTED_KEY_CODES = [38];
//List of commands
const COMMANDS = {
    "help":
        'The page you want to visit does not exist, or it may have been deleted, or the wrong address was entered. To see the commands, enter the word <span class=\"red\"> commands</span>',
    "exit":
        "",
    "report":
        "<span class='green'>This page report has been successfully sent to support.</span>",
    "commands":
        "List of commands: <span class=\"red\"> help</span> , <span class=\"red\"> report</span> ,<span class=\"red\"> exit</span>\n",
    "cls":
        ""
};

let userInput
let terminalOutput
let Terminal
let Keyboard
const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("code");
    Terminal = document.getElementById("Terminal");
    Keyboard = document.getElementById("Keyboard");
    Keyboard.focus();
};

//When the user hits the enter button
const execute = function executeCommand(input) {
    let output;

    if (input.length === 0) {
        return;
    }
    //If what the user entered is not in the command list
    if (!COMMANDS.hasOwnProperty(input)) {
        output = `<p>The command entered is not correct</p>`;
    }
    //If user enter the word cls
    else if (input === "cls") {
        terminalOutput.innerHTML = "";
        return;
    }
    //If the user enters one of the words 'exit' and 'close'
    else if (input === "close" || input === "exit") {
        document.location.href = "../index.html" // The link that the user enters after sending the exit
        return;
    }
    //If the user enters the word report
    else if (input === "report") {
        terminalOutput.innerHTML = `${
            terminalOutput.innerHTML
        }<p>${COMMANDS[input]}</p>`;

        return;
    }
    //Otherwise, the text of the command will be displayed as output
    else {
        output = COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
    }<p>${output}</p>`;
    Terminal.scrollTop = terminalOutput.scrollHeight;
};
//when user click any key
const key = function keyEvent(e) {
    const input = userInput.innerHTML;
    Keyboard.focus()
    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
        return;
    }

    userInput.innerHTML = input + e.key;
};
//if user click backspace
const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};

//When the user clicks on a control buttons
const BTNS = function MenuBTN(t) {
    switch (t) {
        case "max":
            if (document.getElementById("body").className !== "max") {
                document.getElementById("body").className = "max";
            } else {
                document.getElementById("body").className = "";
            }
            break;
        case "min":
            if (document.getElementById("body").className === "max") {
                document.getElementById("body").className = "max min";
            } else if (document.getElementById("body").className !== "max") {
                document.getElementById("body").className = "min";
            }
            break;
        case "re":
            if (document.getElementById("body").className === "max min") {
                document.getElementById("body").className = "max";
            }
            if (document.getElementById("body").className === "min") {
                document.getElementById("body").className = "";
            }
            break;
    }
};
document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
