// Api key imported from other keys.js file
// Unsplash api
const count = 10;
const apiKey = unsplashApiKey;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Html elements
const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

getPhotos();

window.addEventListener("scroll", endOfPage);

// Get photos from api
async function getPhotos() {
  loader.hidden = false;
  disableScroll();
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    alert(error);
  }
}

// Create html elements
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Function for setting attirbutes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    enableScroll();
  }
}

// Load more photos at bottom
function endOfPage() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
}

// Disable when loading
function disableScroll() {
  // Get the current page scroll position
  scrollTop = document.documentElement.scrollTop;
  (scrollLeft = document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
