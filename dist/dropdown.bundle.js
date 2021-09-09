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
        console.log("mobile breakpoint active, Dan hide menu when clicked off...");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFdBQVc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxnQkFBZ0IsS0FBSztBQUNwQyxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUmVwcmVzZW50cyBhIE1lbnVCYXIuIENvbnRhaW5zIG9wZXJhdGlvbnMgZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgTWVudUJhci5cclxuICogRmlyc3QsIGFkZCBlbGVtZW50cyB0byBpdCB1c2luZyB0aGUgdmFyaW91cyBhZGQqKCkgbWV0aG9kcy4gVGhlbiwgdXNlXHJcbiAqIGdldE1lbnVCYXIoKSB0byBnZXQgdGhlIGVsZW1lbnQgcmVmZXJlbmNlLCB3aGljaCB5b3UgY2FuIHVzZSB0aGF0IHRvIGFwcGVuZCB0byBcclxuICogYSBwYXJlbnQgb2YgeW91ciBjaG9pY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIHtcclxuICBcclxuICAvKipcclxuICAgKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIE1lbnVCYXIsIHNpbmNlIG9ubHkgb25lIE1lbnVCYXIgc2hvdWxkIGV2ZXIgZXhpc3Qgb24gYSB3ZWJwYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lbnUgZWxlbWVudC5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICovXHJcbiAgbWVudTtcclxuICAvKipcclxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY2xpY2thYmxlIGVsZW1lbnRzIG9uIHRoZSBtZW51LlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gICNjbGlja2FibGVzO1xyXG4gICNtZW51SXRlbXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBicmVha3BvaW50IHRvIGJlIHNldCB0byBjb252ZXJ0IHRoZSBtZW51IGJhciB0byBhIG1vYmlsZSBmb3JtYXQuIEluIHB4LlxyXG4gICAqIFdoZW4gYSBNZW51QmFyIHJlZmVyZW5jZSBpcyBpbml0aWFsaXplZCwgdGhlIGRlZmF1bHQgYnJlYWtwb2ludCBpcyA4NjBweC5cclxuICAgKiBAdHlwZSB7TWVkaWFRdWVyeUxpc3R9XHJcbiAgICovXHJcbiAgbW9iaWxlQnJlYWtwb2ludExpc3RlbmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGJyZWFrcG9pbnQgPSA4NjApIHtcclxuICAgIGlmIChNZW51QmFyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBNZW51QmFyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcbiAgICBNZW51QmFyLiNpbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuI21lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICB0aGlzLiNtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHgpYCk7XHJcbiAgICB0aGlzLiNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKTtcclxuXHJcbiAgICB0aGlzLiNhZGRIYW1idXJnZXJJY29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgaGFtYnVyZ2VyIGljb24gdG8gY2xpY2thYmxlcy5cclxuICAgKi9cclxuICAjYWRkSGFtYnVyZ2VySWNvbigpIHtcclxuICAgIGNvbnN0IHN2Z05zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCBcInN2Z1wiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCA4MFwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCA0MCk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDQwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBsZXQgeSA9IDMwICogaTtcclxuICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJyZWN0XCIpO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDEwMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDIwKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChsaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyZWQhIVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gICNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKSB7XHJcbiAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICB0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGlzIDg2MHB4IG9yIGJlbG93Li4uOlxyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBhY3RpdmUsIERhbiBoaWRlIG1lbnUgd2hlbiBjbGlja2VkIG9mZi4uLlwiKTtcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBpbmFjdGl2ZSwgY29sbGFwc2luZyBhbnkgYWN0aXZlIG1lbnVzLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGFueXRoaW5nIGlmIG5vIGRyb3Bkb3duIGlzIGFjdGl2ZS5cclxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHsgXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG9ubHkgY2xvc2Ugd2hlbiB0aGUgZWxlbWVudCBjbGlja2VkIGlzIG5vdCB0aGUgZHJvcGRvd24gaXRzZWxmIG9yIGl0cyBjaGlsZC5cclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLm1lbnViYXItZHJvcGRvd25cIikgJiYgIWFjdGl2ZS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgbGluayB0byB0aGUgbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIGxpbmsuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBUaGUgcGF0aCB0aGUgbGluayBzaG91bGQgcG9pbnQgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuXHJcbiAgICovXHJcbiAgYWRkTGluayhuYW1lLCBocmVmLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChsaW5rLCBjbGFzc05hbWVzLCBcIm1lbnViYXItbGluay1jbGlja2FibGVcIik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSB0ZXh0IGxvZ28gdG8gdGhlIG1lbnUuIFVzZWZ1bCBmb3IgYSBjb21wYW55IGxvZ28uXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBBY2NvbXBhbnlpbmcgdGV4dCB0byBkaXNwbGF5IHdpdGggdGhlIGljb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBGaWxlcGF0aCByZXByZXNlbnRpbmcgYW4gaWNvbi4gTnVsbCBpZiB5b3UgZG9uJ3QgbmVlZCBhbiBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLiBcclxuICAgKi9cclxuICBhZGRMb2dvKHRleHQsIGljb249bnVsbCwgaHJlZj1cIlwiLCAuLi5jbGFzc05hbWVzKXtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGxvZ28sIGNsYXNzTmFtZXMsIFwic2l0ZS1sb2dvXCIpO1xyXG5cclxuICAgIGlmIChpY29uICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGljb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhpY29uKTtcclxuICAgICAgbG9nby5hcHBlbmQoaWNvbkVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRMb2dvLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBsb2dvLmFwcGVuZCh0ZXh0TG9nbyk7XHJcblxyXG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChsb2dvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGRyb3Bkb3duIG1lbnUgYmFzZWQgb24gYSBnaXZlbiBhcnJheSBvZiBsaW5rcy5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAqIEBwYXJhbSB7IHtcIm5hbWVcIiA6IFwiaHJlZlwifVtdIH0gbGlua3MgLSBBbiBhcnJheSBvZiBuYW1lOmhyZWYgb2JqZWN0IHBhaXJzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZSAtIE9wdGlvbmFsIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuXHJcbiAgICovXHJcbiAgYWRkRHJvcGRvd24obmFtZSwgbGlua3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vIFRocmVlIGNvbXBvbmVudHMgdG8gYSBkcm9wZG93biwgdGhlIGxhYmVsLCB0aGUgbmF2bGlua3MsIGFuZCB0aGUgYXJyb3cuXHJcbiAgICBjb25zdCBkcm9wRG93bkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgZHJvcERvd25MaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGRyb3BEb3duQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGRyb3BEb3duQ29udGFpbmVyLCBjbGFzc05hbWVzLCBcIm1lbnViYXItZHJvcGRvd25cIik7XHJcbiAgICBkcm9wRG93bkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1sYWJlbFwiKTtcclxuICAgIGRyb3BEb3duTGlua3MuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWxpbmtzXCIsIFwiY29sbGFwc2VkXCIpO1xyXG4gICAgZHJvcERvd25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3dcIiwgXCJkb3duXCIpO1xyXG5cclxuICAgIGxpbmtzLmZvckVhY2goKHBhaXIpID0+IHtcclxuICAgICAgbGV0IGxpbmtXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBcclxuICAgICAgbGluay50ZXh0Q29udGVudCA9IHBhaXIudGV4dDtcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHBhaXIuaHJlZik7XHJcblxyXG4gICAgICBsaW5rV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWVudWJhci1kcm9wZG93bi1saW5rXCIpO1xyXG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmQobGluayk7XHJcbiAgICAgIGRyb3BEb3duTGlua3MuYXBwZW5kKGxpbmtXcmFwcGVyKTtcclxuICAgIH0pO1xyXG4gICAgZHJvcERvd25MYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgZHJvcERvd25MYWJlbC5hcHBlbmQoZHJvcERvd25BcnJvdyk7XHJcbiAgICBkcm9wRG93bkNvbnRhaW5lci5hcHBlbmQoZHJvcERvd25MYWJlbCwgZHJvcERvd25MaW5rcyk7XHJcblxyXG4gICAgZHJvcERvd25MYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcclxuICAgICAgICAoZSkgPT4gdGhpcy4jdG9nZ2xlRHJvcGRvd24uY2FsbCh0aGlzLCBlKSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGRyb3BEb3duQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIGNsb3NpbmcgYW55IGFjdGl2ZSBkcm9wZG93bnMsIGlmIHRoZXkncmUgYWN0aXZlIG9yIHRoZSB1c2VyIGNsaWNrcyBcclxuICAgKiBhbnkgYXJlYSBvdXRzaWRlIG9mIGl0IG9uIHRoZSB3aW5kb3cuXHJcbiAgICovXHJcbiAgc3RhdGljIGNsb3NlQWN0aXZlRHJvcGRvd24oKSB7XHJcbiAgICAvLyBJZiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgdGhhdCBpc24ndCB0aGUgY3VycmVudCBhY3RpdmUgZHJvcGRvd24uLi5cclxuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duID0gYWN0aXZlRHJvcGRvd25CdG4ucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1saW5rc1wiKTtcclxuICAgIGNvbnN0IGFjdGl2ZUFycm93ID0gYWN0aXZlRHJvcGRvd25CdG4ucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcclxuICAgIFxyXG4gICAgLy8gY29sbGFwc2UgaXQuXHJcbiAgICBhY3RpdmVEcm9wZG93bkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgYWN0aXZlRHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIGFjdGl2ZUFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cFwiKTtcclxuICAgIGFjdGl2ZUFycm93LmNsYXNzTGlzdC5hZGQoXCJkb3duXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayB0byBzaG93IGEgZHJvcGRvd24gbWVudS4gQXNzaWduIHRoaXMgdG8gYnV0dG9ucyBvbiB0aGUgbmF2YmFyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Kn0gZSAtIEV2ZW50LiBVc2VkIHRvIGdldCB0aGUgY3VycmVudCBsaW5rIGJlaW5nIGhvdmVyZWQgb3ZlcixcclxuICAgKiBhbmQgdGhlbiB1c2UgaXQgdG8gZmluZCB0aGUgZHJvcGRvd24gbGlua3MuXHJcbiAgICovXHJcbiAgI3RvZ2dsZURyb3Bkb3duKGUpIHtcclxuICAgIFxyXG4gICAgbGV0IGRyb3Bkb3duUm9vdCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIHdoaWxlKCFkcm9wZG93blJvb3QubWF0Y2hlcyhcIi5tZW51YmFyLWRyb3Bkb3duXCIpKSB7XHJcbiAgICAgIGRyb3Bkb3duUm9vdCA9IGRyb3Bkb3duUm9vdC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIubWF0Y2hlcykge1xyXG4gICAgICBjb25zdCBhY3RpdmVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICAgIGlmIChhY3RpdmVEcm9wZG93biAhPT0gbnVsbCAmJiAhYWN0aXZlRHJvcGRvd24uY29udGFpbnMoZHJvcGRvd25Sb290KSkge1xyXG4gICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25MaXN0ID0gZHJvcGRvd25Sb290LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duQXJyb3cgPSBkcm9wZG93blJvb3QucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcclxuICAgIFxyXG4gICAgZHJvcGRvd25Sb290LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICBkcm9wZG93bkFycm93LmNsYXNzTGlzdC50b2dnbGUoXCJkb3duXCIpO1xyXG4gICAgZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwidXBcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG1lbnUgd2l0aCBhbGwgdGhlIGNsaWNrYWJsZXMgdGhhdCBoYXMgYmVlbiBhZGRlZCB0byBpdC5cclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gbWVudS5cclxuICAgKi9cclxuICBnZXRNZW51KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5mb3JFYWNoKChjbGlja2FibGUpID0+IHtcclxuICAgICAgaWYgKGNsaWNrYWJsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51YmFyLWxpbmstY2xpY2thYmxlXCIpXHJcbiAgICAgICAgICB8fCBjbGlja2FibGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudWJhci1kcm9wZG93blwiKSkge1xyXG4gICAgICAgICAgICBzZWxmLiNtZW51SXRlbXMuYXBwZW5kKGNsaWNrYWJsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5tZW51LmFwcGVuZChjbGlja2FibGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1lbnUuYXBwZW5kKHRoaXMuI21lbnVJdGVtcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWVudTtcclxuICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQWRkIGVsZW1lbnRzIHRvIGEgZ2l2ZW4gbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge01lbnVCYXJ9IG1lbnUgLSBUaGUgbWVudSB0byBwdXQgZWxlbWVudHMgb24uXHJcbiAgICogQHBhcmFtIHsqfSBlbGVtZW50cyAtIFRoZSBlbGVtZW50cyB0byBhZGQuIEZvbGxvdyBhIHRlbXBsYXRlIGxpa2UgbmF2RWxlbWVudHMuanMsXHJcbiAgICogYXMgaW4sIGFuIG9iamVjdCB3aXRoIGEgdHlwZSwgdGV4dCwgYW5kIGhyZWYgYXR0cmlidXRlcy5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkRWxlbWVudHNUb0hlYWRlcihtZW51LCBlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsZW0udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJsb2dvXCI6XHJcbiAgICAgICAgICBtZW51LmFkZExvZ28oZWxlbS50ZXh0LCBlbGVtLmljb24sIGVsZW0uaHJlZik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiOlxyXG4gICAgICAgICAgbWVudS5hZGRMaW5rKGVsZW0udGV4dCwgZWxlbS5ocmVmKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkcm9wZG93blwiOlxyXG4gICAgICAgICAgbWVudS5hZGREcm9wZG93bihlbGVtLnRleHQsIGVsZW0ubGlua3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7ZWxlbS50eXBlfSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgeWV0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9