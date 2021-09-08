/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuBar)
/* harmony export */ });
/**
 * Represents a MenuBar. Contains operations for adding elements to the MenuBar.
 * First, add elements to it using the various add*() methods. Then, use
 * getMenuBar() to get the element reference, which you can use that to append to 
 * a parent of your choice.
 */
class MenuBar {
  
  /**
   * The singleton instance of MenuBar, since only one MenuBar should ever exist on a webpage.
   */
  static #instance;
  /**
   * The menu element.
   * @type {HTMLElement}
   */
  menu;
  /**
   * An array containing all the clickable elements on the menu.
   * @type {HTMLElement[]}
   */
  #clickables;

  constructor(className) {
    if (MenuBar.#instance !== undefined) {
      return MenuBar.#instance;
    } 
    MenuBar.#instance = this;

    this.menu = document.createElement("header");
    this.menu.classList.add(className);

    this.#clickables = [];
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string[]} classNames - The classnames to give the element.
   * @param {string} defaultClass - The classname that said element should always have.
   * */ 
  #addClassesToElement(elem, classNames, defaultClass) {
    classNames.push(defaultClass);
    elem.classList.add(classNames);
  }

  /**
   * Create and add a link to the menu.
   * 
   * @param {string} name - The name to be displayed for the link.
   * @param {string} href - The path the link should point to.
   * @param {string[]} className - The class names the link should possess. By
   * default, it obtains the class name 'menu-bar-clickable'.
   */
  addLink(name, href, ...classNames) {
    const link = document.createElement("a");
    
    link.textContent = name;
    link.setAttribute("href", href);
    this.#addClassesToElement(link, classNames, "menubar-link-clickable");

    this.#clickables.push(link);
  }

  /**
   * Create and add a text logo to the menu. Useful for a company logo.
   * 
   * @param {string} text - Accompanying text to display with the icon.
   * @param {string} icon - Filepath representing an icon. Null if you don't need an icon.
   * @param {string[]} classNames - Optional class names the link should possess. By
   * default, it obtains the class name 'menu-bar-clickable'. 
   */
  addLogo(text, icon=null, ...classNames){
    const logo = document.createElement("div");
    const textLogo = document.createElement("h1");
    this.#addClassesToElement(logo, classNames, "site-logo");

    if (icon !== null) {
      const iconElem = document.createElement("img");
      iconElem.setAttribute("src", icon);
      console.log(icon);
      logo.append(iconElem);
    }

    textLogo.textContent = text;

    logo.append(textLogo);

    this.#clickables.push(logo);
  }

  /**
   * Create a dropdown menu based on a given array of links.
   * 
   * @param {string} name - The name of the dropdown menu.
   * @param { {"name" : "href"}[] } links - An array of name:href object pairs.
   * @param {string[]} className - Optional class names the link should possess. By
   * default, it obtains the class name 'menu-bar-clickable'.
   */
  addDropdown(name, links, ...classNames) {
    const dropDownContainer = document.createElement("div");
    // Three components to a dropdown, the label, the navlinks, and the arrow.
    const dropDownLabel = document.createElement("h2");
    const dropDownLinks = document.createElement("ul");
    const dropDownArrow = document.createElement("i");

    this.#addClassesToElement(dropDownContainer, classNames, "menubar-dropdown");
    dropDownLinks.classList.add("dropdown-links", "collapsed");
    dropDownArrow.classList.add("arrow", "down");

    links.forEach((pair) => {
      let linkWrapper = document.createElement("li");
      let link = document.createElement("a");
      
      link.textContent = pair.text;
      link.setAttribute("href", pair.href);

      linkWrapper.classList.add("menubar-dropdown-link");
      linkWrapper.append(link);
      dropDownLinks.append(linkWrapper);
    });
    dropDownLabel.textContent = name;

    dropDownLabel.append(dropDownArrow);
    dropDownContainer.append(dropDownLabel, dropDownLinks);
    dropDownContainer.addEventListener("click", this.#toggleDropdown);

    this.#clickables.push(dropDownContainer);
  }

  /**
   * A callback to show dropdown menu on hover.
   * 
   * @param {*} e - Event. Used to get the current link being hovered over,
   * and then use it to find the dropdown links.
   */
  #toggleDropdown(e) {
    const dropdown = e.currentTarget.querySelector("ul");
    const dropdownArrow = e.currentTarget.querySelector(".arrow");
    dropdown.classList.toggle("collapsed");

    dropdownArrow.classList.toggle("up");
  }


  /**
   * Get the menu with all the clickables that has been added to it.
   * @returns {HTMLElement} - menu.
   */
  getMenu() {
    let self = this;
    // TODO: Come back and verify this method if you get duplicate elements, shouldn't based on the nature of the method.
    this.#clickables.forEach((clickable) => self.menu.append(clickable));

    return this.menu;
  }

    /**
   * Add elements to a given menu.
   * 
   * @param {MenuBar} menu - The menu to put elements on.
   * @param {*} elements - The elements to add. Follow a template like navElements.js,
   * as in, an object with a type, text, and href attributes.
   */
  static addElementsToHeader(menu, elements) {
    elements.forEach((elem) => {
      switch (elem.type) {
        case "logo":
          menu.addLogo(elem.text, elem.icon);
          break;
        case "link":
          menu.addLink(elem.text, elem.href);
          break;
        case "dropdown":
          menu.addDropdown(elem.text, elem.links);
          break;
        default: {
          console.log(`${elem.type} has not been implemented yet`);
        }
      }
    });
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsZ0JBQWdCLEtBQUs7QUFDcEMsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2Ryb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBNZW51QmFyLiBDb250YWlucyBvcGVyYXRpb25zIGZvciBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIE1lbnVCYXIuXHJcbiAqIEZpcnN0LCBhZGQgZWxlbWVudHMgdG8gaXQgdXNpbmcgdGhlIHZhcmlvdXMgYWRkKigpIG1ldGhvZHMuIFRoZW4sIHVzZVxyXG4gKiBnZXRNZW51QmFyKCkgdG8gZ2V0IHRoZSBlbGVtZW50IHJlZmVyZW5jZSwgd2hpY2ggeW91IGNhbiB1c2UgdGhhdCB0byBhcHBlbmQgdG8gXHJcbiAqIGEgcGFyZW50IG9mIHlvdXIgY2hvaWNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBNZW51QmFyLCBzaW5jZSBvbmx5IG9uZSBNZW51QmFyIHNob3VsZCBldmVyIGV4aXN0IG9uIGEgd2VicGFnZS5cclxuICAgKi9cclxuICBzdGF0aWMgI2luc3RhbmNlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZW51IGVsZW1lbnQuXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAqL1xyXG4gIG1lbnU7XHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNsaWNrYWJsZSBlbGVtZW50cyBvbiB0aGUgbWVudS5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgKi9cclxuICAjY2xpY2thYmxlcztcclxuXHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoTWVudUJhci4jaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gTWVudUJhci4jaW5zdGFuY2U7XHJcbiAgICB9IFxyXG4gICAgTWVudUJhci4jaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgbGluayB0byB0aGUgbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIGxpbmsuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBUaGUgcGF0aCB0aGUgbGluayBzaG91bGQgcG9pbnQgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuXHJcbiAgICovXHJcbiAgYWRkTGluayhuYW1lLCBocmVmLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChsaW5rLCBjbGFzc05hbWVzLCBcIm1lbnViYXItbGluay1jbGlja2FibGVcIik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSB0ZXh0IGxvZ28gdG8gdGhlIG1lbnUuIFVzZWZ1bCBmb3IgYSBjb21wYW55IGxvZ28uXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBBY2NvbXBhbnlpbmcgdGV4dCB0byBkaXNwbGF5IHdpdGggdGhlIGljb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBGaWxlcGF0aCByZXByZXNlbnRpbmcgYW4gaWNvbi4gTnVsbCBpZiB5b3UgZG9uJ3QgbmVlZCBhbiBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLiBcclxuICAgKi9cclxuICBhZGRMb2dvKHRleHQsIGljb249bnVsbCwgLi4uY2xhc3NOYW1lcyl7XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRleHRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChsb2dvLCBjbGFzc05hbWVzLCBcInNpdGUtbG9nb1wiKTtcclxuXHJcbiAgICBpZiAoaWNvbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBpY29uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGljb25FbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpY29uKTtcclxuICAgICAgY29uc29sZS5sb2coaWNvbik7XHJcbiAgICAgIGxvZ28uYXBwZW5kKGljb25FbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0TG9nby50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgbG9nby5hcHBlbmQodGV4dExvZ28pO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChsb2dvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGRyb3Bkb3duIG1lbnUgYmFzZWQgb24gYSBnaXZlbiBhcnJheSBvZiBsaW5rcy5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAqIEBwYXJhbSB7IHtcIm5hbWVcIiA6IFwiaHJlZlwifVtdIH0gbGlua3MgLSBBbiBhcnJheSBvZiBuYW1lOmhyZWYgb2JqZWN0IHBhaXJzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZSAtIE9wdGlvbmFsIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuXHJcbiAgICovXHJcbiAgYWRkRHJvcGRvd24obmFtZSwgbGlua3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vIFRocmVlIGNvbXBvbmVudHMgdG8gYSBkcm9wZG93biwgdGhlIGxhYmVsLCB0aGUgbmF2bGlua3MsIGFuZCB0aGUgYXJyb3cuXHJcbiAgICBjb25zdCBkcm9wRG93bkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgZHJvcERvd25MaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGRyb3BEb3duQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGRyb3BEb3duQ29udGFpbmVyLCBjbGFzc05hbWVzLCBcIm1lbnViYXItZHJvcGRvd25cIik7XHJcbiAgICBkcm9wRG93bkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1saW5rc1wiLCBcImNvbGxhcHNlZFwiKTtcclxuICAgIGRyb3BEb3duQXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93XCIsIFwiZG93blwiKTtcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChwYWlyKSA9PiB7XHJcbiAgICAgIGxldCBsaW5rV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgXHJcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBwYWlyLnRleHQ7XHJcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBwYWlyLmhyZWYpO1xyXG5cclxuICAgICAgbGlua1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnViYXItZHJvcGRvd24tbGlua1wiKTtcclxuICAgICAgbGlua1dyYXBwZXIuYXBwZW5kKGxpbmspO1xyXG4gICAgICBkcm9wRG93bkxpbmtzLmFwcGVuZChsaW5rV3JhcHBlcik7XHJcbiAgICB9KTtcclxuICAgIGRyb3BEb3duTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwuYXBwZW5kKGRyb3BEb3duQXJyb3cpO1xyXG4gICAgZHJvcERvd25Db250YWluZXIuYXBwZW5kKGRyb3BEb3duTGFiZWwsIGRyb3BEb3duTGlua3MpO1xyXG4gICAgZHJvcERvd25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZURyb3Bkb3duKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goZHJvcERvd25Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayB0byBzaG93IGRyb3Bkb3duIG1lbnUgb24gaG92ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSBlIC0gRXZlbnQuIFVzZWQgdG8gZ2V0IHRoZSBjdXJyZW50IGxpbmsgYmVpbmcgaG92ZXJlZCBvdmVyLFxyXG4gICAqIGFuZCB0aGVuIHVzZSBpdCB0byBmaW5kIHRoZSBkcm9wZG93biBsaW5rcy5cclxuICAgKi9cclxuICAjdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcGRvd25BcnJvdyA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICBkcm9wZG93bkFycm93LmNsYXNzTGlzdC50b2dnbGUoXCJ1cFwiKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG1lbnUgd2l0aCBhbGwgdGhlIGNsaWNrYWJsZXMgdGhhdCBoYXMgYmVlbiBhZGRlZCB0byBpdC5cclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gbWVudS5cclxuICAgKi9cclxuICBnZXRNZW51KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gVE9ETzogQ29tZSBiYWNrIGFuZCB2ZXJpZnkgdGhpcyBtZXRob2QgaWYgeW91IGdldCBkdXBsaWNhdGUgZWxlbWVudHMsIHNob3VsZG4ndCBiYXNlZCBvbiB0aGUgbmF0dXJlIG9mIHRoZSBtZXRob2QuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLmZvckVhY2goKGNsaWNrYWJsZSkgPT4gc2VsZi5tZW51LmFwcGVuZChjbGlja2FibGUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tZW51O1xyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBBZGQgZWxlbWVudHMgdG8gYSBnaXZlbiBtZW51LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TWVudUJhcn0gbWVudSAtIFRoZSBtZW51IHRvIHB1dCBlbGVtZW50cyBvbi5cclxuICAgKiBAcGFyYW0geyp9IGVsZW1lbnRzIC0gVGhlIGVsZW1lbnRzIHRvIGFkZC4gRm9sbG93IGEgdGVtcGxhdGUgbGlrZSBuYXZFbGVtZW50cy5qcyxcclxuICAgKiBhcyBpbiwgYW4gb2JqZWN0IHdpdGggYSB0eXBlLCB0ZXh0LCBhbmQgaHJlZiBhdHRyaWJ1dGVzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRFbGVtZW50c1RvSGVhZGVyKG1lbnUsIGVsZW1lbnRzKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWxlbS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImxvZ29cIjpcclxuICAgICAgICAgIG1lbnUuYWRkTG9nbyhlbGVtLnRleHQsIGVsZW0uaWNvbik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiOlxyXG4gICAgICAgICAgbWVudS5hZGRMaW5rKGVsZW0udGV4dCwgZWxlbS5ocmVmKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkcm9wZG93blwiOlxyXG4gICAgICAgICAgbWVudS5hZGREcm9wZG93bihlbGVtLnRleHQsIGVsZW0ubGlua3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7ZWxlbS50eXBlfSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgeWV0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9