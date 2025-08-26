document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(initializeCarousel);
});

function initializeCarousel(carousel) {
  const viewport = carousel.querySelector(".viewport");
  const slides = Array.from(viewport.children);
  const dotsNav = carousel.querySelector(".dots");

  //Generate dotts
  if(slides.length <= 1) return;
  
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Go to slide ${i + 1}`);
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => {
      viewport.scrollTo({
        left: viewport.clientWidth * i,
        behavior: "smooth",
      });
    });
    dotsNav.appendChild(btn);
  });

  const dots = Array.from(dotsNav.children);

  //Scroll
  viewport.addEventListener(
    "scroll",
    () => {
      const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    const index = dots.findIndex(dot => dot.classList.contains("active"));
    viewport.scrollTo({ left: viewport.clientWidth * index });
  });
}