// css imports
import './index.css';
// js imports
import MenuBar from './dropdown';
import NAV_ELEMENTS from './navElements';

(function main() {

  /**
   * Renders elements to a given menu.
   * 
   * @param {MenuBar} menu - The menu to put elements on.
   * @param {*} elements - The elements to render. Use navElements.js.
   */
  const renderToHeader = (menu, elements) => {
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
  };

  const menubar = new MenuBar("dropdown-menu");

  renderToHeader(menubar, NAV_ELEMENTS);

  document.body.append(menubar.getMenu());
}());