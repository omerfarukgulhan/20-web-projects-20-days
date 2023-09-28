const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const navItems = document.querySelectorAll(".nav-item");

// Event Listeners
eventListeners();

function eventListeners() {
  menuBars.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });
}

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
