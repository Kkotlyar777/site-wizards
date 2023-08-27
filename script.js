'use strict';

// Sticky nav
const stickyNav = document.querySelector('.sticky-nav-panel');
const services = document.querySelector('.services');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    stickyNav.classList.add('sticky');
    services.style.top = '40rem';
  } else {
    stickyNav.classList.remove('sticky');
    services.style.top = '33rem';
  }
});

// плавный скролл якорных ссылок

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// ссылки на сайты(проекты)
const airBaloonsSite = document.getElementById('hot-air-baloons');
const computerClubSite = document.getElementById('computer-club');
const simplyBankSite = document.getElementById('simply-bank');
const pythonConfSite = document.getElementById('python-conf');

airBaloonsSite.addEventListener('click', () => {
  window.open('https://kkotlyar777.github.io/hot-air-baloons/', '_blank');
});

computerClubSite.addEventListener('click', () => {
  window.open('https://kkotlyar777.github.io/game-store/', '_blank');
});

simplyBankSite.addEventListener('click', () => {
  window.open('https://kkotlyar777.github.io/Simply-bank/', '_blank');
});

pythonConfSite.addEventListener('click', () => {
  window.open('https://kkotlyar777.github.io/Python-Conf/', '_blank');
});

// Слайдер
const slides = document.querySelectorAll('.slide');
const rightBtn = document.getElementById('right-arrow');
const leftBtn = document.getElementById('left-arrow');

const slider = document.querySelector('.reviews__div');

let currentSlide = 0;
const slidesNumber = slides.length;

const moveToSlide = function (slide) {
  slides.forEach(
    (s, index) =>
      (s.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
};

moveToSlide(0);

rightBtn.addEventListener('click', function () {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveToSlide(currentSlide);
});

leftBtn.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }

  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
});

// ссылки на сайты(новости)
const firstSiteImg = document.getElementById('firstSiteImg');
const firstSiteText = document.getElementById('firstSiteText');
const secondSiteImg = document.getElementById('secondSiteImg');
const secondSiteText = document.getElementById('secondSiteText');
const thirdSiteImg = document.getElementById('thirdSiteImg');
const thirdSiteText = document.getElementById('thirdSiteText');

let firstSiteOpen = () =>
  window.open(
    ' https://journal.tinkoff.ru/guide/zachem-biznesu-sayt/',
    '_blank'
  );
let secondSiteOpen = () =>
  window.open(
    'https://www.unisender.com/ru/glossary/chto-takoe-landing-page/#anchor-4',
    '_blank'
  );
let thirdSiteOpen = () =>
  window.open(
    'https://vc.ru/flood/714921-istoriya-saytov-kakoy-put-proshli-sayty-za-40-let',
    '_blank'
  );

firstSiteImg.addEventListener('click', () => {
  firstSiteOpen();
});

firstSiteText.addEventListener('click', () => {
  firstSiteOpen();
});

secondSiteImg.addEventListener('click', () => {
  secondSiteOpen();
});

secondSiteText.addEventListener('click', () => {
  secondSiteOpen();
});

thirdSiteImg.addEventListener('click', () => {
  thirdSiteOpen();
});

thirdSiteText.addEventListener('click', () => {
  thirdSiteOpen();
});

// модальное окно
let buttons = document.querySelectorAll(".toggle-button");
let modal = document.querySelector(".modal");

[].forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    modal.classList.toggle("off");
  });
});