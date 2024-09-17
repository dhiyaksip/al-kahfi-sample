//toggle class active untuk hamburger menu//
const navbarNav = document.querySelector(".navbar-nav");

//ktika hamburger menu di klick
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active serch
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//click di luar elemen
const hm = document.querySelector("#hamberger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
