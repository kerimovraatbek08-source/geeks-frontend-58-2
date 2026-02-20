document.getElementById("calculateBtn").addEventListener("click", function () {
  const brithDateValue = document.getElementById("birthDate").value;
  if (!brithDateValue) {
    document.getElementById("result").innerText = "Выберите дату";
    return;
  }
  const birthDate = new Date(brithDateValue);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  document.getElementById("result").innerText =
    `Ваш возраст: ${years} лет ${months} месяцев ${days} дней`;
});
