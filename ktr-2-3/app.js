const winter = document.getElementById("winter");
const spring = document.getElementById("spring");
const summer = document.getElementById("summer");
const autumn = document.getElementById("autumn");
const monthsDiv = document.getElementById("months");

function showMonths(months, bgImage, color, textColor = "white") {
  monthsDiv.innerHTML = "";

  months.forEach((month) => {
    const btn = document.createElement("button");
    btn.classList.add("month-btn");
    btn.textContent = month;

    btn.style.background = color;
    btn.style.color = textColor;

    monthsDiv.appendChild(btn);
  });

  document.body.style.backgroundImage = `url(${bgImage})`;
}

winter.onclick = function () {
  showMonths(
    ["December", "January", "February"],
    "https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/winter-sunset-Marina%20Zezelina-SS.jpg?itok=tZUlalVX",
    "#5DADE2",
  );
};

spring.onclick = function () {
  showMonths(
    ["March", "April", "May"],
    "https://res.cloudinary.com/jerrick/image/upload/v1707401113/65c4df99f485f6001d076160.jpg",
    "#2ECC71",
  );
};

summer.onclick = function () {
  showMonths(
    ["June", "July", "August"],
    "https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/Professional_Development/Business_Features/AllianzSummerTravel_Hero/Where-Americans-Are-Traveling-This-Summer.jpg?tr=w-1008%2Ch-567%2Cfo-auto",
    "#F4D03F",
    "black",
  );
};

autumn.onclick = function () {
  showMonths(
    ["September", "October", "November"],
    "https://media.cnn.com/api/v1/images/stellar/prod/210316134817-03-wisdom-project-autumn.jpg?q=x_0,y_0,h_2250,w_3998,c_fill/h_833,w_1480",
    "#E67E22",
  );
};
