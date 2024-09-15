function scrollNavbar(direction) {
  const container = document.querySelector(".navbar");
  const scrollAmount = 100; // Amount to scroll with each click

  container.scrollLeft += direction * scrollAmount;
}
