const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";
const modeToggleButton = document.getElementById("modeToggleButton");
const modeToggleText = document.getElementById("modeToggleText");
const modeStatus = document.getElementById("modeStatus");

const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    );
    setButtonLabelAndStatus(currentSetting);
  } else {
    setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
  }
};

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
      break;
    case "light":
      currentSetting = "dark";
      break;
    case "dark":
      currentSetting = "light";
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};

modeToggleButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  applySetting(toggleSetting());
});

applySetting();
