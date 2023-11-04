
let themeSwitcher = document.querySelector('.theme-switcher');
let darkThemeButton = themeSwitcher.querySelector('.theme-button-dark');
let lighThemeButton = themeSwitcher.querySelector('.theme-button-light');

function themeSwitchHandler(event) {
  var targetElem = event.target;
  if (targetElem.tagName != 'BUTTON' || targetElem.classList.contains('active')) {
    return;
  }

  darkThemeButton.classList.toggle('active');
  lighThemeButton.classList.toggle('active');
  page.classList.toggle('dark');
}

themeSwitcher.addEventListener('click', themeSwitchHandler);
