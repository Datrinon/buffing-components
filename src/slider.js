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
   * Create a slider.
   * 
   * @param {{path: string, title: string, caption : string}[]} pictures 
   * @param {number} duration 
   */
  constructor(pictures, duration) {
    this.#slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.#frame = document.createElement("figure");
    this.#addClassesToElement(this.#frame, "slider-img-frame");

    this.#pictures = pictures;
    this.#duration = duration;
    this.#isPaused = false;
    this.#currentPicIndex = 0;

    this.#controls = document.createElement("section");
    this.#addClassesToElement(this.#controls, "slider-controls");
    
    this.#slider.append(this.#frame, this.#controls);
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

  set pictures(pictures){
    this.#pictures = pictures;
  }

  set duration(seconds) {
    this.#duration = seconds;
  }

  /**
   * Play the slideshow.
   * 
   */
  playSlideshow() {
    const self = this;
    const loadImage = () => {
      const picRef = self.#pictures[self.#currentPicIndex];
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      const figCaptionTitle = document.createElement("p");
      const figCaptionText = document.createElement("p");
      
      self.#addClassesToElement(img, "image");
      self.#addClassesToElement(figCaptionTitle, "caption-title");
      self.#addClassesToElement(figCaptionText, "caption-text");

      img.src = picRef.path;
      figCaptionTitle.textContent = picRef.title;
      figCaptionText.textContent = picRef.caption;

      figCaption.append(figCaptionTitle, figCaptionText);
      self.#frame.append(img, figCaption);

      if (self.#currentPicIndex < (self.#pictures.length - 1)) {
        self.#currentPicIndex += 1;
      } else {
        self.#currentPicIndex = 0;
      }
    };
    setInterval(() => {
      if (!self.#isPaused) {
        loadImage();
      }
    }, this.#duration * 1000);
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
  static loadSlideshow(slider) {
    window.addEventListener("load", slider.playSlideshow);
  }
}

/**
 * TODO. Lazy load images using "loading="lazy"".
 * 1. Create a .js file with exports to images, use project-restaurant's
 * function to get the paths dynamically.
 */