// ---------------
// QUERY SELECTORS
// ---------------
// Selecting the Burger Menu and its individual bars
const navToggle = document.querySelector(".nav-toggle");
const bars = document.querySelectorAll(".bar");

// Select Mobile Portfolio Button & Content
const portfolioButton = document.querySelector(".portfolio-button");
const mobilePortfolioContent = document.querySelector(
  ".portfolio-sub-content-hidden"
);

// Select Mobile About Button & Content
const aboutButton = document.querySelector(".about-button");
const mobileAboutContent = document.querySelector(".about-sub-content-hidden");

// ---------
// FUNCTIONS
// ---------

// Creating a function to the Burger Menu to toggle between adding and removing class of "active" to the links
function toggleNavigation() {
  document.querySelector(".links").classList.toggle("active");
  const body = document.querySelector("body");
  // body.classList.toggle("no-scroll");
}

// Creating function to add and remove class of "x" to the Burger Menu
function toggleHamburger() {
  bars.forEach((bar) => bar.classList.toggle("x"));
}

// Creating a function that toggles chevron between up and down
function toggleChevron(className) {
  const chevron = document.querySelector(`.${className}`);
  chevron.classList.toggle("fa-chevron-down");
  chevron.classList.toggle("fa-chevron-up");
}

// Creating a function that toggles the portfolio dropdown
function showMobilePortfolioContent() {
  mobilePortfolioContent.classList.toggle("portfolio-sub-content-visible");
  toggleChevron("portfolio-button");
}

// Creating a function that toggles the contact dropdown
function showMobileAboutContent() {
  mobileAboutContent.classList.toggle("about-sub-content-visible");
  toggleChevron("about-button");
}

// ---------------
// EVENT LISTENERS
// ---------------

navToggle.addEventListener("click", toggleHamburger);
navToggle.addEventListener("click", toggleNavigation);
aboutButton.addEventListener("click", showMobileAboutContent);
portfolioButton.addEventListener("click", showMobilePortfolioContent);
