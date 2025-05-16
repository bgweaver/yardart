function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const expanded =
    navbar.querySelector(".navbar-toggler").getAttribute("aria-expanded") ===
    "true";

  // Ensure only one of the classes is added at a time
  if (expanded) {
    navbar.classList.add("navbar-toggler-active");
    navbar.classList.remove("navbar-sticky"); // Remove sticky class if toggler is active
  } else {
    navbar.classList.remove("navbar-toggler-active");
  }
}

function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.remove("navbar-toggler-active"); // Remove toggler-active class on scroll
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  userScroll();

  // Add event listener for navbar toggler button
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", toggleNavbar);
  }
});
