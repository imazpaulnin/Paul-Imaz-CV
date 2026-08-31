import { query } from "./core/dom.js";
import { createStore } from "./core/store.js";
import { createLanguageController } from "./features/language.js";
import { createModeController } from "./features/modes.js";
import { createCaseFilterController } from "./features/case-filter.js";
import { setupEntranceAnimations } from "./features/animations.js";

const elements = query();
const store = createStore({
  lang: "en",
  mode: "remote",
});

const languageController = createLanguageController(store, elements);
const modeController = createModeController(store, elements);
const caseFilterController = createCaseFilterController(elements);

function renderApp(state) {
  languageController.render(state.lang);
  modeController.render(state);
}

store.subscribe(renderApp);

renderApp(store.getState());
caseFilterController.render("all");
setupEntranceAnimations(elements);
