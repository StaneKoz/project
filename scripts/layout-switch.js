
let layoutSwitcher = document.querySelector('.card-view-buttons');
let listBtn = layoutSwitcher.querySelector('.card-view-button-list');
let gridBtn = layoutSwitcher.querySelector('.card-view-button-grid');
let cards = document.querySelector('.cards');

function layoutSwitchHandler(event) {
  let targetElem = event.target;
  if (targetElem.tagName != 'BUTTON' || targetElem.classList.contains('active')) {
    return;
  }
  
  gridBtn.classList.toggle('active');
  listBtn.classList.toggle('active');
  cards.classList.toggle('list');
}

layoutSwitcher.addEventListener('click', layoutSwitchHandler);