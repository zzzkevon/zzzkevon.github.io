function makeTextBigger() {
    const textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyles() {
    const textArea = document.getElementById("userText");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            let words = sentences[i].trim().split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(". ");
}

window.onload = function () {
    document.getElementById("biggerButton").onclick = makeTextBigger;

    document.getElementById("fancyShmancy").onchange = applyFancyStyles;
    document.getElementById("boringBetty").onchange = applyFancyStyles;

    document.getElementById("mooButton").onclick = mooifyText;
};
