
let fontSwitcher = document.querySelector('.fonts');
let sansSerifBtn = fontSwitcher.querySelector('.font-button-sans-serif');
let serifBtn = fontSwitcher.querySelector('.font-button-serif');
let page = document.querySelector('.page');

function fontSwitchHandler(event) {
  let targetElem = event.target;
  console.log('click')
  if (targetElem.tagName != 'BUTTON' || targetElem.classList.contains('active')) {
    return;
  }

  sansSerifBtn.classList.toggle('active');
  serifBtn.classList.toggle('active');
  page.classList.toggle('serif');
}

fontSwitcher.addEventListener('click', fontSwitchHandler);