document
  .querySelector(".mobile-trigger")
  .addEventListener("click", function () {
    document.querySelector(".links").classList.toggle("active");
  });

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

// document
//   .querySelector(".desktop-trigger")
//   .addEventListener("click", function () {
//     document.querySelector(".dropdown").classList.toggle("active");
//   });
