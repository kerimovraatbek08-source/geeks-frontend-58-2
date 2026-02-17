function generateRandomDigit() {
  return Math.floor(Math.random() * 10);
}

function generatePassword() {
  const password = [];
  for (let i = 0; i < 4; i++) {
    password.push(generateRandomDigit());
  }
  return password;
}

function createDigitBlock(digit) {
  const block = document.createElement("div");
  block.className = "digit-block";
  block.textContent = digit;
  return block;
}

function displayPassword(password) {
  const container = document.getElementById("passwordContainer");

  container.innerHTML = "";

  for (let i = 0; i < password.length; i++) {
    const digitBlock = createDigitBlock(password[i]);
    container.appendChild(digitBlock);
  }
}

function refreshPassword() {
  const newPassword = generatePassword();
  displayPassword(newPassword);
}

document.addEventListener("DOMContentLoaded", function () {
  const initialPassword = generatePassword();
  displayPassword(initialPassword);

  document
    .getElementById("refreshBtn")
    .addEventListener("click", refreshPassword);
});
