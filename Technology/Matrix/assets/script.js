window.onload = Load;
window.onresize = getWindowSize;

const canvasTag = document.getElementById("matrix_");

function getWindowSize() {
    canvasTag.height = window.innerHeight;
    canvasTag.width = window.innerWidth;
}

function Load() {
    getWindowSize();

    const letter_size = 16; //letters size
    const columnsNumber = canvasTag.width / letter_size; //Get the number of columns

    let letters = [];
    for (let i = 0; i < columnsNumber; i++) {
        letters[i] = 1;
    }
    let context = canvasTag.getContext('2d');//canvas

    function canvasCreator() {
        context.fillStyle = "rgba(0,0,0,0.08)";//canvas background
        context.fillRect(0, 0, canvasTag.width, canvasTag.height);

        context.fillStyle = "#0f0";//letters color
        context.font = letter_size + "px arial";//letters font
        let text;
        let allText;
        for (let i = 0; i < letters.length; i++) {
            text = Create_Word();
            allText = text.split("");
            context.fillText(allText, i * letter_size, letters[i] * letter_size);

            if (letters[i] * letter_size > canvasTag.height && Math.random() > 0.975) {
                letters[i] = 0;
            }
            letters[i]++;
        }
    }

    let numberText

    function Create_Word() {
        numberText = Math.floor((Math.random() * 94) + 33);//Create char from code
        return String.fromCharCode(parseInt(numberText));//return char code
    }

    setInterval(canvasCreator, 80);//Timer

}