const swiperPress = new Swiper('.swiper-press', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button_type_next',
    prevEl: '.swiper__button_type_prev',
  },
});


const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.popup_opened');

const popupOpenBtn = document.querySelector('.button_type_open');
const popupCloseBtn = document.querySelector('.popup__button_type_close');

addEventListener

// OPEN/CLOSE POPUP

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupOpenBtn.addEventListener('click', () => {
  openPopup(popup);
});

popupCloseBtn.addEventListener('click', () => {
  closePopup(popup);
});

const subscribeButton = document.querySelector('.subscribe__button');
const subscribeForm = document.querySelector('.subscribe__form');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  subscribeButton.textContent = 'готово';
});

