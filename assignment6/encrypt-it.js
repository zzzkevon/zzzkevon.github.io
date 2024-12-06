/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   * 
   */
  
  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);
    document.getElementById("reset").addEventListener("click", handleReset);
  }


  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncrypt() {
    console.log("Button clicked!");
    const inputText = document.getElementById("input-text").value;
    const result = shiftCipher(inputText);
    document.getElementById("result").innerText = result;
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").innerText = "";
  }

  function shiftCipher(text) {
    let result = "";
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'a' && char <= 'z') {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
            result += shiftedChar;
        } else {
            result += char; // Non-alphabetic characters remain unchanged
        }
    }
    return result;
}

})();
