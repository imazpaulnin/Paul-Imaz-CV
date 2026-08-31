export function query(selectors) {
  return {
    root: document,
    animatedElements: document.querySelectorAll(".section, .hero-copy, .hero-panel"),
    langButtons: document.querySelectorAll(".lang-button"),
    modeButtons: document.querySelectorAll(".mode-pill"),
    filterButtons: document.querySelectorAll(".filter-button"),
    caseCards: document.querySelectorAll(".case-card"),
    modeLabel: document.getElementById("mode-label"),
    modeHeading: document.getElementById("mode-heading"),
    modeDescription: document.getElementById("mode-description"),
    modeList: document.getElementById("mode-list"),
    primaryCvButton: document.querySelector(".cta-row .button-secondary"),
    alternateCvButton: document.querySelector("[data-role='alternate-cv-link']"),
    ...selectors,
  };
}
