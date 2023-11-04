
let moreButtons = document.querySelectorAll('.more');

function clickHandler(event) {
  let aritcle = event.target.closest('.blog-article');
  event.target.textContent = aritcle.classList.toggle('short') ? 'Читать дальше' : 'Скрыть';
}

for (let button of moreButtons) {
  button.addEventListener('click', clickHandler);
}