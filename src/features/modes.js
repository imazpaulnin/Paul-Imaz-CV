import { modes } from "../data/modes.js";
import { renderModePanel } from "../components/mode-panel.js";

export function createModeController(store, elements) {
  function render({ lang, mode }) {
    renderModePanel(elements, modes[lang][mode]);

    elements.modeButtons.forEach((button) => {
      const isActive = button.dataset.mode === mode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      store.setState({ mode: button.dataset.mode });
    });
  });

  return { render };
}
