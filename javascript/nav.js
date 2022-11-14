document.querySelector(".mobileTrigger").addEventListener("click", function () {
  document.querySelector(".links").classList.toggle("active");
});

document.querySelector(".desktopTrigger").addEventListener("click", function () {
  document.querySelector(".dropdown").classList.toggle("active");
});
