function initCarousel() {
  const slide = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');

  let positionSlide = 0;
  arrowLeft.style.display = 'none';

  function checkArrow() {
    if (positionSlide == 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
    if (positionSlide == (-3 * slide.offsetWidth)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

  arrowRight.addEventListener('click', () => {
    slide.style.transform = `translateX(${positionSlide -= slide.offsetWidth}px)`;
    checkArrow();
  });
  arrowLeft.addEventListener('click', () => {
    slide.style.transform = `translateX(${positionSlide += slide.offsetWidth}px)`;
    checkArrow();
  });
}
