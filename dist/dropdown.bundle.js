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
   * @param {string[]} classNames - The class names the link should possess. By
   * default, it obtains the class name 'menu-bar-clickable'.
   */
  addTextLogo(text, ...classNames){
    const textLogo = document.createElement("h1");
    textLogo.textContent = text;
    this.#addClassesToElement(textLogo, classNames, "site-logo");
    
    this.#clickables.push(textLogo);
  }

  /**
   * Create a dropdown menu based on a given array of links.
   * 
   * @param {string} name - The name of the dropdown menu.
   * @param { {"name" : "href"}[] } links - An array of name:href object pairs.
   * @param {string[]} className - The class names the link should possess. By
   * default, it obtains the class name 'menu-bar-clickable'.
   */
  addDropdown(name, links, ...classNames) {
    const dropDownContainer = document.createElement("div");
    // Three components to a dropdown, the label, the navlinks, and the arrow.
    const dropDownLabel = document.createElement("h2");
    const dropDownLinks = document.createElement("ul");
    const dropDownArrow = document.createElement("svg");

    this.#addClassesToElement(dropDownContainer, classNames, "menubar-dropdown");
    dropDownLinks.classList.add("collapsed");

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

    dropDownContainer.append(dropDownLabel, dropDownLinks, dropDownArrow);

    this.#clickables.push(dropDownContainer);
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
          menu.addTextLogo(elem.text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLGdCQUFnQixLQUFLO0FBQ3BDLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9kcm9wZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgTWVudUJhci4gQ29udGFpbnMgb3BlcmF0aW9ucyBmb3IgYWRkaW5nIGVsZW1lbnRzIHRvIHRoZSBNZW51QmFyLlxyXG4gKiBGaXJzdCwgYWRkIGVsZW1lbnRzIHRvIGl0IHVzaW5nIHRoZSB2YXJpb3VzIGFkZCooKSBtZXRob2RzLiBUaGVuLCB1c2VcclxuICogZ2V0TWVudUJhcigpIHRvIGdldCB0aGUgZWxlbWVudCByZWZlcmVuY2UsIHdoaWNoIHlvdSBjYW4gdXNlIHRoYXQgdG8gYXBwZW5kIHRvIFxyXG4gKiBhIHBhcmVudCBvZiB5b3VyIGNob2ljZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXIge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgTWVudUJhciwgc2luY2Ugb25seSBvbmUgTWVudUJhciBzaG91bGQgZXZlciBleGlzdCBvbiBhIHdlYnBhZ2UuXHJcbiAgICovXHJcbiAgc3RhdGljICNpbnN0YW5jZTtcclxuICAvKipcclxuICAgKiBUaGUgbWVudSBlbGVtZW50LlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuICAgKi9cclxuICBtZW51O1xyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBjbGlja2FibGUgZWxlbWVudHMgb24gdGhlIG1lbnUuXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50W119XHJcbiAgICovXHJcbiAgI2NsaWNrYWJsZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKE1lbnVCYXIuI2luc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIE1lbnVCYXIuI2luc3RhbmNlO1xyXG4gICAgfSBcclxuICAgIE1lbnVCYXIuI2luc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqICovIFxyXG4gICNhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGNsYXNzTmFtZXMsIGRlZmF1bHRDbGFzcykge1xyXG4gICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIGxpbmsgdG8gdGhlIG1lbnUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBsaW5rLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gVGhlIHBhdGggdGhlIGxpbmsgc2hvdWxkIHBvaW50IHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZExpbmsobmFtZSwgaHJlZiwgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgXHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobGluaywgY2xhc3NOYW1lcywgXCJtZW51YmFyLWxpbmstY2xpY2thYmxlXCIpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgdGV4dCBsb2dvIHRvIHRoZSBtZW51LiBVc2VmdWwgZm9yIGEgY29tcGFueSBsb2dvLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQWNjb21wYW55aW5nIHRleHQgdG8gZGlzcGxheSB3aXRoIHRoZSBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBUaGUgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGRUZXh0TG9nbyh0ZXh0LCAuLi5jbGFzc05hbWVzKXtcclxuICAgIGNvbnN0IHRleHRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGV4dExvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudCh0ZXh0TG9nbywgY2xhc3NOYW1lcywgXCJzaXRlLWxvZ29cIik7XHJcbiAgICBcclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaCh0ZXh0TG9nbyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkcm9wZG93biBtZW51IGJhc2VkIG9uIGEgZ2l2ZW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0geyB7XCJuYW1lXCIgOiBcImhyZWZcIn1bXSB9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbmFtZTpocmVmIG9iamVjdCBwYWlycy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGREcm9wZG93bihuYW1lLCBsaW5rcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gVGhyZWUgY29tcG9uZW50cyB0byBhIGRyb3Bkb3duLCB0aGUgbGFiZWwsIHRoZSBuYXZsaW5rcywgYW5kIHRoZSBhcnJvdy5cclxuICAgIGNvbnN0IGRyb3BEb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcERvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XHJcblxyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkcm9wRG93bkNvbnRhaW5lciwgY2xhc3NOYW1lcywgXCJtZW51YmFyLWRyb3Bkb3duXCIpO1xyXG4gICAgZHJvcERvd25MaW5rcy5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgIGxpbmtzLmZvckVhY2goKHBhaXIpID0+IHtcclxuICAgICAgbGV0IGxpbmtXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBcclxuICAgICAgbGluay50ZXh0Q29udGVudCA9IHBhaXIudGV4dDtcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHBhaXIuaHJlZik7XHJcblxyXG4gICAgICBsaW5rV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWVudWJhci1kcm9wZG93bi1saW5rXCIpO1xyXG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmQobGluayk7XHJcbiAgICAgIGRyb3BEb3duTGlua3MuYXBwZW5kKGxpbmtXcmFwcGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZChkcm9wRG93bkxhYmVsLCBkcm9wRG93bkxpbmtzLCBkcm9wRG93bkFycm93KTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goZHJvcERvd25Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtZW51IHdpdGggYWxsIHRoZSBjbGlja2FibGVzIHRoYXQgaGFzIGJlZW4gYWRkZWQgdG8gaXQuXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIG1lbnUuXHJcbiAgICovXHJcbiAgZ2V0TWVudSgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIC8vIFRPRE86IENvbWUgYmFjayBhbmQgdmVyaWZ5IHRoaXMgbWV0aG9kIGlmIHlvdSBnZXQgZHVwbGljYXRlIGVsZW1lbnRzLCBzaG91bGRuJ3QgYmFzZWQgb24gdGhlIG5hdHVyZSBvZiB0aGUgbWV0aG9kLlxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5mb3JFYWNoKChjbGlja2FibGUpID0+IHNlbGYubWVudS5hcHBlbmQoY2xpY2thYmxlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWVudTtcclxuICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQWRkIGVsZW1lbnRzIHRvIGEgZ2l2ZW4gbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge01lbnVCYXJ9IG1lbnUgLSBUaGUgbWVudSB0byBwdXQgZWxlbWVudHMgb24uXHJcbiAgICogQHBhcmFtIHsqfSBlbGVtZW50cyAtIFRoZSBlbGVtZW50cyB0byBhZGQuIEZvbGxvdyBhIHRlbXBsYXRlIGxpa2UgbmF2RWxlbWVudHMuanMsXHJcbiAgICogYXMgaW4sIGFuIG9iamVjdCB3aXRoIGEgdHlwZSwgdGV4dCwgYW5kIGhyZWYgYXR0cmlidXRlcy5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkRWxlbWVudHNUb0hlYWRlcihtZW51LCBlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsZW0udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJsb2dvXCI6XHJcbiAgICAgICAgICBtZW51LmFkZFRleHRMb2dvKGVsZW0udGV4dCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiOlxyXG4gICAgICAgICAgbWVudS5hZGRMaW5rKGVsZW0udGV4dCwgZWxlbS5ocmVmKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkcm9wZG93blwiOlxyXG4gICAgICAgICAgbWVudS5hZGREcm9wZG93bihlbGVtLnRleHQsIGVsZW0ubGlua3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7ZWxlbS50eXBlfSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgeWV0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9