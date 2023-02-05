/* --------------- */
/* QUERY SELECTORS */
/* --------------- */

// Query selectors for the images
const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
const lightboxArray = Array.from(lightboxEnabled);
const prevImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");

// Query selectors for the buttons
const lightboxBtns = document.querySelectorAll(".lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");

const slideshowBtn = document.querySelector(".slideshow-btn");
let playing = true;
// let slideInterval = setInterval(slideLeft, 3000);
let slideInterval, activeImage;

// let activeImage;

/* --------- */
/* FUNCTIONS */
/* --------- */

// Function that stops the interval if slideshow is set to pause
const pauseSlideshow = () => {
  playing = false;
  clearInterval(slideInterval);
};

// Function that sets an interval if slideshow is set to play
const playSlideshow = () => {
  playing = true;
  slideInterval = setInterval(slideRight, 3000);
};

// Function that resets slideInterval
const resetInterval = () => {
  clearInterval(slideInterval);
  playSlideshow();
};

// Function that adds the class "active" to lightboxContainer
const openLightbox = () => {
  lightboxContainer.classList.add("active");
  resetInterval();
};

// Function that removes the class "active" from lightboxContainer
const closeLightbox = () => {
  lightboxContainer.classList.remove("active");
  playing = true;
};

const setCurrentImage = (image) => {
  lightboxImage.src = image.dataset.imagesrc;
  activeImage = lightboxArray.indexOf(image);
};

const slideRight = () => {
  lightboxBtnRight.focus();
  activeImage === prevImage
    ? setCurrentImage(lightboxArray[0])
    : setCurrentImage(lightboxArray[activeImage].nextElementSibling);
};

const slideLeft = () => {
  lightboxBtnLeft.focus();
  activeImage === 0
    ? setCurrentImage(lightboxArray[prevImage])
    : setCurrentImage(lightboxArray[activeImage].previousElementSibling);
};

const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left") ? slideLeft() : slideRight();
};

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

lightboxEnabled.forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox();
    setCurrentImage(image);
  });
});

lightboxContainer.addEventListener("click", () => {
  closeLightbox();
});

slideshowBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
});

window.addEventListener("keydown", (e) => {
  // checks to see if the lightboxContainer is active, if not the eventListener
  // will return/exit
  if (!lightboxContainer.classList.contains("active")) return;
  // checks if the spacebar is pressed
  if (e.key === " ") {
    e.preventDefault();
    if (playing) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  }
});

lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandler(e.currentTarget.id);
    // Checks to see if the slideshow is set to play
    if (playing) {
      resetInterval();
    }
  });
});

// Adding eventListener to arrow presses for buttons left and right
window.addEventListener("keydown", (e) => {
  // checks to see if the lightboxContainer is active, if not the eventListener
  // will return/exit
  if (!lightboxContainer.classList.contains("active")) return;
  // checks if the left or right arrows on the keyboard are pressed
  if (e.key === "Escape") {
    closeLightbox();
  }
  if (e.key.includes("Left") || e.key.includes("Right")) {
    e.preventDefault();
    transitionSlideHandler(e.key.toLowerCase());
    resetInterval();
  }
});
