// css imports
import './index.css';
// js imports
import { MenuBar } from './dropdown';
import { NAV_ELEMENTS } from './navElements';

(function main() {

  /**
   * Renders elements to a given menu.
   * 
   * @param {*} dropdown - An array of objects containing the type of link
   * and the name.
   * @param {*} elements 
   */
  const renderToHeader = (dropdown, elements) => {
    elements.foreach((elem) => {
      switch (elem.type) {
        case "logo":
          break;
        case "link":
          break;
        case "dropdown":
          break;
        default: {
          console.log(`${elem.type} has not been implemented yet`);
        }
      }
      // use switch to determine type
      // then in switch body dropdown
    });
  };

  const menubar = new MenuBar();

  // Icon, Home, Projects [Dropdown], About, Contact Me

});