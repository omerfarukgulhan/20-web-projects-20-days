const form = document.querySelector("#form");
const password1Element = document.querySelector("#password1");
const password2Element = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordMatch = false;

eventListeners();

function eventListeners() {
  form.addEventListener("submit", processFormData);
}

function changeMessage(messageColor, borderColor, messageText) {
  message.textContent = messageText;
  message.style.color = messageColor;
  messageContainer.style.borderColor = borderColor;
}

function processFormData(e) {
  e.preventDefault();
  validateForm();

  if (isValid && passwordMatch) {
    storeFormData();
  }
}

function validateForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    changeMessage("red", "red", "Please fill out all fields.");
    return;
  }

  if (password1Element.value === password2Element.value) {
    passwordMatch = true;
    password1Element.style.borderColor = "green";
    password2Element.style.borderColor = "green";
  } else {
    passwordMatch = false;
    changeMessage("red", "red", "Make sure passwords match.");
    password1Element.style.borderColor = "red";
    password2Element.style.borderColor = "red";
    return;
  }

  if (isValid && passwordMatch) {
    changeMessage("green", "green", "Successfully Registered!");
  } else {
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}
