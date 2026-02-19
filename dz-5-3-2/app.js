const btnCreate = document.getElementById("btnCreate");
const btnHTML = document.getElementById("btnHTML");
const result = document.getElementById("result");

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateWithCreateElement() {
  result.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    div.textContent = getRandomNumber();

    result.appendChild(div);
  }
}

function generateWithInnerHTML() {
  let html = "";

  for (let i = 0; i < 4; i++) {
    html += `<div class="block">${getRandomNumber()}</div>`;
  }

  result.innerHTML = html;
}

btnCreate.addEventListener("click", generateWithCreateElement);
btnHTML.addEventListener("click", generateWithInnerHTML);
