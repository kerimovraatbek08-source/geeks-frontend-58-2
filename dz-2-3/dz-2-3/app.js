function compare() {
  let compareOne = Number(document.getElementById("compare-one").value);
  let compareTwo = Number(document.getElementById("compare-two").value);
  let sign = document.getElementById("sign");

  if (compareOne > compareTwo) {
    sign.innerHTML = ">";
  } else if (compareOne < compareTwo) {
    sign.innerHTML = "<";
  } else {
    sign.innerHTML = "=";
  }
}
