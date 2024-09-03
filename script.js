let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Инициализация первого слайда
showSlide(currentSlide);
const slidesTwo = document.querySelector('.slides-two');
const slideTwo = document.querySelectorAll('.slide-two');
let currentIndexTwo = 0;

document.querySelector('.next-two').addEventListener('click', () => {
  if (currentIndexTwo < slideTwo.length - 1) {
    currentIndexTwo++;
  } else {
    currentIndexTwo = 0;
  }
  updateSlidePositionTwo();
});

document.querySelector('.prev-two').addEventListener('click', () => {
  if (currentIndexTwo > 0) {
    currentIndexTwo--;
  } else {
    currentIndexTwo = slideTwo.length - 1;
  }
  updateSlidePositionTwo();
});

function updateSlidePositionTwo() {
  slidesTwo.style.transform = `translateX(-${currentIndexTwo * 100}%)`;
}