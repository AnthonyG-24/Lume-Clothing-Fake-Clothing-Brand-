document.getElementById("search-icon").addEventListener("click", function () {
  const searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
  }
});

const hamburger = document.getElementById("hamburger");
const navMiddle = document.querySelector(".nav-middle");

hamburger.addEventListener("click", () => {
  navMiddle.classList.toggle("active");
});
