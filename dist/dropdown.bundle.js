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

  /**
   * The breakpoint to be set to convert the menu bar to a mobile format. In px.
   * When a MenuBar reference is initialized, the default breakpoint is 860px.
   * @type {MediaQueryList}
   */
  mobileBreakpointListener;

  constructor(className, breakpoint = 860) {
    if (MenuBar.#instance !== undefined) {
      return MenuBar.#instance;
    } 
    MenuBar.#instance = this;

    this.menu = document.createElement("header");
    this.menu.classList.add(className);

    this.#clickables = [];

    this.#menuItems = document.createElement("nav");
    this.#menuItems.classList.add("navigation");

    this.mobileBreakpointListener = window.matchMedia(`(max-width:${breakpoint}px)`);
    this.#initializeResponsiveMenu();

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

  #initializeResponsiveMenu() {
    window.onclick = null;
    this.mobileBreakpointListener.addEventListener("change", (e) => {
      // if the width of the screen is 860px or below...:
      if (e.matches) {
        console.log("mobile breakpoint active, Dan hide menu when clicked off...");
        window.onclick = null;
      } else {
        console.log("mobile breakpoint inactive, collapsing any active menus.");

        document.querySelectorAll(".menubar-dropdown.active")
            .forEach(() => {
              MenuBar.closeActiveDropdown();
            });

        if (window.onclick === null) {
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
        }
      }
    });
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
    dropDownLabel.classList.add("dropdown-label");
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

    dropDownLabel.addEventListener("click",
        (e) => this.#toggleDropdown.call(this, e));

    this.#clickables.push(dropDownContainer);
  }

  /**
   * Used for closing any active dropdowns, if they're active or the user clicks 
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
    
    let dropdownRoot = e.currentTarget;
    while(!dropdownRoot.matches(".menubar-dropdown")) {
      dropdownRoot = dropdownRoot.parentNode;
    }

    if (!this.mobileBreakpointListener.matches) {
      const activeDropdown = document.querySelector(".menubar-dropdown.active");
      if (activeDropdown !== null && !activeDropdown.contains(dropdownRoot)) {
        MenuBar.closeActiveDropdown();
      }
    }

    const dropdownList = dropdownRoot.querySelector("ul");
    const dropdownArrow = dropdownRoot.querySelector(".arrow");
    
    dropdownRoot.classList.toggle("active");
    dropdownList.classList.toggle("collapsed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFdBQVc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxnQkFBZ0IsS0FBSztBQUNwQyxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUmVwcmVzZW50cyBhIE1lbnVCYXIuIENvbnRhaW5zIG9wZXJhdGlvbnMgZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgTWVudUJhci5cclxuICogRmlyc3QsIGFkZCBlbGVtZW50cyB0byBpdCB1c2luZyB0aGUgdmFyaW91cyBhZGQqKCkgbWV0aG9kcy4gVGhlbiwgdXNlXHJcbiAqIGdldE1lbnVCYXIoKSB0byBnZXQgdGhlIGVsZW1lbnQgcmVmZXJlbmNlLCB3aGljaCB5b3UgY2FuIHVzZSB0aGF0IHRvIGFwcGVuZCB0byBcclxuICogYSBwYXJlbnQgb2YgeW91ciBjaG9pY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIHtcclxuICBcclxuICAvKipcclxuICAgKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIE1lbnVCYXIsIHNpbmNlIG9ubHkgb25lIE1lbnVCYXIgc2hvdWxkIGV2ZXIgZXhpc3Qgb24gYSB3ZWJwYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lbnUgZWxlbWVudC5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICovXHJcbiAgbWVudTtcclxuICAvKipcclxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY2xpY2thYmxlIGVsZW1lbnRzIG9uIHRoZSBtZW51LlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gICNjbGlja2FibGVzO1xyXG4gICNtZW51SXRlbXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBicmVha3BvaW50IHRvIGJlIHNldCB0byBjb252ZXJ0IHRoZSBtZW51IGJhciB0byBhIG1vYmlsZSBmb3JtYXQuIEluIHB4LlxyXG4gICAqIFdoZW4gYSBNZW51QmFyIHJlZmVyZW5jZSBpcyBpbml0aWFsaXplZCwgdGhlIGRlZmF1bHQgYnJlYWtwb2ludCBpcyA4NjBweC5cclxuICAgKiBAdHlwZSB7TWVkaWFRdWVyeUxpc3R9XHJcbiAgICovXHJcbiAgbW9iaWxlQnJlYWtwb2ludExpc3RlbmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGJyZWFrcG9pbnQgPSA4NjApIHtcclxuICAgIGlmIChNZW51QmFyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBNZW51QmFyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcbiAgICBNZW51QmFyLiNpbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuI21lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICB0aGlzLiNtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHgpYCk7XHJcbiAgICB0aGlzLiNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKTtcclxuXHJcbiAgICB0aGlzLiNhZGRIYW1idXJnZXJJY29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgaGFtYnVyZ2VyIGljb24gdG8gY2xpY2thYmxlcy5cclxuICAgKi9cclxuICAjYWRkSGFtYnVyZ2VySWNvbigpIHtcclxuICAgIGNvbnN0IHN2Z05zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCBcInN2Z1wiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCA4MFwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCA0MCk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDQwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBsZXQgeSA9IDMwICogaTtcclxuICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJyZWN0XCIpO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDEwMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDIwKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChsaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gICNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKSB7XHJcbiAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICB0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGlzIDg2MHB4IG9yIGJlbG93Li4uOlxyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBhY3RpdmUsIERhbiBoaWRlIG1lbnUgd2hlbiBjbGlja2VkIG9mZi4uLlwiKTtcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBpbmFjdGl2ZSwgY29sbGFwc2luZyBhbnkgYWN0aXZlIG1lbnVzLlwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgTWVudUJhci5jbG9zZUFjdGl2ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAod2luZG93Lm9uY2xpY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBhbnl0aGluZyBpZiBubyBkcm9wZG93biBpcyBhY3RpdmUuXHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7IFxyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBvbmx5IGNsb3NlIHdoZW4gdGhlIGVsZW1lbnQgY2xpY2tlZCBpcyBub3QgdGhlIGRyb3Bkb3duIGl0c2VsZiBvciBpdHMgY2hpbGQuXHJcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhcIi5tZW51YmFyLWRyb3Bkb3duXCIpICYmICFhY3RpdmUuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgTWVudUJhci5jbG9zZUFjdGl2ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIGxpbmsgdG8gdGhlIG1lbnUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBsaW5rLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gVGhlIHBhdGggdGhlIGxpbmsgc2hvdWxkIHBvaW50IHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZExpbmsobmFtZSwgaHJlZiwgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgXHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobGluaywgY2xhc3NOYW1lcywgXCJtZW51YmFyLWxpbmstY2xpY2thYmxlXCIpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgdGV4dCBsb2dvIHRvIHRoZSBtZW51LiBVc2VmdWwgZm9yIGEgY29tcGFueSBsb2dvLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQWNjb21wYW55aW5nIHRleHQgdG8gZGlzcGxheSB3aXRoIHRoZSBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIC0gRmlsZXBhdGggcmVwcmVzZW50aW5nIGFuIGljb24uIE51bGwgaWYgeW91IGRvbid0IG5lZWQgYW4gaWNvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gT3B0aW9uYWwgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy4gXHJcbiAgICovXHJcbiAgYWRkTG9nbyh0ZXh0LCBpY29uPW51bGwsIC4uLmNsYXNzTmFtZXMpe1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobG9nbywgY2xhc3NOYW1lcywgXCJzaXRlLWxvZ29cIik7XHJcblxyXG4gICAgaWYgKGljb24gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaWNvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGljb24pO1xyXG4gICAgICBsb2dvLmFwcGVuZChpY29uRWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dExvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kKHRleHRMb2dvKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2gobG9nbyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkcm9wZG93biBtZW51IGJhc2VkIG9uIGEgZ2l2ZW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0geyB7XCJuYW1lXCIgOiBcImhyZWZcIn1bXSB9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbmFtZTpocmVmIG9iamVjdCBwYWlycy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZERyb3Bkb3duKG5hbWUsIGxpbmtzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBkcm9wRG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBUaHJlZSBjb21wb25lbnRzIHRvIGEgZHJvcGRvd24sIHRoZSBsYWJlbCwgdGhlIG5hdmxpbmtzLCBhbmQgdGhlIGFycm93LlxyXG4gICAgY29uc3QgZHJvcERvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnN0IGRyb3BEb3duTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkcm9wRG93bkNvbnRhaW5lciwgY2xhc3NOYW1lcywgXCJtZW51YmFyLWRyb3Bkb3duXCIpO1xyXG4gICAgZHJvcERvd25MYWJlbC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbGFiZWxcIik7XHJcbiAgICBkcm9wRG93bkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1saW5rc1wiLCBcImNvbGxhcHNlZFwiKTtcclxuICAgIGRyb3BEb3duQXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93XCIsIFwiZG93blwiKTtcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChwYWlyKSA9PiB7XHJcbiAgICAgIGxldCBsaW5rV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgXHJcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBwYWlyLnRleHQ7XHJcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBwYWlyLmhyZWYpO1xyXG5cclxuICAgICAgbGlua1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnViYXItZHJvcGRvd24tbGlua1wiKTtcclxuICAgICAgbGlua1dyYXBwZXIuYXBwZW5kKGxpbmspO1xyXG4gICAgICBkcm9wRG93bkxpbmtzLmFwcGVuZChsaW5rV3JhcHBlcik7XHJcbiAgICB9KTtcclxuICAgIGRyb3BEb3duTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwuYXBwZW5kKGRyb3BEb3duQXJyb3cpO1xyXG4gICAgZHJvcERvd25Db250YWluZXIuYXBwZW5kKGRyb3BEb3duTGFiZWwsIGRyb3BEb3duTGlua3MpO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXHJcbiAgICAgICAgKGUpID0+IHRoaXMuI3RvZ2dsZURyb3Bkb3duLmNhbGwodGhpcywgZSkpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChkcm9wRG93bkNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIGZvciBjbG9zaW5nIGFueSBhY3RpdmUgZHJvcGRvd25zLCBpZiB0aGV5J3JlIGFjdGl2ZSBvciB0aGUgdXNlciBjbGlja3MgXHJcbiAgICogYW55IGFyZWEgb3V0c2lkZSBvZiBpdCBvbiB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjbG9zZUFjdGl2ZURyb3Bkb3duKCkge1xyXG4gICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIHRoYXQgaXNuJ3QgdGhlIGN1cnJlbnQgYWN0aXZlIGRyb3Bkb3duLi4uXHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93biA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbGlua3NcIik7XHJcbiAgICBjb25zdCBhY3RpdmVBcnJvdyA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIC8vIGNvbGxhcHNlIGl0LlxyXG4gICAgYWN0aXZlRHJvcGRvd25CdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGFjdGl2ZURyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidXBcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QuYWRkKFwiZG93blwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY2FsbGJhY2sgdG8gc2hvdyBhIGRyb3Bkb3duIG1lbnUuIEFzc2lnbiB0aGlzIHRvIGJ1dHRvbnMgb24gdGhlIG5hdmJhci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IGUgLSBFdmVudC4gVXNlZCB0byBnZXQgdGhlIGN1cnJlbnQgbGluayBiZWluZyBob3ZlcmVkIG92ZXIsXHJcbiAgICogYW5kIHRoZW4gdXNlIGl0IHRvIGZpbmQgdGhlIGRyb3Bkb3duIGxpbmtzLlxyXG4gICAqL1xyXG4gICN0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICBcclxuICAgIGxldCBkcm9wZG93blJvb3QgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICB3aGlsZSghZHJvcGRvd25Sb290Lm1hdGNoZXMoXCIubWVudWJhci1kcm9wZG93blwiKSkge1xyXG4gICAgICBkcm9wZG93blJvb3QgPSBkcm9wZG93blJvb3QucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubW9iaWxlQnJlYWtwb2ludExpc3RlbmVyLm1hdGNoZXMpIHtcclxuICAgICAgY29uc3QgYWN0aXZlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoYWN0aXZlRHJvcGRvd24gIT09IG51bGwgJiYgIWFjdGl2ZURyb3Bkb3duLmNvbnRhaW5zKGRyb3Bkb3duUm9vdCkpIHtcclxuICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duTGlzdCA9IGRyb3Bkb3duUm9vdC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wZG93bkFycm93ID0gZHJvcGRvd25Sb290LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIGRyb3Bkb3duUm9vdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwiZG93blwiKTtcclxuICAgIGRyb3Bkb3duQXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShcInVwXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtZW51IHdpdGggYWxsIHRoZSBjbGlja2FibGVzIHRoYXQgaGFzIGJlZW4gYWRkZWQgdG8gaXQuXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIG1lbnUuXHJcbiAgICovXHJcbiAgZ2V0TWVudSgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuI2NsaWNrYWJsZXMuZm9yRWFjaCgoY2xpY2thYmxlKSA9PiB7XHJcbiAgICAgIGlmIChjbGlja2FibGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudWJhci1saW5rLWNsaWNrYWJsZVwiKVxyXG4gICAgICAgICAgfHwgY2xpY2thYmxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnViYXItZHJvcGRvd25cIikpIHtcclxuICAgICAgICAgICAgc2VsZi4jbWVudUl0ZW1zLmFwcGVuZChjbGlja2FibGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYubWVudS5hcHBlbmQoY2xpY2thYmxlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tZW51LmFwcGVuZCh0aGlzLiNtZW51SXRlbXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIEFkZCBlbGVtZW50cyB0byBhIGdpdmVuIG1lbnUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtNZW51QmFyfSBtZW51IC0gVGhlIG1lbnUgdG8gcHV0IGVsZW1lbnRzIG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gZWxlbWVudHMgLSBUaGUgZWxlbWVudHMgdG8gYWRkLiBGb2xsb3cgYSB0ZW1wbGF0ZSBsaWtlIG5hdkVsZW1lbnRzLmpzLFxyXG4gICAqIGFzIGluLCBhbiBvYmplY3Qgd2l0aCBhIHR5cGUsIHRleHQsIGFuZCBocmVmIGF0dHJpYnV0ZXMuXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZEVsZW1lbnRzVG9IZWFkZXIobWVudSwgZWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgc3dpdGNoIChlbGVtLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibG9nb1wiOlxyXG4gICAgICAgICAgbWVudS5hZGRMb2dvKGVsZW0udGV4dCwgZWxlbS5pY29uKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5rXCI6XHJcbiAgICAgICAgICBtZW51LmFkZExpbmsoZWxlbS50ZXh0LCBlbGVtLmhyZWYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRyb3Bkb3duXCI6XHJcbiAgICAgICAgICBtZW51LmFkZERyb3Bkb3duKGVsZW0udGV4dCwgZWxlbS5saW5rcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtlbGVtLnR5cGV9IGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCB5ZXRgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=