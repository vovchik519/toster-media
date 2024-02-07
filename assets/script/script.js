const burgerBtn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');
const header = document.getElementById('header');

burgerBtn.addEventListener('click', () => {
  let expanded = burgerBtn.getAttribute('aria-expanded') === 'true' || false;
  let assertive = expanded ? 'off' : 'assertive';
  burgerBtn.setAttribute('aria-expanded', !expanded);
  menu.setAttribute('aria-hidden', String(expanded));
  header.setAttribute('aria-live', assertive);

  document.body.style.overflow = expanded ? 'auto' : 'hidden';
});

var swiper = new Swiper(".slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
var shiping = new Swiper(".shipping-slider", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const endDate = new Date("February 9, 2024 00:00:00").getTime();

const timerInterval = setInterval(function () {
  const now = new Date().getTime();

  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (days !== 0) {
    document.getElementById("timer").innerHTML = days + "d " + hours + ":"
      + minutes + ":" + seconds;
  } else {
    document.getElementById("timer").innerHTML = hours + ":"
      + minutes + ":" + seconds;
  }
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Время истекло!";
  }
}, 1000);