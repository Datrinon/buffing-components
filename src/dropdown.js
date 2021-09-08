/**
 * Represents a MenuBar. Contains operations for adding elements to the MenuBar.
 * First, add elements to it using the various add*() methods. Then, use
 * getMenuBar() to get the element reference, which you can use that to append to 
 * a parent of your choice.
 */
export class MenuBar {
  
  /**
   * The singleton instance of MenuBar, since only one MenuBar should ever exist on a webpage.
   */
  static _instance;
  /**
   * The menu element.
   * @type {HTMLElement}
   */
  _menu;
  /**
   * An array containing all the clickable elements on the menu.
   * @type {HTMLElement[]}
   */
  _clickables;

  constructor(className) {
    if (MenuBar._instance !== undefined) {
      return MenuBar._instance;
    } 
    MenuBar._instance = this;

    this.menu = document.createElement("header");
    this.menu.classList.add(className);

    this._clickables = [];
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {*} classNames - The classnames to give the element.
   * @param {*} defaultClass - The classname that said element should always have.
   * */ 
  _addClassesToElement(elem, classNames, defaultClass) {
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
    this._addClassesToElement(link, classNames, "menubar-link-clickable");

    this._clickables.push(link);
  }

  /**
   * Create and add an icon to the menu. Useful for a company logo.
   * 
   * @param {string} icon - The icon that should be displayed. 
   * @param {string} text - Accompanying text to display with the icon.
   */
  addIcon(){
    // TODO STUB. To be completed later!!
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
    // Three components.
    const dropDownLabel = document.createElement("h2");
    const dropDownLinks = document.createElement("ul");
    const dropDownArrow = document.createElement("svg");

    this._addClassesToElement(dropDownContainer, classNames, "menubar-dropdown");
    dropDownLinks.classList.add("collapsed");

    links.forEach((pair) => {
      let linkWrapper = document.createElement("li");
      let link = document.createElement("a");
      
      link.textContent = pair.name;
      link.setAttribute("href", pair.href);

      linkWrapper.classList.append("menubar-dropdown-link");
      linkWrapper.append(link);
      dropDownLinks.append(linkWrapper);
    });

    dropDownLabel.textContent = name;

    dropDownContainer.append(dropDownLabel, dropDownLinks, dropDownArrow);

    this._clickables.push(dropDownContainer);
  }

  get menu() {
    let self = this;
    // TODO: Come back and verify this method if you get duplicate elements, shouldn't based on the nature of the method.
    self._clickables.forEach((clickable) => self.menu.append(clickable));

    return this.menu;
  }
}
