export default class Slider {
  
  /**
   * The container in which possesses the entire slider apparatus.
   */
  slider;
  /**
   * The container which presents the image.
   * @type {HTMLElement}
   */
  frame;
  /**
   * The pictures which will be used in the slider.
   * @type {{path: string, title: string, caption : string}[]}
   */
  pictures;
  /**
   * The duration to show each picture.
   * @type {number}
   */
  slideDuration;
  /**
   * True if the slideshow is currently paused.
   * @type {boolean}
   */
  isPaused;
  
  /**
   * A reference to the controls container.
   */
  controls;

  constructor() {
    this.slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.frame = document.createElement("figure");
    this.#addClassesToElement(this.frame, "slider-img-frame");

    this.pictures = [];
    this.slideDuration = 1;
    this.isPaused = false;

    this.controls = document.createElement("section");
    this.#addClassesToElement(this.controls, "slider-controls");
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  #addClassesToElement(elem, defaultClass, classNames = []) {
    classNames.push(defaultClass);
    elem.classList.add(classNames);
  }
}