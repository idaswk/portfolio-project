const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxBtns = document.querySelectorAll(".lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");
let activeImage;

// Adding the class "active" to lightboxContainer
showLightBox = function () {
  lightboxContainer.classList.add("active");
};

// Removing the class "active" to lightboxContainer
hideLightBox = function () {
  lightboxContainer.classList.remove("active");
};

setActiveImage = function (image) {
  lightboxImage.src = image.dataset.imagesrc;
  activeImage = lightboxArray.indexOf(image);
};

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  activeImage === lastImage
    ? setActiveImage(lightboxArray[0])
    : setActiveImage(lightboxArray[activeImage].nextElementSibling);
};

const transitionSlidesRight = () => {
  lightboxBtnRight.focus();
  activeImage === 0
    ? setActiveImage(lightboxArray[lastImage])
    : setActiveImage(lightboxArray[activeImage].previousElementSibling);
};

const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left" ? transitionSlidesLeft() : transitionSlidesRight());
};

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

lightboxEnabled.forEach((image) => {
  image.addEventListener("click", () => {
    showLightBox();
    setActiveImage(image);
  });
});

lightboxContainer.addEventListener("click", () => {
  hideLightBox();
});

lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandler(e.currentTarget.id);
  });
});

// Adding eventListener to arrow presses for buttons left and right
window.addEventListener("keydown", (e) => {
  // checks to see if the lightboxContainer is active, if not the eventListener
  // will return/exit
  if (!lightboxContainer.classList.contains("active")) return;
  // checks if the left or right arrows on the keyboard are pressed
  if (e.key === "Escape") {
    hideLightBox();
  }
  if (e.key.includes("Left") || e.key.includes("Right")) {
    e.preventDefault();
    transitionSlideHandler(e.key.toLowerCase());
  }
});
