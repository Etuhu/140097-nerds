var link = document.querySelector(".writetous-btn");

var popup = document.querySelector(".writetous-modal");

var close = popup.querySelector(".close-btn");

var username = popup.querySelector("[name=username]");

var email = popup.querySelector("[name=email]");

var usertext = popup.querySelector("[name=usertext]");

var form = popup.querySelector("form");

var storage = localStorage.getItem("username");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("display-modal");
  if (storage) {
        username.value = storage;
        email.focus();
      } else {
        username.focus();
      }
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("display-modal");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !usertext.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин, электронный адрес и текст сообщения");
    } else {
      localStorage.setItem("username", username.value);
    }
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("display-modal")) {
          popup.classList.remove("display-modal");
          popup.classList.remove("modal-error");
      }
    }
  });
