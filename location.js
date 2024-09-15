let currentIndex = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.style.transform = "rotateY(0deg)";
    } else if (i < index) {
      page.style.transform = "rotateY(-180deg)";
    } else {
      page.style.transform = "rotateY(180deg)";
    }
  });
}

function nextPage() {
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    showPage(currentIndex);
  }
}

function previousPage() {
  if (currentIndex > 0) {
    currentIndex--;
    showPage(currentIndex);
  }
}

// Swipe detection
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  function (event) {
    touchStartX = event.changedTouches[0].screenX;
  },
  false
);

document.addEventListener(
  "touchend",
  function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchEndX < touchStartX) {
    nextPage();
  } else if (touchEndX > touchStartX) {
    previousPage();
  }
}
