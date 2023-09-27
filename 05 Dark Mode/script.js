const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const asd = "light";

console.log("asd", asd);
toggleSwitch.addEventListener("change", switchTheme);

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(LIGHT_THEME);
  }
}

function toggleDarkLightMode(theme) {
  nav.style.backgroundColor = theme === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = theme === "dark" ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
  theme === "dark" ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  theme === "dark" ? imageMode(theme) : imageMode(theme);
}

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
