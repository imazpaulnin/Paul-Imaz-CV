export function createCaseFilterController(elements) {
  function render(filter) {
    elements.filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    elements.caseCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const matches = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !matches);
    });
  }

  elements.filterButtons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.filter));
  });

  return { render };
}
