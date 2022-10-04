const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

document.getElementById("next-button").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
document.getElementById("previous-button").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
