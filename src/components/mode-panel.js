export function renderModePanel(elements, modeData) {
  elements.modeLabel.textContent = modeData.label;
  elements.modeHeading.textContent = modeData.heading;
  elements.modeDescription.textContent = modeData.description;
  elements.modeList.replaceChildren(
    ...modeData.items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
}
