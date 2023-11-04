
let previewList = document.querySelector('.preview-list');
let activePhoto = document.querySelector('.slider .active-photo');
let activeItem = previewList.querySelector('.active-item');

function slidersSwitchHandler(event) {
  event.preventDefault();
  if (!event.target.matches('a') || event.target.classList.contains('active-item')) {
    return;
  }

  let linkPhoto = event.target;
  activePhoto.src = linkPhoto.href;
  activeItem.classList.remove('active-item');
  activeItem = linkPhoto;
  activeItem.classList.add('active-item');
}

previewList.addEventListener('click', slidersSwitchHandler)