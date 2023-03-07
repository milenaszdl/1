const button = document.getElementById("button");
const modal = document.getElementById("mymodal");
const show = document.getElementById("showpass");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const inputemail = document.getElementById("email");
const error = document.getElementById("error");

button.addEventListener("click", openmodal);
function openmodal(event) {
  modal.style.display = "flex";
}

show.addEventListener("pointerdown", showpass);
show.addEventListener("pointerup", hidepass);

function showpass(event) {
  pass.setAttribute("type", "text");
}

function hidepass(event) {
  pass.setAttribute("type", "password");
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", (event) => {
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  console.table({ email, password });
  event.preventDefault();
  modal.style.display = "none";
});

inputemail.addEventListener("blur", (event) => {
  if (inputemail.validity.typeMismatch) {
    error.innerText = "Такой почты не существует";
    inputemail.setCustomValidity("это не почта. введите свою эл почту пож :)");
    inputemail.style.backgroundColor = "#ff5545";
  } else {
    error.innerText = "";
    inputemail.setCustomValidity("");
  }
});

pass.addEventListener("blur", (event) => {
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    error.innerText = "Пароль слишком короткий";
    pass.setCustomValidity("придумайте пароль подлиннее (минимум 6 символов");
    pass.style.backgroundColor = "#ff5545";
  } else {
    error.innerText = "";
    pass.setCustomValidity("");
    pass.style.backgroundColor = "#ffffff";
  }
});
