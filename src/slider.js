import Utility from "./utility";

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
   * Index of the previous picture that was played.
   */
  #previousPicIndex;

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
    this.#previousPicIndex = 0;
    
    this.#slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.#frame = document.createElement("figure");
    this.#addClassesToElement(this.#frame, "slider-img-frame");
    
    this.#controls = document.createElement("section");
    this.#addClassesToElement(this.#controls, "slider-controls");
    this.#addControlsToSlider();

    const img = document.createElement("img");
    const prevImg = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    const figCaptionTitle = document.createElement("p");
    const figCaptionText = document.createElement("p");
    
    this.#addClassesToElement(img, "image");
    this.#addClassesToElement(prevImg, "previous-image");
    this.#addClassesToElement(figCaptionTitle, "caption-title");
    this.#addClassesToElement(figCaptionText, "caption-text");
    
    figCaption.append(figCaptionTitle, figCaptionText);
    this.#frame.append(prevImg, img, figCaption);

    this.#slider.append(this.#frame, this.#controls);

    this.#loadImage(this.#currentPicIndex);
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
    const toggle = document.createElement("button");
    
    this.#addClassesToElement(prev, "slider-arrow", "left");
    this.#addClassesToElement(next, "slider-arrow", "right");
    this.#addClassesToElement(dotControls, "dot-controls");
    this.#addClassesToElement(toggle, "slider-toggle", "pause");

    this.#controls.append(prev, next, dotControls, toggle);
    this.#displayClickableDots();

    prev.addEventListener("click", () => this.#reverseSlider.call(this));
    next.addEventListener("click", () => this.#advanceSlider.call(this));
    toggle.addEventListener("click", () => this.#pauseSlideshow.call(this));
  }

  #pauseSlideshow() {
    this.#isPaused = !this.#isPaused;

    this.#controls.querySelector(".slider-toggle").classList.toggle("pause");
    this.#controls.querySelector(".slider-toggle").classList.toggle("play");
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
      this.#addClassesToElement(dot, "dot-index");
      
      dot.addEventListener("click", () => {
        if (index === this.#currentPicIndex) {
          return;
        }

        this.#previousPicIndex = this.#currentPicIndex;
        
        this.#loadImage.call(this, index);
        this.#currentPicIndex = index;
      });

      dotControls.append(dot);
    });
  }

  /**
   * Loads an image based on a given index, and then highlights the corresponding
   * dot.
   */
  #loadImage(index) {
    const img = this.#frame.querySelector(".image");
    const figCaptionTitle = this.#frame.querySelector(".caption-title");
    const figCaptionText = this.#frame.querySelector(".caption-text");
    const prevImg = this.#frame.querySelector(".previous-image");

    const picRef = this.#pictures[index];
    const prevPicRef = this.#pictures[this.#previousPicIndex];

    prevImg.src = prevPicRef.path;

    Utility.triggerAnimation(figCaptionText.parentNode, "disappear-appear");
    Utility.triggerAnimation(img, "disappear-appear");
    
    img.src = picRef.path;
    figCaptionTitle.textContent = picRef.title;
    figCaptionText.textContent = picRef.caption;

    const prevImgDot = this.#controls.querySelector(`.dot-index.current-dot`);
    if (prevImgDot !== null) {
      prevImgDot.classList.remove("current-dot");
    } 

    this.#controls
        .querySelector(`.dot-index:nth-child(${index+1})`)
        .classList.add("current-dot");
  }

  #advanceSlider() {
    this.#previousPicIndex = this.#currentPicIndex;

    if (this.#currentPicIndex < (this.#pictures.length - 1)) {
      this.#currentPicIndex += 1;
    } else {
      this.#currentPicIndex = 0;
    }
    
    this.#loadImage(this.#currentPicIndex);
  }

  #reverseSlider() {
    this.#previousPicIndex = this.#currentPicIndex;

    if (this.#currentPicIndex > 0) {
      this.#currentPicIndex -= 1;
    } else {
      this.#currentPicIndex = this.#pictures.length - 1;
    }

    console.log(this.#currentPicIndex);
    this.#loadImage(this.#currentPicIndex);
  }

  /**
   * Get a read-only Element reference to the slider. For appending to elements.
   * @returns {HTMLElement}
   */
  get slider() {
    return this.#slider;
  }

  playSlideshow() {
    let self = this;
  
    // play it once every X seconds thereafter.
    setInterval(() => {
      if (!self.#isPaused) {
        self.#advanceSlider();
      }
    }, this.#duration * 1000);
  }

  /**
   * Load and play the slideshow for a given slider.
   * @param {Slider} slider - A slider.
   */
  static playSlideshowOnWindowLoad(slider) {
    window.addEventListener("load", slider.playSlideshow.call(slider));
  }
}
