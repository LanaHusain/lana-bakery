const nav = document.querySelector("nav");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Sidebar
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".nav-list li a");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navItem.forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});
