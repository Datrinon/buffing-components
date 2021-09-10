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

    container.addEventListener("click", () => {
      console.log("triggered!!");
      document.querySelector(".navigation").classList.toggle("collapsed");
    });

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
        console.log("mobile breakpoint active, hide menu when clicked off...");
        window.onclick = null;
        document.querySelector(".navigation").classList.add("collapsed");
      } else {
        console.log("mobile breakpoint inactive, collapsing any active menus.");
        document.querySelector(".navigation").classList.remove("collapsed");
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
  addLogo(text, icon=null, href="", ...classNames){
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

    logo.setAttribute("href", href);

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
          menu.addLogo(elem.text, elem.icon, elem.href);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFdBQVc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxnQkFBZ0IsS0FBSztBQUNwQyxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUmVwcmVzZW50cyBhIE1lbnVCYXIuIENvbnRhaW5zIG9wZXJhdGlvbnMgZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgTWVudUJhci5cclxuICogRmlyc3QsIGFkZCBlbGVtZW50cyB0byBpdCB1c2luZyB0aGUgdmFyaW91cyBhZGQqKCkgbWV0aG9kcy4gVGhlbiwgdXNlXHJcbiAqIGdldE1lbnVCYXIoKSB0byBnZXQgdGhlIGVsZW1lbnQgcmVmZXJlbmNlLCB3aGljaCB5b3UgY2FuIHVzZSB0aGF0IHRvIGFwcGVuZCB0byBcclxuICogYSBwYXJlbnQgb2YgeW91ciBjaG9pY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIHtcclxuICBcclxuICAvKipcclxuICAgKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIE1lbnVCYXIsIHNpbmNlIG9ubHkgb25lIE1lbnVCYXIgc2hvdWxkIGV2ZXIgZXhpc3Qgb24gYSB3ZWJwYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lbnUgZWxlbWVudC5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICovXHJcbiAgbWVudTtcclxuICAvKipcclxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY2xpY2thYmxlIGVsZW1lbnRzIG9uIHRoZSBtZW51LlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gICNjbGlja2FibGVzO1xyXG4gICNtZW51SXRlbXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBicmVha3BvaW50IHRvIGJlIHNldCB0byBjb252ZXJ0IHRoZSBtZW51IGJhciB0byBhIG1vYmlsZSBmb3JtYXQuIEluIHB4LlxyXG4gICAqIFdoZW4gYSBNZW51QmFyIHJlZmVyZW5jZSBpcyBpbml0aWFsaXplZCwgdGhlIGRlZmF1bHQgYnJlYWtwb2ludCBpcyA4NjBweC5cclxuICAgKiBAdHlwZSB7TWVkaWFRdWVyeUxpc3R9XHJcbiAgICovXHJcbiAgbW9iaWxlQnJlYWtwb2ludExpc3RlbmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGJyZWFrcG9pbnQgPSA4NjApIHtcclxuICAgIGlmIChNZW51QmFyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBNZW51QmFyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcbiAgICBNZW51QmFyLiNpbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuI21lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICB0aGlzLiNtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHgpYCk7XHJcbiAgICB0aGlzLiNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKTtcclxuXHJcbiAgICB0aGlzLiNhZGRIYW1idXJnZXJJY29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgaGFtYnVyZ2VyIGljb24gdG8gY2xpY2thYmxlcy5cclxuICAgKi9cclxuICAjYWRkSGFtYnVyZ2VySWNvbigpIHtcclxuICAgIGNvbnN0IHN2Z05zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCBcInN2Z1wiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCA4MFwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCA0MCk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDQwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBsZXQgeSA9IDMwICogaTtcclxuICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJyZWN0XCIpO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDEwMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDIwKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChsaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyZWQhIVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gICNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKSB7XHJcbiAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICB0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGlzIDg2MHB4IG9yIGJlbG93Li4uOlxyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBhY3RpdmUsIGhpZGUgbWVudSB3aGVuIGNsaWNrZWQgb2ZmLi4uXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vYmlsZSBicmVha3BvaW50IGluYWN0aXZlLCBjb2xsYXBzaW5nIGFueSBhY3RpdmUgbWVudXMuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5vbmNsaWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZG8gYW55dGhpbmcgaWYgbm8gZHJvcGRvd24gaXMgYWN0aXZlLlxyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkgeyBcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gb25seSBjbG9zZSB3aGVuIHRoZSBlbGVtZW50IGNsaWNrZWQgaXMgbm90IHRoZSBkcm9wZG93biBpdHNlbGYgb3IgaXRzIGNoaWxkLlxyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIubWVudWJhci1kcm9wZG93blwiKSAmJiAhYWN0aXZlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSBsaW5rIHRvIHRoZSBtZW51LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgbGluay5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHJlZiAtIFRoZSBwYXRoIHRoZSBsaW5rIHNob3VsZCBwb2ludCB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGRMaW5rKG5hbWUsIGhyZWYsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIFxyXG4gICAgbGluay50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGxpbmssIGNsYXNzTmFtZXMsIFwibWVudWJhci1saW5rLWNsaWNrYWJsZVwiKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIHRleHQgbG9nbyB0byB0aGUgbWVudS4gVXNlZnVsIGZvciBhIGNvbXBhbnkgbG9nby5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEFjY29tcGFueWluZyB0ZXh0IHRvIGRpc3BsYXkgd2l0aCB0aGUgaWNvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiAtIEZpbGVwYXRoIHJlcHJlc2VudGluZyBhbiBpY29uLiBOdWxsIGlmIHlvdSBkb24ndCBuZWVkIGFuIGljb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIE9wdGlvbmFsIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuIFxyXG4gICAqL1xyXG4gIGFkZExvZ28odGV4dCwgaWNvbj1udWxsLCBocmVmPVwiXCIsIC4uLmNsYXNzTmFtZXMpe1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobG9nbywgY2xhc3NOYW1lcywgXCJzaXRlLWxvZ29cIik7XHJcblxyXG4gICAgaWYgKGljb24gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaWNvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGljb24pO1xyXG4gICAgICBsb2dvLmFwcGVuZChpY29uRWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dExvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kKHRleHRMb2dvKTtcclxuXHJcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGxvZ28pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHJvcGRvd24gbWVudSBiYXNlZCBvbiBhIGdpdmVuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXHJcbiAgICogQHBhcmFtIHsge1wibmFtZVwiIDogXCJocmVmXCJ9W10gfSBsaW5rcyAtIEFuIGFycmF5IG9mIG5hbWU6aHJlZiBvYmplY3QgcGFpcnMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gT3B0aW9uYWwgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGREcm9wZG93bihuYW1lLCBsaW5rcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gVGhyZWUgY29tcG9uZW50cyB0byBhIGRyb3Bkb3duLCB0aGUgbGFiZWwsIHRoZSBuYXZsaW5rcywgYW5kIHRoZSBhcnJvdy5cclxuICAgIGNvbnN0IGRyb3BEb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcERvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoZHJvcERvd25Db250YWluZXIsIGNsYXNzTmFtZXMsIFwibWVudWJhci1kcm9wZG93blwiKTtcclxuICAgIGRyb3BEb3duTGFiZWwuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWxhYmVsXCIpO1xyXG4gICAgZHJvcERvd25MaW5rcy5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbGlua3NcIiwgXCJjb2xsYXBzZWRcIik7XHJcbiAgICBkcm9wRG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiLCBcImRvd25cIik7XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgocGFpcikgPT4ge1xyXG4gICAgICBsZXQgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIFxyXG4gICAgICBsaW5rLnRleHRDb250ZW50ID0gcGFpci50ZXh0O1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcGFpci5ocmVmKTtcclxuXHJcbiAgICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51YmFyLWRyb3Bkb3duLWxpbmtcIik7XHJcbiAgICAgIGxpbmtXcmFwcGVyLmFwcGVuZChsaW5rKTtcclxuICAgICAgZHJvcERvd25MaW5rcy5hcHBlbmQobGlua1dyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wRG93bkxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBkcm9wRG93bkxhYmVsLmFwcGVuZChkcm9wRG93bkFycm93KTtcclxuICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZChkcm9wRG93bkxhYmVsLCBkcm9wRG93bkxpbmtzKTtcclxuXHJcbiAgICBkcm9wRG93bkxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxyXG4gICAgICAgIChlKSA9PiB0aGlzLiN0b2dnbGVEcm9wZG93bi5jYWxsKHRoaXMsIGUpKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goZHJvcERvd25Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgY2xvc2luZyBhbnkgYWN0aXZlIGRyb3Bkb3ducywgaWYgdGhleSdyZSBhY3RpdmUgb3IgdGhlIHVzZXIgY2xpY2tzIFxyXG4gICAqIGFueSBhcmVhIG91dHNpZGUgb2YgaXQgb24gdGhlIHdpbmRvdy5cclxuICAgKi9cclxuICBzdGF0aWMgY2xvc2VBY3RpdmVEcm9wZG93bigpIHtcclxuICAgIC8vIElmIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSB0aGF0IGlzbid0IHRoZSBjdXJyZW50IGFjdGl2ZSBkcm9wZG93bi4uLlxyXG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd24gPSBhY3RpdmVEcm9wZG93bkJ0bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWxpbmtzXCIpO1xyXG4gICAgY29uc3QgYWN0aXZlQXJyb3cgPSBhY3RpdmVEcm9wZG93bkJ0bi5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgXHJcbiAgICAvLyBjb2xsYXBzZSBpdC5cclxuICAgIGFjdGl2ZURyb3Bkb3duQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBhY3RpdmVEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgYWN0aXZlQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcInVwXCIpO1xyXG4gICAgYWN0aXZlQXJyb3cuY2xhc3NMaXN0LmFkZChcImRvd25cIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNhbGxiYWNrIHRvIHNob3cgYSBkcm9wZG93biBtZW51LiBBc3NpZ24gdGhpcyB0byBidXR0b25zIG9uIHRoZSBuYXZiYXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSBlIC0gRXZlbnQuIFVzZWQgdG8gZ2V0IHRoZSBjdXJyZW50IGxpbmsgYmVpbmcgaG92ZXJlZCBvdmVyLFxyXG4gICAqIGFuZCB0aGVuIHVzZSBpdCB0byBmaW5kIHRoZSBkcm9wZG93biBsaW5rcy5cclxuICAgKi9cclxuICAjdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgXHJcbiAgICBsZXQgZHJvcGRvd25Sb290ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgd2hpbGUoIWRyb3Bkb3duUm9vdC5tYXRjaGVzKFwiLm1lbnViYXItZHJvcGRvd25cIikpIHtcclxuICAgICAgZHJvcGRvd25Sb290ID0gZHJvcGRvd25Sb290LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5tYXRjaGVzKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICAgICAgaWYgKGFjdGl2ZURyb3Bkb3duICE9PSBudWxsICYmICFhY3RpdmVEcm9wZG93bi5jb250YWlucyhkcm9wZG93blJvb3QpKSB7XHJcbiAgICAgICAgTWVudUJhci5jbG9zZUFjdGl2ZURyb3Bkb3duKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkxpc3QgPSBkcm9wZG93blJvb3QucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcGRvd25BcnJvdyA9IGRyb3Bkb3duUm9vdC5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgXHJcbiAgICBkcm9wZG93blJvb3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGRyb3Bkb3duTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgIGRyb3Bkb3duQXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShcImRvd25cIik7XHJcbiAgICBkcm9wZG93bkFycm93LmNsYXNzTGlzdC50b2dnbGUoXCJ1cFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWVudSB3aXRoIGFsbCB0aGUgY2xpY2thYmxlcyB0aGF0IGhhcyBiZWVuIGFkZGVkIHRvIGl0LlxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBtZW51LlxyXG4gICAqL1xyXG4gIGdldE1lbnUoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiNjbGlja2FibGVzLmZvckVhY2goKGNsaWNrYWJsZSkgPT4ge1xyXG4gICAgICBpZiAoY2xpY2thYmxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnViYXItbGluay1jbGlja2FibGVcIilcclxuICAgICAgICAgIHx8IGNsaWNrYWJsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51YmFyLWRyb3Bkb3duXCIpKSB7XHJcbiAgICAgICAgICAgIHNlbGYuI21lbnVJdGVtcy5hcHBlbmQoY2xpY2thYmxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLm1lbnUuYXBwZW5kKGNsaWNrYWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWVudS5hcHBlbmQodGhpcy4jbWVudUl0ZW1zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tZW51O1xyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBBZGQgZWxlbWVudHMgdG8gYSBnaXZlbiBtZW51LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TWVudUJhcn0gbWVudSAtIFRoZSBtZW51IHRvIHB1dCBlbGVtZW50cyBvbi5cclxuICAgKiBAcGFyYW0geyp9IGVsZW1lbnRzIC0gVGhlIGVsZW1lbnRzIHRvIGFkZC4gRm9sbG93IGEgdGVtcGxhdGUgbGlrZSBuYXZFbGVtZW50cy5qcyxcclxuICAgKiBhcyBpbiwgYW4gb2JqZWN0IHdpdGggYSB0eXBlLCB0ZXh0LCBhbmQgaHJlZiBhdHRyaWJ1dGVzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRFbGVtZW50c1RvSGVhZGVyKG1lbnUsIGVsZW1lbnRzKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWxlbS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImxvZ29cIjpcclxuICAgICAgICAgIG1lbnUuYWRkTG9nbyhlbGVtLnRleHQsIGVsZW0uaWNvbiwgZWxlbS5ocmVmKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5rXCI6XHJcbiAgICAgICAgICBtZW51LmFkZExpbmsoZWxlbS50ZXh0LCBlbGVtLmhyZWYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRyb3Bkb3duXCI6XHJcbiAgICAgICAgICBtZW51LmFkZERyb3Bkb3duKGVsZW0udGV4dCwgZWxlbS5saW5rcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtlbGVtLnR5cGV9IGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCB5ZXRgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=