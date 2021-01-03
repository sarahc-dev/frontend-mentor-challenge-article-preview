const shareArrows = document.querySelectorAll(".arrow");
const widthQuery = window.matchMedia("(min-width: 900px)");

const authorSection = document.querySelector(".author-section");
const activeState = document.querySelector(".active-state");

shareArrows.forEach((shareArrow) => {
  shareArrow.addEventListener("click", (event) => {
    if (widthQuery.matches === false) {
      authorSection.classList.toggle("active");
      activeState.classList.toggle("active");
    } else {
      activeState.classList.toggle("active");
    }
  });
});
