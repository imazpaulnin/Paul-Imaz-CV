export function setupEntranceAnimations(elements) {
  elements.animatedElements.forEach((element) => {
    element.setAttribute("data-animate", "");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  elements.animatedElements.forEach((element) => observer.observe(element));
}
