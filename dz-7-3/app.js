class User {
  constructor(login, password, username) {
    this.login = login;
    this.password = password;
    this.username = username;
  }
}

const users = [
  new User("admin", "1234", "Администратор"),
  new User("student", "1111", "Студент"),
  new User("raatbek@gmail.com", "5555", "Раатбек"),
];

document.getElementById("loginBtn").addEventListener("click", function () {
  const loginValue = document.getElementById("login").value.trim();
  const passwordValue = document.getElementById("password").value.trim();

  if (!loginValue || !passwordValue) {
    Swal.fire({
      icon: "error",
      title: "Ошибка",
      text: "Заполните все поля!",
    });
    return;
  }

  const foundUser = users.find(
    (user) => user.login === loginValue && user.password === passwordValue,
  );

  if (foundUser) {
    Swal.fire({
      icon: "success",
      title: "Успешный вход!",
      text: `Добро пожаловать, ${foundUser.username}!`,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Ошибка!",
      text: "Неверный логин или пароль!",
    });
  }
});
