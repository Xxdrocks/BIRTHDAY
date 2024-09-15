const slider = document.querySelector(".dalemkotak");
const dots = document.querySelectorAll(".bulet");

slider.addEventListener("scroll", () => {
  const slideIndex = Math.round(slider.scrollLeft / slider.clientWidth);
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === slideIndex ? "#717171" : "#bbb";
  });
});
