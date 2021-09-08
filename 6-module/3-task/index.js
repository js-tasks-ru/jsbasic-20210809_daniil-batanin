import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let slidesString = '';
    let route = `<div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">`;
    for (let slide of slides) {
      slidesString += `<div class="carousel__slide" data-id="penang-shrimp">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
    }
    this.elem = createElement(route + slidesString + '</div></div>');

    // Настройка стрелок и перемещения
    const arrowRight = this.elem.children[0];
    const arrowLeft = this.elem.children[1];
    const slide = this.elem.children[2];
    const buttonAdd = [];
    console.log(this.elem.children[2].children[0]);
    for (let i = 0; i < slides.length; i++) {
      console.log(this.elem.children[2].children[0]);
      buttonAdd[i] = this.elem.children[2].children[i].children[1].children[2];
      buttonAdd[i].addEventListener("click", function() {
        let productAdd = new CustomEvent("product-add", {
          detail: slides[i].id,
          bubbles: true
        });
        buttonAdd[i].dispatchEvent(productAdd);
      });
    }
    
    let positionSlide = 0;
    arrowLeft.style.display = 'none';

    function checkArrow() {
      if (positionSlide == 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }
      if (positionSlide == ((-slides.length + 1) * slide.offsetWidth)) {
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

}