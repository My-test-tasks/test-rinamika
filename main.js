// Slider

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const sliderView = document.querySelector(".slider__view");
const slider = document.querySelector(".slider");
const card = document.querySelector(".card");

console.log(card.clientWidth);

let offset = [0, 708, 1376, 2044, 2712];
let offsetPosition = 0;

if (document.body.clientWidth < 700) {
  offset = [0, 320, 600, 900, 1200, 1500];
}

leftBtn.addEventListener("click", () => {
  if (offsetPosition < offset.length - 1) {
    offsetPosition++;
  }

  sliderView.style.transform = `translate(-${offset[offsetPosition]}px, 0)`;
});

rightBtn.addEventListener("click", () => {
  if (offsetPosition > 0) {
    offsetPosition--;
  }

  sliderView.style.transform = `translate(-${offset[offsetPosition]}px, 0)`;
});

// Call me

const callMeBtn = document.querySelector(".call-me");
const formInput = document.querySelector(".form__input > input");
const formTextarea = document.querySelector(".form__textarea > textarea");
const form = document.querySelector(".form");

callMeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    form.reset();
  } else {
    form.reportValidity();
  }
});

// Submit request

const requestBtns = document.querySelectorAll(".submit-request");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup-form");
const popupOkBtn = document.querySelector(".popup-ok");
const popupCloseBtn = document.querySelector(".popup-close");

requestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.showModal();
  });
});

popupOkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (popupForm.checkValidity()) {
    popupForm.reset();
    popup.close();
  } else {
    popupForm.reportValidity();
  }
});

popupCloseBtn.addEventListener("click", () => {
  popup.close();
});
