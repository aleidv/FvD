const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");
console.log(nextButton);

let scrollPosition = 0;

prevButton.addEventListener("click", () => {
  scrollPosition -= slides.offsetWidth;
  slides.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
});

nextButton.addEventListener("click", () => {
  scrollPosition += slides.offsetWidth;
  slides.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
});