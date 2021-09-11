export default class Slider {
  
  /**
   * The container in which possesses the entire slider apparatus.
   */
  #slider;
  /**
   * The container which presents the image.
   * @type {HTMLElement}
   */
  #frame;
  /**
   * The pictures which will be used in the slider.
   * @type {{path: string, title: string, caption : string}[]}
   */
  #pictures;
  /**
   * The duration to show each picture.
   * @type {number}
   */
  #duration;
  /**
   * True if the slideshow is currently paused.
   * @type {boolean}
   */
  #isPaused;
  
  /**
   * A reference to the controls container.
   */
  #controls;

  /**
   * Index of the current picture the slideshow is on.
   * @type {number}
   */
  #currentPicIndex;

  /**
   * Create a slider. There are three components that will be generated. 1) the
   * container, 2) the frame where pictures are displayed, and 3) the controls.
   * 
   * @param {{path: string, title: string, caption : string}[]} pictures 
   * @param {number} duration 
   */
  constructor(pictures, duration) {
    this.#pictures = pictures;
    this.#duration = duration;
    this.#isPaused = false;
    this.#currentPicIndex = 0;
    
    this.#slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.#frame = document.createElement("figure");
    this.#addClassesToElement(this.#frame, "slider-img-frame");
    
    this.#controls = document.createElement("section");
    this.#addClassesToElement(this.#controls, "slider-controls");
    this.#addControlsToSlider();

    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    const figCaptionTitle = document.createElement("p");
    const figCaptionText = document.createElement("p");
    
    this.#addClassesToElement(img, "image");
    this.#addClassesToElement(figCaptionTitle, "caption-title");
    this.#addClassesToElement(figCaptionText, "caption-text");
    
    figCaption.append(figCaptionTitle, figCaptionText);
    this.#frame.append(img, figCaption);

    this.#slider.append(this.#frame, this.#controls);
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  #addClassesToElement(elem, defaultClass, ...classNames) {
    classNames.push(defaultClass);
    elem.classList.add(...classNames);
  }

  set pictures(pictures){
    this.#pictures = pictures;
    // TODO
    // Test and make sure this
    this.#displayClickableDots();
  }

  set duration(seconds) {
    this.#duration = seconds;
  }

  #addControlsToSlider() {
    const prev = document.createElement("i");
    const next = document.createElement("i");
    const dotControls = document.createElement("div");
    const pause = document.createElement("button");
    
    this.#addClassesToElement(prev, "slider-arrow", "left");
    this.#addClassesToElement(next, "slider-arrow", "right");
    this.#addClassesToElement(dotControls, "dot-controls");
    this.#addClassesToElement(pause, "slider-pause");

    this.#controls.append(prev, next, dotControls, pause);
    this.#displayClickableDots();

  }

  /**
   * Displays clickable dots on the control section of the slider.
   */
  #displayClickableDots() {

    const dotControls = this.#controls.querySelector(".dot-controls");

    // remove any existing dots. needed if pictures gets changed later.
    while(dotControls.firstChild){
      dotControls.removeChild(dotControls.firstChild);
    }

    this.#pictures.forEach((pic, index) => {
      const dot = document.createElement("button");
      //TODO
      // Dot has an event listener for click to transition the current slide pic.
      dotControls.append(dot);
    });
  }

  /**
   * Play the slideshow.
   * 
   */
  playSlideshow() {
    const self = this;

    const img = self.#frame.querySelector(".image");
    const figCaptionTitle = self.#frame.querySelector(".caption-title");
    const figCaptionText = self.#frame.querySelector(".caption-text");

    const loadImage = () => {
      const picRef = self.#pictures[self.#currentPicIndex];

      img.src = picRef.path;
      figCaptionTitle.textContent = picRef.title;
      figCaptionText.textContent = picRef.caption;

      if (self.#currentPicIndex < (self.#pictures.length - 1)) {
        self.#currentPicIndex += 1;
      } else {
        self.#currentPicIndex = 0;
      }
    };

    // play the slideshow once.
    loadImage();

    // // play it once every X seconds thereafter.
    // setInterval(() => {
    //   if (!self.#isPaused) {
    //     loadImage();
    //   }
    // }, this.#duration * 1000);

  }

  /**
   * Get a read-only Element reference to the slider. For appending to elements.
   * @returns {HTMLElement}
   */
  get slider() {
    return this.#slider;
  }

  /**
   * Load and play the slideshow for a given slider.
   * @param {Slider} slider - A slider.
   */
  static playSlideshowOnWindowLoad(slider) {
    window.addEventListener("load", slider.playSlideshow.call(slider));
  }
}

/**
 * TODO.
 * 0. Lazy load images using "loading="lazy"".
 * 1. Create a .js file with exports to images, use project-restaurant's
 * function to get the paths dynamically.
 */