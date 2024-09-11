const nav = document.querySelector("nav");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.setAttribute("class", "scrolled");
  } else {
    nav.removeAttribute("class");
  }
});
