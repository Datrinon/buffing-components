// txt imports
import SAMPLE_TEXT from './lorem.txt';
// css imports
import './reset.css';
import './index.css';
import './dropdown.css';
// js imports
import MenuBar from './dropdown';
import NAV_ELEMENTS from './navElements';

const loadGenericBody = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const description = document.createElement("p");

  h1.textContent = "Lorem Ipsum";
  description.textContent = SAMPLE_TEXT; 
  
  div.classList.add("sample-text");

  div.append(h1, description);

  return div;
}

(function main() {

  const menubar = new MenuBar("dropdown-menu");

  MenuBar.addElementsToHeader(menubar, NAV_ELEMENTS);

  document.body.append(menubar.getMenu(), loadGenericBody());
}());

// TODO List.
//// 1. Dropdown menu
// 2. Mobile menu.
/*
Implement a mobile menu in the style of Microsoft.
3-Line menu around 860px
Center logo and display the three line on the left
3-Line menu covers the screen
3-Line turns into an X when active
Adjust CSS positioning for dropdown menus (not absolute, turn into regular).
*/