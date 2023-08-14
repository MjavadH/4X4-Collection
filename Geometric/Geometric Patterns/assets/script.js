(async function () {
  document.querySelector(".worklet-canvas")
      .style.setProperty("--fluid-pattern-seed", Math.random() * 10000);
  // if No Paint API support
  if (CSS["paintWorklet"] === undefined) {
    // Let the user know they can't experiment with the pattern
    document.querySelector(".prompt p").innerHTML =
        `Ah... the CSS Paint API is not supported in this browser — try Chrome or Edge!`;
  } else {
    // Source: https://github.com/georgedoescode/fluid-pattern-worklet/blob/main/worklet.js
    await CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/fluid-pattern-worklet");
  }
})();