// css imports
import './index.css';
import './reset.css';
// js imports
import MenuBar from './dropdown';
import NAV_ELEMENTS from './navElements';

(function main() {

  const menubar = new MenuBar("dropdown-menu");

  MenuBar.addElementsToHeader(menubar, NAV_ELEMENTS);

  document.body.append(menubar.getMenu());
}());