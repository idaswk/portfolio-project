// Selecting the Burger Menu and its individual bars
let navToggle = document.querySelector(".nav-toggle");
let bars = document.querySelectorAll(".bar");

// Creating a function to the Burger Menu to toggle between adding and removing class of "active" to the links
navToggle.addEventListener("click", function () {
  document.querySelector(".links").classList.toggle("active");
});

// Creating function to add and remove class of "x" to the Burger Menu
function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
}

// Adding the created function as a click event to the Burger Menu
navToggle.addEventListener("click", toggleHamburger);

// Select Mobile Portfolio Content
const portfolioButton = document.querySelector(".portfolio-button");
const mobilePortfolioContent = document.querySelector(
  ".portfolio-sub-content-hidden"
);

function showMobilePortfolioContent() {
  mobilePortfolioContent.classList.toggle("portfolio-sub-content-visible");
}

portfolioButton.addEventListener("click", showMobilePortfolioContent);

// Select Mobile Contact Button
const contactButton = document.querySelector(".contact-button");
const mobileContactContent = document.querySelector(
  ".contact-sub-content-hidden"
);

function showMobileContactContent() {
  mobileContactContent.classList.toggle("contact-sub-content-visible");
}

contactButton.addEventListener("click", showMobileContactContent);
