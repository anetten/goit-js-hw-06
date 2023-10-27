const fontSizeControl = document.querySelector("#font-size-control");
const Text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
});
