# Using a Dropdown Menu Component
0. Obtain prerequisite files:
- dropdown.js
- dropdown.css

1. Import into your index file.
```js
import MenuBar from './dropdown';
import NAV_ELEMENTS from './navElements';
```

2. The MenuBar takes in an array of objects and converts them into link elements. Recommend creating a separate file to store the object. Make sure the objects in the array follow the following format. The order in which you write them will be the order they're displayed on the header.

  Logo types:
  ```js
    {
      type: "logo",
      text: "Raven Rock Software",
      icon: logo
    }
  ```
  Link types:
  ```js
    {
      type: "link",
      text: "Home",
      href: "#"
    },
  ```
  Dropdown types:
  ```js
    {
      type: "dropdown",
      text: "Products",
      links: [
        {
          text: "Product 1",
          href: "#"
        },
      ...
      ]
  ```
    
3. Instantiate a `MenuBar` object. Then, call `MenuBar.addElementsToHeader(menubar, NAV_ELEMENTS);` to add elements to the header. Replace `NAV_ELEMENTS` with a reference to the constnats you made in the preivous step.

4. Use `getMenu()` to get the MenuBar's DOM representation, then `append` to wherever you want.

