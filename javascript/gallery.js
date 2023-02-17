/* --------------- */
/* QUERY SELECTORS */
/* --------------- */

/* 
  Query selectors for the images 
*/
const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
// Creating an array with all of the gallery images
const lightboxArray = Array.from(lightboxEnabled);
const prevImage = lightboxArray.length - 1;
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxContainer = document.querySelector(".lightbox-container");

/* 
  Query selectors for the buttons 
*/
const lightboxBtns = document.querySelectorAll(".lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");
const autoPlayBtn = document.querySelector(".play-pause");
const slideshowBtn = document.querySelector(".slideshow");

/* 
  Other variables
*/
// Variable with boolean data type which allows to toggle between
// play and pause
let playing = true;

// Empty variables which will have data assigned when specific
// functions are called
let slideInterval, activeImage;

/* --------- */
/* FUNCTIONS */
/* --------- */

// Function that sets an interval if slideshow is set to play
const playSlideshow = () => {
  playing = true;
  // interval is set to 3s (3000ms)
  slideInterval = setInterval(slideRight, 3000);
};

// Function that stops the interval if slideshow is set to pause
const pauseSlideshow = () => {
  playing = false;
  // interval is cleared
  clearInterval(slideInterval);
};

// Function that toggles between "play" and "pause" icons
const togglePlayPause = () => {
  autoPlayBtn.classList.toggle("fa-play");
  autoPlayBtn.classList.toggle("fa-pause");
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
  togglePlayPause();
};

// Function that sets the clicked image as the lightbox image
const setCurrentImage = (image) => {
  lightboxImage.src = image.dataset.imagesrc;
  // Getting the index of the clicked image
  activeImage = lightboxArray.indexOf(image);
};

// Function that lets the next image in the array be shown
const slideRight = () => {
  lightboxBtnRight.focus();
  activeImage === prevImage
    ? setCurrentImage(lightboxArray[0])
    : setCurrentImage(lightboxArray[activeImage].nextElementSibling);
};

// Function that lets the previous image in the array be shown
const slideLeft = () => {
  lightboxBtnLeft.focus();
  activeImage === 0
    ? setCurrentImage(lightboxArray[prevImage])
    : setCurrentImage(lightboxArray[activeImage].previousElementSibling);
};

// Function that can change the image to next or previous, depending
// on keypad clicks
const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left") ? slideLeft() : slideRight();
};

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

// EventListener for clicks on the images
lightboxEnabled.forEach((image) => {
  image.addEventListener("click", () => {
    // if an image is clicked,
    // the lightbox will get the class "active" and the image will be
    openLightbox();
    // the clicked image will be set as the current image
    setCurrentImage(image);
  });
});

// EventListener that will close the lightbox if it is active and is clicked
lightboxContainer.addEventListener("click", closeLightbox);

// EventListener that checks for click-events on the slideshow button
slideshowBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  // When the button is clicked, the boolean value of the variable
  // "playing" will be toggled between true and false
  togglePlayPause();
  if (playing) {
    // if set to "true", slideshow will pause
    pauseSlideshow();
  } else {
    // if set to "false", slideshow will play
    playSlideshow();
  }
});

// Adding eventlisteners to keypresses
window.addEventListener("keydown", (e) => {
  // checks to see if the lightboxContainer is active
  // - if not, the eventListener will return/exit
  if (!lightboxContainer.classList.contains("active")) return;
  // checks if the spacebar is pressed
  if (e.key === " ") {
    e.preventDefault();
    // When spacebar is pressed, the boolean value of the variable
    // "playing" will be toggled between true and false
    togglePlayPause();
    if (playing) {
      // if set to "true", slideshow will pause
      pauseSlideshow();
    } else {
      // if set to "false", slideshow will play
      playSlideshow();
    }
  }

  // checks if the escape key is pressed
  if (e.key === "Escape") {
    // if the escape key is pressed, the lightbox will close
    closeLightbox();
  }

  // depending on the arrow key pressed, the image will either
  // change to previous or next (left -> prev, right -> next)
  if (e.key.includes("Left") || e.key.includes("Right")) {
    e.preventDefault();
    transitionSlideHandler(e.key.toLowerCase());
    if (playing) {
      // when image is changed, the interval will be reset if playing = true
      resetInterval();
    }
  }
});

lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandler(e.currentTarget.id);
    // Checks to see if the slideshow is set to play
    if (playing) {
      // if playing = true, the interval will be reset
      resetInterval();
    }
  });
});
