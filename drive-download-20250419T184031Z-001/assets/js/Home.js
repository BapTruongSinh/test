const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const slidesList = document.querySelectorAll('.inner-list');

function updateSlide(slides, currentSlide) {
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function autoSlide(slides, currentSlide, totalSlides, intervalTime, prevBtn, nextBtn) {
  setInterval(() => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlide(slides, currentSlide);
    updateNavigation(currentSlide, totalSlides, prevBtn, nextBtn);
  }, intervalTime);
}

function updateNavigation(currentSlide, totalSlides, prevBtn, nextBtn) {
  if (currentSlide === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (currentSlide === totalSlides - 1) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}

prevBtns.forEach((prevBtn, index) => {
  const nextBtn = nextBtns[index];
  const slides = slidesList[index];
  let currentSlide = 0;
  const totalSlides = slides.querySelectorAll('.slide').length;

  function updateNavigationForManual() {
    updateNavigation(currentSlide, totalSlides, prevBtn, nextBtn);
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
    }
    updateSlide(slides, currentSlide);
    updateNavigationForManual();
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    }
    updateSlide(slides, currentSlide);
    updateNavigationForManual();
  });

  updateNavigationForManual();

  if (index === 0) {
    setTimeout(() => {
      autoSlide(slides, currentSlide, totalSlides, 5000, prevBtn, nextBtn);
    }, 0);
  } else if (index === 2) {
    setTimeout(() => {
      autoSlide(slides, currentSlide, totalSlides, 4500, prevBtn, nextBtn);
    }, 1000);
  } else if (index === 1) {
    setTimeout(() => {
      autoSlide(slides, currentSlide, totalSlides, 4000, prevBtn, nextBtn);
    }, 2000);
  }
});
