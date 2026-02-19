function task1() {
  const arr = [100, 150, 200, 250, 300, 350];
  document.getElementById("r1").textContent = arr.map((x) => x * 89);
}

function task2() {
  const g = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
  document.getElementById("r2").textContent = g.map((x) =>
    x == 5 ? "A" : x == 4 ? "B" : "C",
  );
}

function task3() {
  const p = [
    "🇺🇸4155552671",
    "🇺🇸2125558392",
    "🇺🇸3055551299",
    "🇩🇪0301234567",
    "🇩🇪0897654321",
    "🇩🇪0409876543",
    "🇰🇬312123456",
    "🇰🇬551987654",
    "🇰🇬770456789",
    "🇷🇺4951234567",
  ];

  document.getElementById("r3").textContent = p.map((x) => {
    if (x.startsWith("🇺🇸")) return "+1" + x.slice(2);
    if (x.startsWith("🇩🇪")) return "+49" + x.slice(2);
    if (x.startsWith("🇰🇬")) return "+996" + x.slice(2);
    if (x.startsWith("🇷🇺")) return "+7" + x.slice(2);
  });
}

function task4() {
  const n = [
    "0700 123 456",
    "0770 234 567",
    "0550 345 678",
    "0551 456 789",
    "0555 567 890",
    "0705 678 901",
    "0707 789 012",
    "0755 890 123",
    "0500 901 234",
    "0505 012 345",
  ];

  document.getElementById("r4").textContent = n.filter((x) => x[2] == "5");
}

function task5() {
  const c = [
    "01 KG 123 ABC",
    "02 KG 456 DEF",
    "03 KG 789 GHI",
    "01 KG 321 JKL",
    "05 KG 654 MNO",
    "06 KG 987 PQR",
    "07 KG 111 STU",
    "01 KG 222 VWX",
    "09 KG 333 YZA",
    "01 KG 444 BCD",
  ];

  document.getElementById("r5").textContent = c.filter((x) =>
    x.startsWith("01"),
  );
}

function task6() {
  const p = [8, 10, 7, 10, 8, 9, 4, 10];
  document.getElementById("r6").textContent = p.reduce((a, b) => a + b, 0);
}

function task7() {
  const v = [1, 0, 1, "online", "online", 1, 0];
  document.getElementById("r7").textContent = v.reduce(
    (s, x) => s + (x === "online" ? 1 : x),
    0,
  );
}
