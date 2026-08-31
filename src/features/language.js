import { copy } from "../data/copy.js";
import { renderTranslations } from "../components/i18n.js";

export function createLanguageController(store, elements) {
  function syncCvLinks(lang) {
    if (lang === "es") {
      elements.primaryCvButton.href = "references/CV Paul Imaz Nin - ES.pdf";
      elements.alternateCvButton.href = "references/CV Paul Imaz Nin - EN.pdf";
      elements.alternateCvButton.textContent = copy.es.downloadEnglish;
      return;
    }

    elements.primaryCvButton.href = "references/CV Paul Imaz Nin - EN.pdf";
    elements.alternateCvButton.href = "references/CV Paul Imaz Nin - ES.pdf";
    elements.alternateCvButton.textContent = copy.en.downloadSpanish;
  }

  function render(lang) {
    document.documentElement.lang = lang;
    renderTranslations(elements.root, copy[lang]);
    syncCvLinks(lang);

    elements.langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      store.setState({ lang: button.dataset.lang });
    });
  });

  return { render };
}
