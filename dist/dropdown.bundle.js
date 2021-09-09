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
  #menuItems;

  constructor(className) {
    if (MenuBar.#instance !== undefined) {
      return MenuBar.#instance;
    } 
    MenuBar.#instance = this;

    this.menu = document.createElement("header");
    this.menu.classList.add(className);

    this.#clickables = [];

    this.#menuItems = document.createElement("nav");
    this.#menuItems.classList.add("navigation");

    this.#addHamburgerIcon();
  }

  /**
   * Adds a hamburger icon to clickables.
   */
  #addHamburgerIcon() {
    const svgNs = "http://www.w3.org/2000/svg";
    const container = document.createElementNS(svgNs, "svg");
    container.setAttribute("viewBox", "0 0 100 80");
    container.setAttribute("width", 40);
    container.setAttribute("height", 40);

    for (let i = 0; i < 3; i++) {
      let y = 30 * i;
      const line = document.createElementNS(svgNs, "rect");
      line.setAttribute("width", 100);
      line.setAttribute("height", 20);
      line.setAttribute("y", y);

      container.append(line);
    }

    container.classList.add("menu-icon");

    this.#clickables.push(container);
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
    
    window.onclick = (e) => {
      const active = document.querySelector(".menubar-dropdown.active");
      // no need to do anything if no dropdown is active.
      if (!active) { 
        return;
      }
      // only close when the element clicked is not the dropdown itself or its child.
      if (!e.target.matches(".menubar-dropdown") && !active.contains(e.target)) {
        MenuBar.closeActiveDropdown();
      }
    };

    this.#clickables.push(dropDownContainer);
  }

  /**
   * Used for closing any active dropdowns if they're active and the user clicks 
   * any area outside of it on the window.
   */
  static closeActiveDropdown() {
    // If the user clicks anywhere that isn't the current active dropdown...
    const activeDropdownBtn = document.querySelector(".menubar-dropdown.active");
    const activeDropdown = activeDropdownBtn.querySelector(".dropdown-links");
    const activeArrow = activeDropdownBtn.querySelector(".arrow");
    
    // collapse it.
    activeDropdownBtn.classList.remove("active");
    activeDropdown.classList.add("collapsed");
    activeArrow.classList.remove("up");
    activeArrow.classList.add("down");
  }

  /**
   * A callback to show a dropdown menu. Assign this to buttons on the navbar.
   * 
   * @param {*} e - Event. Used to get the current link being hovered over,
   * and then use it to find the dropdown links.
   */
  #toggleDropdown(e) {
    // first, check if another dropdown is active
    const activeDropdown = document.querySelector(".menubar-dropdown.active");
    if (activeDropdown !== null && !activeDropdown.contains(e.currentTarget)) {
      MenuBar.closeActiveDropdown();
    }

    const dropdown = e.currentTarget.querySelector("ul");
    const dropdownArrow = e.currentTarget.querySelector(".arrow");
    
    e.currentTarget.classList.toggle("active");
    dropdown.classList.toggle("collapsed");

    dropdownArrow.classList.toggle("down");
    dropdownArrow.classList.toggle("up");
  }

  /**
   * Get the menu with all the clickables that has been added to it.
   * @returns {HTMLElement} - menu.
   */
  getMenu() {
    let self = this;
    this.#clickables.forEach((clickable) => {
      if (clickable.classList.contains("menubar-link-clickable")
          || clickable.classList.contains("menubar-dropdown")) {
            self.#menuItems.append(clickable);
      } else {
        self.menu.append(clickable);
      }
    });

    this.menu.append(this.#menuItems);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsZ0JBQWdCLEtBQUs7QUFDcEMsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2Ryb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBNZW51QmFyLiBDb250YWlucyBvcGVyYXRpb25zIGZvciBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIE1lbnVCYXIuXHJcbiAqIEZpcnN0LCBhZGQgZWxlbWVudHMgdG8gaXQgdXNpbmcgdGhlIHZhcmlvdXMgYWRkKigpIG1ldGhvZHMuIFRoZW4sIHVzZVxyXG4gKiBnZXRNZW51QmFyKCkgdG8gZ2V0IHRoZSBlbGVtZW50IHJlZmVyZW5jZSwgd2hpY2ggeW91IGNhbiB1c2UgdGhhdCB0byBhcHBlbmQgdG8gXHJcbiAqIGEgcGFyZW50IG9mIHlvdXIgY2hvaWNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBNZW51QmFyLCBzaW5jZSBvbmx5IG9uZSBNZW51QmFyIHNob3VsZCBldmVyIGV4aXN0IG9uIGEgd2VicGFnZS5cclxuICAgKi9cclxuICBzdGF0aWMgI2luc3RhbmNlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZW51IGVsZW1lbnQuXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAqL1xyXG4gIG1lbnU7XHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNsaWNrYWJsZSBlbGVtZW50cyBvbiB0aGUgbWVudS5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgKi9cclxuICAjY2xpY2thYmxlcztcclxuICAjbWVudUl0ZW1zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcclxuICAgIGlmIChNZW51QmFyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBNZW51QmFyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcbiAgICBNZW51QmFyLiNpbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuI21lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICB0aGlzLiNtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgdGhpcy4jYWRkSGFtYnVyZ2VySWNvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGhhbWJ1cmdlciBpY29uIHRvIGNsaWNrYWJsZXMuXHJcbiAgICovXHJcbiAgI2FkZEhhbWJ1cmdlckljb24oKSB7XHJcbiAgICBjb25zdCBzdmdOcyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJzdmdcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgODBcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgNDApO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCA0MCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgbGV0IHkgPSAzMCAqIGk7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsIFwicmVjdFwiKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAxMDApO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAyMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQobGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb25cIik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqICovIFxyXG4gICNhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGNsYXNzTmFtZXMsIGRlZmF1bHRDbGFzcykge1xyXG4gICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIGxpbmsgdG8gdGhlIG1lbnUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBsaW5rLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gVGhlIHBhdGggdGhlIGxpbmsgc2hvdWxkIHBvaW50IHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZExpbmsobmFtZSwgaHJlZiwgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgXHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobGluaywgY2xhc3NOYW1lcywgXCJtZW51YmFyLWxpbmstY2xpY2thYmxlXCIpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgdGV4dCBsb2dvIHRvIHRoZSBtZW51LiBVc2VmdWwgZm9yIGEgY29tcGFueSBsb2dvLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQWNjb21wYW55aW5nIHRleHQgdG8gZGlzcGxheSB3aXRoIHRoZSBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIC0gRmlsZXBhdGggcmVwcmVzZW50aW5nIGFuIGljb24uIE51bGwgaWYgeW91IGRvbid0IG5lZWQgYW4gaWNvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gT3B0aW9uYWwgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy4gXHJcbiAgICovXHJcbiAgYWRkTG9nbyh0ZXh0LCBpY29uPW51bGwsIC4uLmNsYXNzTmFtZXMpe1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobG9nbywgY2xhc3NOYW1lcywgXCJzaXRlLWxvZ29cIik7XHJcblxyXG4gICAgaWYgKGljb24gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaWNvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGljb24pO1xyXG4gICAgICBsb2dvLmFwcGVuZChpY29uRWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dExvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kKHRleHRMb2dvKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2gobG9nbyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkcm9wZG93biBtZW51IGJhc2VkIG9uIGEgZ2l2ZW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0geyB7XCJuYW1lXCIgOiBcImhyZWZcIn1bXSB9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbmFtZTpocmVmIG9iamVjdCBwYWlycy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZERyb3Bkb3duKG5hbWUsIGxpbmtzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBkcm9wRG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBUaHJlZSBjb21wb25lbnRzIHRvIGEgZHJvcGRvd24sIHRoZSBsYWJlbCwgdGhlIG5hdmxpbmtzLCBhbmQgdGhlIGFycm93LlxyXG4gICAgY29uc3QgZHJvcERvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnN0IGRyb3BEb3duTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkcm9wRG93bkNvbnRhaW5lciwgY2xhc3NOYW1lcywgXCJtZW51YmFyLWRyb3Bkb3duXCIpO1xyXG4gICAgZHJvcERvd25MaW5rcy5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbGlua3NcIiwgXCJjb2xsYXBzZWRcIik7XHJcbiAgICBkcm9wRG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiLCBcImRvd25cIik7XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgocGFpcikgPT4ge1xyXG4gICAgICBsZXQgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIFxyXG4gICAgICBsaW5rLnRleHRDb250ZW50ID0gcGFpci50ZXh0O1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcGFpci5ocmVmKTtcclxuXHJcbiAgICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51YmFyLWRyb3Bkb3duLWxpbmtcIik7XHJcbiAgICAgIGxpbmtXcmFwcGVyLmFwcGVuZChsaW5rKTtcclxuICAgICAgZHJvcERvd25MaW5rcy5hcHBlbmQobGlua1dyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wRG93bkxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBkcm9wRG93bkxhYmVsLmFwcGVuZChkcm9wRG93bkFycm93KTtcclxuICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZChkcm9wRG93bkxhYmVsLCBkcm9wRG93bkxpbmtzKTtcclxuXHJcbiAgICBkcm9wRG93bkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jdG9nZ2xlRHJvcGRvd24pO1xyXG4gICAgXHJcbiAgICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICAgIC8vIG5vIG5lZWQgdG8gZG8gYW55dGhpbmcgaWYgbm8gZHJvcGRvd24gaXMgYWN0aXZlLlxyXG4gICAgICBpZiAoIWFjdGl2ZSkgeyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gb25seSBjbG9zZSB3aGVuIHRoZSBlbGVtZW50IGNsaWNrZWQgaXMgbm90IHRoZSBkcm9wZG93biBpdHNlbGYgb3IgaXRzIGNoaWxkLlxyXG4gICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIubWVudWJhci1kcm9wZG93blwiKSAmJiAhYWN0aXZlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChkcm9wRG93bkNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIGZvciBjbG9zaW5nIGFueSBhY3RpdmUgZHJvcGRvd25zIGlmIHRoZXkncmUgYWN0aXZlIGFuZCB0aGUgdXNlciBjbGlja3MgXHJcbiAgICogYW55IGFyZWEgb3V0c2lkZSBvZiBpdCBvbiB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjbG9zZUFjdGl2ZURyb3Bkb3duKCkge1xyXG4gICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIHRoYXQgaXNuJ3QgdGhlIGN1cnJlbnQgYWN0aXZlIGRyb3Bkb3duLi4uXHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93biA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbGlua3NcIik7XHJcbiAgICBjb25zdCBhY3RpdmVBcnJvdyA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIC8vIGNvbGxhcHNlIGl0LlxyXG4gICAgYWN0aXZlRHJvcGRvd25CdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGFjdGl2ZURyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidXBcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QuYWRkKFwiZG93blwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY2FsbGJhY2sgdG8gc2hvdyBhIGRyb3Bkb3duIG1lbnUuIEFzc2lnbiB0aGlzIHRvIGJ1dHRvbnMgb24gdGhlIG5hdmJhci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IGUgLSBFdmVudC4gVXNlZCB0byBnZXQgdGhlIGN1cnJlbnQgbGluayBiZWluZyBob3ZlcmVkIG92ZXIsXHJcbiAgICogYW5kIHRoZW4gdXNlIGl0IHRvIGZpbmQgdGhlIGRyb3Bkb3duIGxpbmtzLlxyXG4gICAqL1xyXG4gICN0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICAvLyBmaXJzdCwgY2hlY2sgaWYgYW5vdGhlciBkcm9wZG93biBpcyBhY3RpdmVcclxuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICAgIGlmIChhY3RpdmVEcm9wZG93biAhPT0gbnVsbCAmJiAhYWN0aXZlRHJvcGRvd24uY29udGFpbnMoZS5jdXJyZW50VGFyZ2V0KSkge1xyXG4gICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wZG93biA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wZG93bkFycm93ID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICBkcm9wZG93bkFycm93LmNsYXNzTGlzdC50b2dnbGUoXCJkb3duXCIpO1xyXG4gICAgZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwidXBcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG1lbnUgd2l0aCBhbGwgdGhlIGNsaWNrYWJsZXMgdGhhdCBoYXMgYmVlbiBhZGRlZCB0byBpdC5cclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gbWVudS5cclxuICAgKi9cclxuICBnZXRNZW51KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5mb3JFYWNoKChjbGlja2FibGUpID0+IHtcclxuICAgICAgaWYgKGNsaWNrYWJsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51YmFyLWxpbmstY2xpY2thYmxlXCIpXHJcbiAgICAgICAgICB8fCBjbGlja2FibGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudWJhci1kcm9wZG93blwiKSkge1xyXG4gICAgICAgICAgICBzZWxmLiNtZW51SXRlbXMuYXBwZW5kKGNsaWNrYWJsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5tZW51LmFwcGVuZChjbGlja2FibGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1lbnUuYXBwZW5kKHRoaXMuI21lbnVJdGVtcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWVudTtcclxuICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQWRkIGVsZW1lbnRzIHRvIGEgZ2l2ZW4gbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge01lbnVCYXJ9IG1lbnUgLSBUaGUgbWVudSB0byBwdXQgZWxlbWVudHMgb24uXHJcbiAgICogQHBhcmFtIHsqfSBlbGVtZW50cyAtIFRoZSBlbGVtZW50cyB0byBhZGQuIEZvbGxvdyBhIHRlbXBsYXRlIGxpa2UgbmF2RWxlbWVudHMuanMsXHJcbiAgICogYXMgaW4sIGFuIG9iamVjdCB3aXRoIGEgdHlwZSwgdGV4dCwgYW5kIGhyZWYgYXR0cmlidXRlcy5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkRWxlbWVudHNUb0hlYWRlcihtZW51LCBlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsZW0udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJsb2dvXCI6XHJcbiAgICAgICAgICBtZW51LmFkZExvZ28oZWxlbS50ZXh0LCBlbGVtLmljb24pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxpbmtcIjpcclxuICAgICAgICAgIG1lbnUuYWRkTGluayhlbGVtLnRleHQsIGVsZW0uaHJlZik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZHJvcGRvd25cIjpcclxuICAgICAgICAgIG1lbnUuYWRkRHJvcGRvd24oZWxlbS50ZXh0LCBlbGVtLmxpbmtzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2VsZW0udHlwZX0gaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIHlldGApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==