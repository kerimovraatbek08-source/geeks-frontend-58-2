const lightText = document.getElementById("light-text");
lightText.textContent = "HELLO";
const lightRed = document.getElementById("light-red");
const lightYellow = document.getElementById("light-yellow");
const lightGreen = document.getElementById("light-green");
function enableRed() {
  lightRed.style.backgroundColor = "red";
  lightText.textContent = "STOP ";
  lightText.style.color = "red";

  lightYellow.style.backgroundColor = "#777";
  lightGreen.style.backgroundColor = "#777";
}
function enableYellow() {
  lightYellow.style.backgroundColor = "yellow";
  lightText.textContent = "WAIT";
  lightText.style.color = "yellow";

  lightRed.style.backgroundColor = "#777";
  lightGreen.style.backgroundColor = "#777";
}

function enableGreen() {
  lightGreen.style.backgroundColor = "green";
  lightText.textContent = "GO";
  lightText.style.color = "green";

  lightRed.style.backgroundColor = "#777";
  lightYellow.style.backgroundColor = "#777";
}

lightRed.addEventListener("click", enableRed);
lightYellow.addEventListener("click", enableYellow);
lightGreen.onclick = enableGreen;
