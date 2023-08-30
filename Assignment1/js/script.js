//hamburger action in the navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// up arrow action
const upArrow = document.querySelector(".uparrow__icon");

upArrow.addEventListener("click", function (event) {
  event.preventDefault();

  // Scroll to the top of the page with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
