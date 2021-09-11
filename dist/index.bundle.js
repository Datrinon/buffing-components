/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dropdown.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dropdown.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --logo-font: \"Julius Sans One\";\r\n  --header-font: \"Didact Gothic\";\r\n}\r\n\r\n.dropdown-menu {\r\n  font-family: var(--header-font);\r\n  padding: 5px 0;\r\n}\r\n\r\n.site-logo {\r\n  font-family: var(--logo-font);\r\n  margin: 0 15px;\r\n  font-size: 110%;\r\n  width: 180px;\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.site-logo img {\r\n  width: 50px;\r\n  margin: 0 5px;\r\n  display: block;\r\n}\r\n\r\n.site-logo h1 {\r\n  width: 50%;\r\n  align-self:center;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.menubar-link-clickable, .menubar-dropdown {\r\n  padding: 10px;\r\n  margin: 0 5px;\r\n  font-size: 125%;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: black;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n}\r\n\r\n.menubar-dropdown-link {\r\n  padding: 10px 2px;\r\n}\r\n\r\n.menubar-dropdown-link:hover {\r\n  background-color: slategray;\r\n}\r\n\r\n.menubar-dropdown-link a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.menubar-dropdown .arrow {\r\n  position: relative;\r\n  left: 5px;\r\n  bottom: 1px;\r\n}\r\n\r\n.dropdown-menu > * {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.arrow {\r\n  border: solid black;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n}\r\n\r\n.down {\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.up {\r\n  transform: rotate(-135deg);\r\n  -webkit-transform: rotate(-135deg);\r\n}                                         \r\n\r\n.dropdown-links {\r\n  max-height: fit-content;\r\n  display: unset;\r\n  position: absolute;\r\n  top: 5px;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  width: 200%;\r\n  top: 105%;\r\n  left: 0;\r\n  animation: popIn 0.25s ease-in;\r\n}\r\n\r\n@keyframes popIn {\r\n  0% {\r\n    opacity: 0.4;\r\n    transform-origin: top left;\r\n    transform: translate(0, -15%);\r\n  }\r\n  50% {\r\n    transform: translate(0, -3%);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.menu-icon {\r\n  display: none;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  body {\r\n    /* Debug */\r\n    color: red;  \r\n  }\r\n\r\n  .site-logo {\r\n    margin: 0 auto;  \r\n  }\r\n\r\n  .dropdown-menu {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"icon logo\"\r\n    \"menu menu\";\r\n    grid-template-columns: 40px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n  }\r\n  \r\n  .menu-icon {\r\n    border: 1px solid red;\r\n    display: unset;\r\n    margin: 0 10px;\r\n    grid-area: icon;\r\n  }\r\n\r\n  .navigation {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: white;\r\n    border: 1px solid red;\r\n    grid-area: menu;\r\n    top: 100%;\r\n    width: 100vw;\r\n    max-height: fit-content;\r\n    animation: popIn 1s;\r\n  }\r\n\r\n  .dropdown-links {\r\n    position: revert;\r\n    border: revert;\r\n    animation: popIn 1s;\r\n  }\r\n  \r\n  .menubar-dropdown-link {\r\n    border-bottom: 1px solid grey;\r\n  }\r\n\r\n}\r\n\r\n.collapsed {\r\n  max-height: 0px;\r\n  display: none;\r\n}\r\n\r\n/*\r\nTransfer the nav element using a fixed position to remove it from the flow...\r\nto the left side.\r\n*/\r\n", "",{"version":3,"sources":["webpack://./src/dropdown.css"],"names":[],"mappings":"AAIA;EACE,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;EACd,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;;AAErB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,OAAO;EACP,8BAA8B;AAChC;;AAEA;EACE;IACE,YAAY;IACZ,0BAA0B;IAC1B,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb;;eAEW;IACX,+BAA+B;IAC/B,4BAA4B;EAC9B;;EAEA;IACE,qBAAqB;IACrB,cAAc;IACd,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,6BAA6B;EAC/B;;AAEF;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;;;CAGC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');\r\n\r\n\r\n:root {\r\n  --logo-font: \"Julius Sans One\";\r\n  --header-font: \"Didact Gothic\";\r\n}\r\n\r\n.dropdown-menu {\r\n  font-family: var(--header-font);\r\n  padding: 5px 0;\r\n}\r\n\r\n.site-logo {\r\n  font-family: var(--logo-font);\r\n  margin: 0 15px;\r\n  font-size: 110%;\r\n  width: 180px;\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.site-logo img {\r\n  width: 50px;\r\n  margin: 0 5px;\r\n  display: block;\r\n}\r\n\r\n.site-logo h1 {\r\n  width: 50%;\r\n  align-self:center;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.menubar-link-clickable, .menubar-dropdown {\r\n  padding: 10px;\r\n  margin: 0 5px;\r\n  font-size: 125%;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: black;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n}\r\n\r\n.menubar-dropdown-link {\r\n  padding: 10px 2px;\r\n}\r\n\r\n.menubar-dropdown-link:hover {\r\n  background-color: slategray;\r\n}\r\n\r\n.menubar-dropdown-link a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.menubar-dropdown .arrow {\r\n  position: relative;\r\n  left: 5px;\r\n  bottom: 1px;\r\n}\r\n\r\n.dropdown-menu > * {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.arrow {\r\n  border: solid black;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n}\r\n\r\n.down {\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.up {\r\n  transform: rotate(-135deg);\r\n  -webkit-transform: rotate(-135deg);\r\n}                                         \r\n\r\n.dropdown-links {\r\n  max-height: fit-content;\r\n  display: unset;\r\n  position: absolute;\r\n  top: 5px;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  width: 200%;\r\n  top: 105%;\r\n  left: 0;\r\n  animation: popIn 0.25s ease-in;\r\n}\r\n\r\n@keyframes popIn {\r\n  0% {\r\n    opacity: 0.4;\r\n    transform-origin: top left;\r\n    transform: translate(0, -15%);\r\n  }\r\n  50% {\r\n    transform: translate(0, -3%);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.menu-icon {\r\n  display: none;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  body {\r\n    /* Debug */\r\n    color: red;  \r\n  }\r\n\r\n  .site-logo {\r\n    margin: 0 auto;  \r\n  }\r\n\r\n  .dropdown-menu {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"icon logo\"\r\n    \"menu menu\";\r\n    grid-template-columns: 40px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n  }\r\n  \r\n  .menu-icon {\r\n    border: 1px solid red;\r\n    display: unset;\r\n    margin: 0 10px;\r\n    grid-area: icon;\r\n  }\r\n\r\n  .navigation {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: white;\r\n    border: 1px solid red;\r\n    grid-area: menu;\r\n    top: 100%;\r\n    width: 100vw;\r\n    max-height: fit-content;\r\n    animation: popIn 1s;\r\n  }\r\n\r\n  .dropdown-links {\r\n    position: revert;\r\n    border: revert;\r\n    animation: popIn 1s;\r\n  }\r\n  \r\n  .menubar-dropdown-link {\r\n    border-bottom: 1px solid grey;\r\n  }\r\n\r\n}\r\n\r\n.collapsed {\r\n  max-height: 0px;\r\n  display: none;\r\n}\r\n\r\n/*\r\nTransfer the nav element using a fixed position to remove it from the flow...\r\nto the left side.\r\n*/\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Trebuchet MS';\r\n}\r\n.sample-text {\r\n  width: 50vw;\r\n  max-width: 500px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.sample-text h1 {\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .sample-text {\r\n    width: 80vw;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["body {\r\n  font-family: 'Trebuchet MS';\r\n}\r\n.sample-text {\r\n  width: 50vw;\r\n  max-width: 500px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.sample-text h1 {\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .sample-text {\r\n    width: 80vw;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/slider.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/slider.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slider {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  width: 90vw;\r\n  height: 50vh;\r\n  max-height: 500px;\r\n  position: relative;\r\n}\r\n\r\n.slider-img-frame {\r\n  height: 100%;\r\n}\r\n\r\n.slider .image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n}\r\n\r\n.slider-img-frame figcaption {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  color: white;\r\n  text-shadow: 1px 1px BLACK;\r\n\r\n}\r\n\r\n.caption-title {\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n}\r\n\r\n.slider-controls {\r\n  border: 1px solid red;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"prev next\"\r\n  \"dots pause\"\r\n  ;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 95% 5%;\r\n}\r\n\r\n.slider-arrow {\r\n  border: solid white;\r\n  border-width: 0 10px 10px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  width: 25px;\r\n  height: 25px;\r\n  align-self: center;\r\n  margin: 25px;\r\n}\r\n\r\n.slider-arrow:hover {\r\n  box-shadow: 2px 2px 3px darkgrey;\r\n}\r\n\r\n.slider-arrow.left {\r\n  grid-area: prev;\r\n}\r\n\r\n.slider-arrow.right {\r\n  grid-area: next;\r\n  justify-self: end;\r\n}\r\n\r\n.slider-toggle {\r\n  grid-area: pause;\r\n  justify-self: start;\r\n  align-self: center;\r\n  position: relative;\r\n  left: 25px;\r\n}\r\n\r\n.pause {\r\n  width: 0;\r\n  height: 20px;\r\n  border-width: 0px 5px 0px 5px;\r\n  border-color: white;\r\n  border-style: solid;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0 5px 0 0;\r\n\r\n}\r\n\r\n.play {\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 12px 12px 12px 12px;\r\n  border-color: transparent transparent transparent white;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n.left {\r\n  transform: rotate(135deg);\r\n  -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.right {\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.dot-controls {\r\n  grid-area: dots;\r\n  justify-self: end;\r\n  align-self: baseline;\r\n  position: relative;\r\n}\r\n\r\n.current-dot {\r\n  background-color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/slider.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,0BAA0B;;AAE5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb;;;EAGA;EACA,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;;AAEpB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,iCAAiC;EACjC,uDAAuD;EACvD,6BAA6B;EAC7B,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".slider {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  width: 90vw;\r\n  height: 50vh;\r\n  max-height: 500px;\r\n  position: relative;\r\n}\r\n\r\n.slider-img-frame {\r\n  height: 100%;\r\n}\r\n\r\n.slider .image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n}\r\n\r\n.slider-img-frame figcaption {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  color: white;\r\n  text-shadow: 1px 1px BLACK;\r\n\r\n}\r\n\r\n.caption-title {\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n}\r\n\r\n.slider-controls {\r\n  border: 1px solid red;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"prev next\"\r\n  \"dots pause\"\r\n  ;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 95% 5%;\r\n}\r\n\r\n.slider-arrow {\r\n  border: solid white;\r\n  border-width: 0 10px 10px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  width: 25px;\r\n  height: 25px;\r\n  align-self: center;\r\n  margin: 25px;\r\n}\r\n\r\n.slider-arrow:hover {\r\n  box-shadow: 2px 2px 3px darkgrey;\r\n}\r\n\r\n.slider-arrow.left {\r\n  grid-area: prev;\r\n}\r\n\r\n.slider-arrow.right {\r\n  grid-area: next;\r\n  justify-self: end;\r\n}\r\n\r\n.slider-toggle {\r\n  grid-area: pause;\r\n  justify-self: start;\r\n  align-self: center;\r\n  position: relative;\r\n  left: 25px;\r\n}\r\n\r\n.pause {\r\n  width: 0;\r\n  height: 20px;\r\n  border-width: 0px 5px 0px 5px;\r\n  border-color: white;\r\n  border-style: solid;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0 5px 0 0;\r\n\r\n}\r\n\r\n.play {\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 12px 12px 12px 12px;\r\n  border-color: transparent transparent transparent white;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n.left {\r\n  transform: rotate(135deg);\r\n  -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.right {\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.dot-controls {\r\n  grid-area: dots;\r\n  justify-self: end;\r\n  align-self: baseline;\r\n  position: relative;\r\n}\r\n\r\n.current-dot {\r\n  background-color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dropdown.css":
/*!**************************!*\
  !*** ./src/dropdown.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./dropdown.css */ "./node_modules/css-loader/dist/cjs.js!./src/dropdown.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/slider.css":
/*!************************!*\
  !*** ./src/slider.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/slider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./butte.jpg": "./src/images/butte.jpg",
	"./capitol-reef.jpg": "./src/images/capitol-reef.jpg",
	"./grand-teton.jpg": "./src/images/grand-teton.jpg",
	"./open-road.jpg": "./src/images/open-road.jpg",
	"./sandstone.jpg": "./src/images/sandstone.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/navElements.js":
/*!****************************!*\
  !*** ./src/navElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");



const NAV_ELEMENTS = [
  {
    type: "logo",
    text: "Raven Rock Software",
    icon: _logo_png__WEBPACK_IMPORTED_MODULE_0__,
    href: ""
  },
  {
    type: "dropdown",
    text: "Products",
    links: [
      {
        text: "ConsumerSoft Trader",
        href: "#"
      },
      {
        text: "Options Analyzer",
        href: "#",
      },
      {
        text: "Briskbooks Budgeting",
        href: "#",
      },
      {
        text: "Slicken Money Manager",
        href: "#"
      }
    ]
  },
  {
    type: "dropdown",
    text: "Locations",
    links: [
      {
        text: "Wilshire",
        href: "#"
      },
      {
        text: "Almond Peak",
        href: "#"
      },
    ]
  },
  {
    type: "link",
    text: "Our Story",
    href: "#"
  },
  {
    type: "link",
    text: "Contact Us",
    href: "#"
  },
  {
    type: "link",
    text: "Support",
    href: "#"
  }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NAV_ELEMENTS);

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  
  /**
   * The container in which possesses the entire slider apparatus.
   */
  #slider;
  /**
   * The container which presents the image.
   * @type {HTMLElement}
   */
  #frame;
  /**
   * The pictures which will be used in the slider.
   * @type {{path: string, title: string, caption : string}[]}
   */
  #pictures;
  /**
   * The duration to show each picture.
   * @type {number}
   */
  #duration;
  /**
   * True if the slideshow is currently paused.
   * @type {boolean}
   */
  #isPaused;
  
  /**
   * A reference to the controls container.
   */
  #controls;

  /**
   * Index of the current picture the slideshow is on.
   * @type {number}
   */
  #currentPicIndex;

  /**
   * Create a slider. There are three components that will be generated. 1) the
   * container, 2) the frame where pictures are displayed, and 3) the controls.
   * 
   * @param {{path: string, title: string, caption : string}[]} pictures 
   * @param {number} duration 
   */
  constructor(pictures, duration) {
    this.#pictures = pictures;
    this.#duration = duration;
    this.#isPaused = false;
    this.#currentPicIndex = 0;
    
    this.#slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.#frame = document.createElement("figure");
    this.#addClassesToElement(this.#frame, "slider-img-frame");
    
    this.#controls = document.createElement("section");
    this.#addClassesToElement(this.#controls, "slider-controls");
    this.#addControlsToSlider();

    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    const figCaptionTitle = document.createElement("p");
    const figCaptionText = document.createElement("p");
    
    this.#addClassesToElement(img, "image");
    this.#addClassesToElement(figCaptionTitle, "caption-title");
    this.#addClassesToElement(figCaptionText, "caption-text");
    
    figCaption.append(figCaptionTitle, figCaptionText);
    this.#frame.append(img, figCaption);

    this.#slider.append(this.#frame, this.#controls);

    this.#loadImage(this.#currentPicIndex);
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  #addClassesToElement(elem, defaultClass, ...classNames) {
    classNames.push(defaultClass);
    elem.classList.add(...classNames);
  }

  set pictures(pictures){
    this.#pictures = pictures;
    // TODO
    // Test and make sure this
    this.#displayClickableDots();
  }

  set duration(seconds) {
    this.#duration = seconds;
  }

  #addControlsToSlider() {
    const prev = document.createElement("i");
    const next = document.createElement("i");
    const dotControls = document.createElement("div");
    const toggle = document.createElement("button");
    
    this.#addClassesToElement(prev, "slider-arrow", "left");
    this.#addClassesToElement(next, "slider-arrow", "right");
    this.#addClassesToElement(dotControls, "dot-controls");
    this.#addClassesToElement(toggle, "slider-toggle", "pause");

    this.#controls.append(prev, next, dotControls, toggle);
    this.#displayClickableDots();

    prev.addEventListener("click", () => this.#reverseSlider.call(this));
    next.addEventListener("click", () => this.#advanceSlider.call(this));
    toggle.addEventListener("click", () => this.#pauseSlideshow.call(this));
  }

  #pauseSlideshow() {
    this.#isPaused = !this.#isPaused;

    this.#controls.querySelector(".slider-toggle").classList.toggle("pause");
    this.#controls.querySelector(".slider-toggle").classList.toggle("play");
  } 

  /**
   * Displays clickable dots on the control section of the slider.
   */
  #displayClickableDots() {

    const dotControls = this.#controls.querySelector(".dot-controls");

    // remove any existing dots. needed if pictures gets changed later.
    while(dotControls.firstChild){
      dotControls.removeChild(dotControls.firstChild);
    }

    this.#pictures.forEach((pic, index) => {
      const dot = document.createElement("button");
      this.#addClassesToElement(dot, "dot-index");
      
      dot.addEventListener("click", () => {
        this.#loadImage.call(this, index);
        this.#currentPicIndex = index;
      });

      dotControls.append(dot);
    });
  }

  /**
   * Loads an image based on a given index, and then highlights the corresponding
   * dot.
   */
  #loadImage(index) {
    const img = this.#frame.querySelector(".image");
    const figCaptionTitle = this.#frame.querySelector(".caption-title");
    const figCaptionText = this.#frame.querySelector(".caption-text");
    const picRef = this.#pictures[index];

    img.src = picRef.path;
    figCaptionTitle.textContent = picRef.title;
    figCaptionText.textContent = picRef.caption;

    const prevImgDot = this.#controls.querySelector(`.dot-index.current-dot`);
    if (prevImgDot !== null) {
      prevImgDot.classList.remove("current-dot");
    } 

    this.#controls
        .querySelector(`.dot-index:nth-child(${index+1})`)
        .classList.add("current-dot");
  }

  #advanceSlider() {
    if (this.#currentPicIndex < (this.#pictures.length - 1)) {
      this.#currentPicIndex += 1;
    } else {
      this.#currentPicIndex = 0;
    }

    this.#loadImage(this.#currentPicIndex);
  }

  #reverseSlider() {
    if (this.#currentPicIndex > 0) {
      this.#currentPicIndex -= 1;
    } else {
      this.#currentPicIndex = this.#pictures.length - 1;
    }

    console.log(this.#currentPicIndex);
    this.#loadImage(this.#currentPicIndex);
  }

  /**
   * Get a read-only Element reference to the slider. For appending to elements.
   * @returns {HTMLElement}
   */
  get slider() {
    return this.#slider;
  }

  playSlideshow() {
    let self = this;
  
    // play it once every X seconds thereafter.
    setInterval(() => {
      if (!self.#isPaused) {
        self.#advanceSlider();
      }
    }, this.#duration * 1000);
  }

  /**
   * Load and play the slideshow for a given slider.
   * @param {Slider} slider - A slider.
   */
  static playSlideshowOnWindowLoad(slider) {
    window.addEventListener("load", slider.playSlideshow.call(slider));
  }
}

/**
 * TODO.
 * 0. Lazy load images using "loading="lazy"".
 * 1. Create a .js file with exports to images, use project-restaurant's
 * function to get the paths dynamically.
 */

/***/ }),

/***/ "./src/sliderPics.js":
/*!***************************!*\
  !*** ./src/sliderPics.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE_FILEPATH": () => (/* binding */ IMAGE_FILEPATH),
/* harmony export */   "sliderPics": () => (/* binding */ sliderPics)
/* harmony export */ });
const IMAGE_FILEPATH = "images/";

const sliderPics = [
  {
    path: "butte.jpg",
    title: "Butte",
    caption: "Lincoln County, Wyoming"
  },
  {
    path: "capitol-reef.jpg",
    title: "Capitol Reef",
    caption: "Torrey, Utah"
  },
  {
    path: "grand-teton.jpg",
    title: "Grand Teton",
    caption: "Teton County, Wyoming"
  },
  {
    path: "open-road.jpg",
    title: "Jackson Lake",
    caption: "Teton County, Wyoming"
  },
  {
    path: "sandstone.jpg",
    title: "Navajo Sandstone",
    caption: "Glen Canyon, Nevada"
  }
];



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utility)
/* harmony export */ });
/**
 * A class with useful, general-purpose methods.
 */
class Utility {
  
  /**
   * Based on webpack's require to quickly import in all images in a folder.
   * See documentation https://www.npmjs.com/package/require-context to understand
   * more about the parameter.
   * 
   * @param r - require.context() function, used for importing all files in
   * a directory matching a pattern. Ex:
   * require.context("./images", false, /\.(png|jpe?g|svg)$/). Leave blank to use this.
   * @returns - An object containing all the images matching the require context,
   * the original filename (w/ extension) being the key referencing the image.
   */
  // eslint-disable-next-line no-undef
  static importAllImages(r = __webpack_require__("./src/images sync \\.(png|jpe?g|svg)$")) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  static addClassesToElement(elem, defaultClass, ...classNames) {
      classNames.push(defaultClass);
      elem.classList.add(...classNames);
      // passing in arrays to a varargs
  }
}

/***/ }),

/***/ "./src/images/butte.jpg":
/*!******************************!*\
  !*** ./src/images/butte.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9182344573bcd60d8b4d.jpg";

/***/ }),

/***/ "./src/images/capitol-reef.jpg":
/*!*************************************!*\
  !*** ./src/images/capitol-reef.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a967dcc84562d313a855.jpg";

/***/ }),

/***/ "./src/images/grand-teton.jpg":
/*!************************************!*\
  !*** ./src/images/grand-teton.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "177fc6a1a1256fece5b1.jpg";

/***/ }),

/***/ "./src/images/open-road.jpg":
/*!**********************************!*\
  !*** ./src/images/open-road.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da040c4d23c68425dd7c.jpg";

/***/ }),

/***/ "./src/images/sandstone.jpg":
/*!**********************************!*\
  !*** ./src/images/sandstone.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02d968a78f2801b02756.jpg";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9df4a05aab46211201f7.png";

/***/ }),

/***/ "./src/lorem.txt":
/*!***********************!*\
  !*** ./src/lorem.txt ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = "It was the White Rabbit, trotting slowly back again, and looking anxiously about as it went, as if it had lost something; and she heard it muttering to itself “The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers! She’ll get me executed, as sure as ferrets are ferrets! Where can I have dropped them, I wonder?” Alice guessed in a moment that it was looking for the fan and the pair of white kid gloves, and she very good-naturedly began hunting about for them, but they were nowhere to be seen—everything seemed to have changed since her swim in the pool, and the great hall, with the glass table and the little door, had vanished completely. ";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lorem_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lorem.txt */ "./src/lorem.txt");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _dropdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.css */ "./src/dropdown.css");
/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.css */ "./src/slider.css");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");
/* harmony import */ var _navElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navElements */ "./src/navElements.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _sliderPics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sliderPics */ "./src/sliderPics.js");
// txt imports

// css imports





// js imports






// data imports


const loadGenericBody = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const description = document.createElement("p");

  h1.textContent = "Lorem Ipsum";
  description.textContent = _lorem_txt__WEBPACK_IMPORTED_MODULE_0__; 
  
  div.classList.add("sample-text");

  div.append(h1, description);

  return div;
}

(function main() {

  const menubar = new _dropdown__WEBPACK_IMPORTED_MODULE_6__["default"]("dropdown-menu");
  _dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].addElementsToHeader(menubar, _navElements__WEBPACK_IMPORTED_MODULE_7__["default"]);
  document.body.append(menubar.getMenu(), loadGenericBody());

  const images = _utility__WEBPACK_IMPORTED_MODULE_5__["default"].importAllImages();
  _sliderPics__WEBPACK_IMPORTED_MODULE_9__.sliderPics.forEach((pic) => {
    // replace the path of the sliderPics with the destination path generated by webpack.
    pic.path = images[pic.path];
  });

  // console.log(JSON.stringify(sliderPics));

  const nationalParkSlider = new _slider__WEBPACK_IMPORTED_MODULE_8__["default"](_sliderPics__WEBPACK_IMPORTED_MODULE_9__.sliderPics, 3);
  
  document.body.append(nationalParkSlider.slider);

  _slider__WEBPACK_IMPORTED_MODULE_8__["default"].playSlideshowOnWindowLoad(nationalParkSlider);

}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsZ0JBQWdCLEtBQUs7QUFDcEMsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUI4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNDQUFJO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQy9EWjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBOEM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUE4QyxJQUFJO0FBQ2hFLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBd0Q7QUFDckY7QUFDQSw2QkFBNkIsMkNBQTJDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNzQztBQUN0QztBQUNxQjtBQUNBO0FBQ0c7QUFDRjtBQUN0QjtBQUNBO0FBQ2dDO0FBQ0M7QUFDUTtBQUNYO0FBQzRCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFPO0FBQzdCLEVBQUUscUVBQTJCLFVBQVUsb0RBQVk7QUFDbkQ7QUFDQTtBQUNBLGlCQUFpQixnRUFBdUI7QUFDeEMsRUFBRSwyREFBa0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0NBQU0sQ0FBQyxtREFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlFQUFnQztBQUNsQztBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uY3NzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9kcm9wZG93bi5jc3M/NjI1NCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9zbGlkZXIuY3NzPzQwOWIiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9uYXZFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9zbGlkZXJQaWNzLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SnVsaXVzK1NhbnMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1sb2dvLWZvbnQ6IFxcXCJKdWxpdXMgU2FucyBPbmVcXFwiO1xcclxcbiAgLS1oZWFkZXItZm9udDogXFxcIkRpZGFjdCBHb3RoaWNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLWxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxyXFxuICBtYXJnaW46IDAgMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtbG9nbyBoMSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1saW5rLWNsaWNrYWJsZSwgLm1lbnViYXItZHJvcGRvd24ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24tbGluayB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24tbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duLWxpbmsgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duIC5hcnJvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgPiAqIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFycm93IHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG93biB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG5cXHJcXG4uZHJvcGRvd24tbGlua3Mge1xcclxcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMjAwJTtcXHJcXG4gIHRvcDogMTA1JTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBhbmltYXRpb246IHBvcEluIDAuMjVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUlKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zJSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICAvKiBEZWJ1ZyAqL1xcclxcbiAgICBjb2xvcjogcmVkOyAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2l0ZS1sb2dvIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87ICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcImljb24gbG9nb1xcXCJcXHJcXG4gICAgXFxcIm1lbnUgbWVudVxcXCI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51LWljb24ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmlnYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGdyaWQtYXJlYTogbWVudTtcXHJcXG4gICAgdG9wOiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbmltYXRpb246IHBvcEluIDFzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3Bkb3duLWxpbmtzIHtcXHJcXG4gICAgcG9zaXRpb246IHJldmVydDtcXHJcXG4gICAgYm9yZGVyOiByZXZlcnQ7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9wSW4gMXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51YmFyLWRyb3Bkb3duLWxpbmsge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhcHNlZCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAwcHg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRyYW5zZmVyIHRoZSBuYXYgZWxlbWVudCB1c2luZyBhIGZpeGVkIHBvc2l0aW9uIHRvIHJlbW92ZSBpdCBmcm9tIHRoZSBmbG93Li4uXFxyXFxudG8gdGhlIGxlZnQgc2lkZS5cXHJcXG4qL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kcm9wZG93bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1AsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYjs7ZUFFVztJQUNYLCtCQUErQjtJQUMvQiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0FBRUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBOzs7Q0FHQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KdWxpdXMrU2FucytPbmUmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWxvZ28tZm9udDogXFxcIkp1bGl1cyBTYW5zIE9uZVxcXCI7XFxyXFxuICAtLWhlYWRlci1mb250OiBcXFwiRGlkYWN0IEdvdGhpY1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtbG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXHJcXG4gIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMTAlO1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaXRlLWxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1sb2dvIGgxIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWxpbmstY2xpY2thYmxlLCAubWVudWJhci1kcm9wZG93biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1kcm9wZG93bi1saW5rIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1kcm9wZG93bi1saW5rOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24tbGluayBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24gLmFycm93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDVweDtcXHJcXG4gIGJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSA+ICoge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3cge1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5kb3duIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udXAge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcblxcclxcbi5kcm9wZG93bi1saW5rcyB7XFxyXFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAyMDAlO1xcclxcbiAgdG9wOiAxMDUlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGFuaW1hdGlvbjogcG9wSW4gMC4yNXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNSUpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTMlKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxLjA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIC8qIERlYnVnICovXFxyXFxuICAgIGNvbG9yOiByZWQ7ICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaXRlLWxvZ28ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bzsgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiaWNvbiBsb2dvXFxcIlxcclxcbiAgICBcXFwibWVudSBtZW51XFxcIjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnUtaWNvbiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgZGlzcGxheTogdW5zZXQ7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBncmlkLWFyZWE6IGljb247XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2aWdhdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcclxcbiAgICB0b3A6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9wSW4gMXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGRvd24tbGlua3Mge1xcclxcbiAgICBwb3NpdGlvbjogcmV2ZXJ0O1xcclxcbiAgICBib3JkZXI6IHJldmVydDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BJbiAxcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnViYXItZHJvcGRvd24tbGluayB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29sbGFwc2VkIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDBweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuVHJhbnNmZXIgdGhlIG5hdiBlbGVtZW50IHVzaW5nIGEgZml4ZWQgcG9zaXRpb24gdG8gcmVtb3ZlIGl0IGZyb20gdGhlIGZsb3cuLi5cXHJcXG50byB0aGUgbGVmdCBzaWRlLlxcclxcbiovXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUyc7XFxyXFxufVxcclxcbi5zYW1wbGUtdGV4dCB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNhbXBsZS10ZXh0IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5zYW1wbGUtdGV4dCB7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xcclxcbn1cXHJcXG4uc2FtcGxlLXRleHQge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zYW1wbGUtdGV4dCBoMSB7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuc2FtcGxlLXRleHQge1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWltZy1mcmFtZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIgLmltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbWctZnJhbWUgZmlnY2FwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDI1cHg7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggQkxBQ0s7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXB0aW9uLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWNvbnRyb2xzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJwcmV2IG5leHRcXFwiXFxyXFxuICBcXFwiZG90cyBwYXVzZVxcXCJcXHJcXG4gIDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDk1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3c6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3cubGVmdCB7XFxyXFxuICBncmlkLWFyZWE6IHByZXY7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3cucmlnaHQge1xcclxcbiAgZ3JpZC1hcmVhOiBuZXh0O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItdG9nZ2xlIHtcXHJcXG4gIGdyaWQtYXJlYTogcGF1c2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwcHggNXB4IDBweCA1cHg7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4IDAgMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXkge1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMTJweCAxMnB4IDEycHggMTJweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC1jb250cm9scyB7XFxyXFxuICBncmlkLWFyZWE6IGRvdHM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1kb3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2I7OztFQUdBO0VBQ0EscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx1REFBdUQ7RUFDdkQsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWltZy1mcmFtZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIgLmltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbWctZnJhbWUgZmlnY2FwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDI1cHg7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggQkxBQ0s7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXB0aW9uLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWNvbnRyb2xzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJwcmV2IG5leHRcXFwiXFxyXFxuICBcXFwiZG90cyBwYXVzZVxcXCJcXHJcXG4gIDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDk1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3c6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3cubGVmdCB7XFxyXFxuICBncmlkLWFyZWE6IHByZXY7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3cucmlnaHQge1xcclxcbiAgZ3JpZC1hcmVhOiBuZXh0O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItdG9nZ2xlIHtcXHJcXG4gIGdyaWQtYXJlYTogcGF1c2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwcHggNXB4IDBweCA1cHg7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4IDAgMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXkge1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMTJweCAxMnB4IDEycHggMTJweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC1jb250cm9scyB7XFxyXFxuICBncmlkLWFyZWE6IGRvdHM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1kb3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogUmVwcmVzZW50cyBhIE1lbnVCYXIuIENvbnRhaW5zIG9wZXJhdGlvbnMgZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgTWVudUJhci5cclxuICogRmlyc3QsIGFkZCBlbGVtZW50cyB0byBpdCB1c2luZyB0aGUgdmFyaW91cyBhZGQqKCkgbWV0aG9kcy4gVGhlbiwgdXNlXHJcbiAqIGdldE1lbnVCYXIoKSB0byBnZXQgdGhlIGVsZW1lbnQgcmVmZXJlbmNlLCB3aGljaCB5b3UgY2FuIHVzZSB0aGF0IHRvIGFwcGVuZCB0byBcclxuICogYSBwYXJlbnQgb2YgeW91ciBjaG9pY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIHtcclxuICBcclxuICAvKipcclxuICAgKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIE1lbnVCYXIsIHNpbmNlIG9ubHkgb25lIE1lbnVCYXIgc2hvdWxkIGV2ZXIgZXhpc3Qgb24gYSB3ZWJwYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lbnUgZWxlbWVudC5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICovXHJcbiAgbWVudTtcclxuICAvKipcclxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY2xpY2thYmxlIGVsZW1lbnRzIG9uIHRoZSBtZW51LlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gICNjbGlja2FibGVzO1xyXG4gICNtZW51SXRlbXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBicmVha3BvaW50IHRvIGJlIHNldCB0byBjb252ZXJ0IHRoZSBtZW51IGJhciB0byBhIG1vYmlsZSBmb3JtYXQuIEluIHB4LlxyXG4gICAqIFdoZW4gYSBNZW51QmFyIHJlZmVyZW5jZSBpcyBpbml0aWFsaXplZCwgdGhlIGRlZmF1bHQgYnJlYWtwb2ludCBpcyA4NjBweC5cclxuICAgKiBAdHlwZSB7TWVkaWFRdWVyeUxpc3R9XHJcbiAgICovXHJcbiAgbW9iaWxlQnJlYWtwb2ludExpc3RlbmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGJyZWFrcG9pbnQgPSA4NjApIHtcclxuICAgIGlmIChNZW51QmFyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBNZW51QmFyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcbiAgICBNZW51QmFyLiNpbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuI21lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICB0aGlzLiNtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHgpYCk7XHJcbiAgICB0aGlzLiNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKTtcclxuXHJcbiAgICB0aGlzLiNhZGRIYW1idXJnZXJJY29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgaGFtYnVyZ2VyIGljb24gdG8gY2xpY2thYmxlcy5cclxuICAgKi9cclxuICAjYWRkSGFtYnVyZ2VySWNvbigpIHtcclxuICAgIGNvbnN0IHN2Z05zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCBcInN2Z1wiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCA4MFwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCA0MCk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDQwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBsZXQgeSA9IDMwICogaTtcclxuICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJyZWN0XCIpO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDEwMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDIwKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChsaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyZWQhIVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gICNpbml0aWFsaXplUmVzcG9uc2l2ZU1lbnUoKSB7XHJcbiAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICB0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGlzIDg2MHB4IG9yIGJlbG93Li4uOlxyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBhY3RpdmUsIGhpZGUgbWVudSB3aGVuIGNsaWNrZWQgb2ZmLi4uXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vYmlsZSBicmVha3BvaW50IGluYWN0aXZlLCBjb2xsYXBzaW5nIGFueSBhY3RpdmUgbWVudXMuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5vbmNsaWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZG8gYW55dGhpbmcgaWYgbm8gZHJvcGRvd24gaXMgYWN0aXZlLlxyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkgeyBcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gb25seSBjbG9zZSB3aGVuIHRoZSBlbGVtZW50IGNsaWNrZWQgaXMgbm90IHRoZSBkcm9wZG93biBpdHNlbGYgb3IgaXRzIGNoaWxkLlxyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIubWVudWJhci1kcm9wZG93blwiKSAmJiAhYWN0aXZlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgIE1lbnVCYXIuY2xvc2VBY3RpdmVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSBsaW5rIHRvIHRoZSBtZW51LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgbGluay5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHJlZiAtIFRoZSBwYXRoIHRoZSBsaW5rIHNob3VsZCBwb2ludCB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGRMaW5rKG5hbWUsIGhyZWYsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIFxyXG4gICAgbGluay50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGxpbmssIGNsYXNzTmFtZXMsIFwibWVudWJhci1saW5rLWNsaWNrYWJsZVwiKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIHRleHQgbG9nbyB0byB0aGUgbWVudS4gVXNlZnVsIGZvciBhIGNvbXBhbnkgbG9nby5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEFjY29tcGFueWluZyB0ZXh0IHRvIGRpc3BsYXkgd2l0aCB0aGUgaWNvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiAtIEZpbGVwYXRoIHJlcHJlc2VudGluZyBhbiBpY29uLiBOdWxsIGlmIHlvdSBkb24ndCBuZWVkIGFuIGljb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIE9wdGlvbmFsIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuIFxyXG4gICAqL1xyXG4gIGFkZExvZ28odGV4dCwgaWNvbj1udWxsLCBocmVmPVwiXCIsIC4uLmNsYXNzTmFtZXMpe1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobG9nbywgY2xhc3NOYW1lcywgXCJzaXRlLWxvZ29cIik7XHJcblxyXG4gICAgaWYgKGljb24gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaWNvbik7XHJcbiAgICAgIGxvZ28uYXBwZW5kKGljb25FbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0TG9nby50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgbG9nby5hcHBlbmQodGV4dExvZ28pO1xyXG5cclxuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2gobG9nbyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkcm9wZG93biBtZW51IGJhc2VkIG9uIGEgZ2l2ZW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0geyB7XCJuYW1lXCIgOiBcImhyZWZcIn1bXSB9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbmFtZTpocmVmIG9iamVjdCBwYWlycy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLlxyXG4gICAqL1xyXG4gIGFkZERyb3Bkb3duKG5hbWUsIGxpbmtzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBkcm9wRG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBUaHJlZSBjb21wb25lbnRzIHRvIGEgZHJvcGRvd24sIHRoZSBsYWJlbCwgdGhlIG5hdmxpbmtzLCBhbmQgdGhlIGFycm93LlxyXG4gICAgY29uc3QgZHJvcERvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnN0IGRyb3BEb3duTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkcm9wRG93bkNvbnRhaW5lciwgY2xhc3NOYW1lcywgXCJtZW51YmFyLWRyb3Bkb3duXCIpO1xyXG4gICAgZHJvcERvd25MYWJlbC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbGFiZWxcIik7XHJcbiAgICBkcm9wRG93bkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1saW5rc1wiLCBcImNvbGxhcHNlZFwiKTtcclxuICAgIGRyb3BEb3duQXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93XCIsIFwiZG93blwiKTtcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChwYWlyKSA9PiB7XHJcbiAgICAgIGxldCBsaW5rV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgXHJcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBwYWlyLnRleHQ7XHJcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBwYWlyLmhyZWYpO1xyXG5cclxuICAgICAgbGlua1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnViYXItZHJvcGRvd24tbGlua1wiKTtcclxuICAgICAgbGlua1dyYXBwZXIuYXBwZW5kKGxpbmspO1xyXG4gICAgICBkcm9wRG93bkxpbmtzLmFwcGVuZChsaW5rV3JhcHBlcik7XHJcbiAgICB9KTtcclxuICAgIGRyb3BEb3duTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwuYXBwZW5kKGRyb3BEb3duQXJyb3cpO1xyXG4gICAgZHJvcERvd25Db250YWluZXIuYXBwZW5kKGRyb3BEb3duTGFiZWwsIGRyb3BEb3duTGlua3MpO1xyXG5cclxuICAgIGRyb3BEb3duTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXHJcbiAgICAgICAgKGUpID0+IHRoaXMuI3RvZ2dsZURyb3Bkb3duLmNhbGwodGhpcywgZSkpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMucHVzaChkcm9wRG93bkNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIGZvciBjbG9zaW5nIGFueSBhY3RpdmUgZHJvcGRvd25zLCBpZiB0aGV5J3JlIGFjdGl2ZSBvciB0aGUgdXNlciBjbGlja3MgXHJcbiAgICogYW55IGFyZWEgb3V0c2lkZSBvZiBpdCBvbiB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjbG9zZUFjdGl2ZURyb3Bkb3duKCkge1xyXG4gICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIHRoYXQgaXNuJ3QgdGhlIGN1cnJlbnQgYWN0aXZlIGRyb3Bkb3duLi4uXHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudWJhci1kcm9wZG93bi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93biA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbGlua3NcIik7XHJcbiAgICBjb25zdCBhY3RpdmVBcnJvdyA9IGFjdGl2ZURyb3Bkb3duQnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIC8vIGNvbGxhcHNlIGl0LlxyXG4gICAgYWN0aXZlRHJvcGRvd25CdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGFjdGl2ZURyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidXBcIik7XHJcbiAgICBhY3RpdmVBcnJvdy5jbGFzc0xpc3QuYWRkKFwiZG93blwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY2FsbGJhY2sgdG8gc2hvdyBhIGRyb3Bkb3duIG1lbnUuIEFzc2lnbiB0aGlzIHRvIGJ1dHRvbnMgb24gdGhlIG5hdmJhci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IGUgLSBFdmVudC4gVXNlZCB0byBnZXQgdGhlIGN1cnJlbnQgbGluayBiZWluZyBob3ZlcmVkIG92ZXIsXHJcbiAgICogYW5kIHRoZW4gdXNlIGl0IHRvIGZpbmQgdGhlIGRyb3Bkb3duIGxpbmtzLlxyXG4gICAqL1xyXG4gICN0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICBcclxuICAgIGxldCBkcm9wZG93blJvb3QgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICB3aGlsZSghZHJvcGRvd25Sb290Lm1hdGNoZXMoXCIubWVudWJhci1kcm9wZG93blwiKSkge1xyXG4gICAgICBkcm9wZG93blJvb3QgPSBkcm9wZG93blJvb3QucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubW9iaWxlQnJlYWtwb2ludExpc3RlbmVyLm1hdGNoZXMpIHtcclxuICAgICAgY29uc3QgYWN0aXZlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoYWN0aXZlRHJvcGRvd24gIT09IG51bGwgJiYgIWFjdGl2ZURyb3Bkb3duLmNvbnRhaW5zKGRyb3Bkb3duUm9vdCkpIHtcclxuICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duTGlzdCA9IGRyb3Bkb3duUm9vdC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICBjb25zdCBkcm9wZG93bkFycm93ID0gZHJvcGRvd25Sb290LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICBcclxuICAgIGRyb3Bkb3duUm9vdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwiZG93blwiKTtcclxuICAgIGRyb3Bkb3duQXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShcInVwXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtZW51IHdpdGggYWxsIHRoZSBjbGlja2FibGVzIHRoYXQgaGFzIGJlZW4gYWRkZWQgdG8gaXQuXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIG1lbnUuXHJcbiAgICovXHJcbiAgZ2V0TWVudSgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuI2NsaWNrYWJsZXMuZm9yRWFjaCgoY2xpY2thYmxlKSA9PiB7XHJcbiAgICAgIGlmIChjbGlja2FibGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudWJhci1saW5rLWNsaWNrYWJsZVwiKVxyXG4gICAgICAgICAgfHwgY2xpY2thYmxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnViYXItZHJvcGRvd25cIikpIHtcclxuICAgICAgICAgICAgc2VsZi4jbWVudUl0ZW1zLmFwcGVuZChjbGlja2FibGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYubWVudS5hcHBlbmQoY2xpY2thYmxlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tZW51LmFwcGVuZCh0aGlzLiNtZW51SXRlbXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIEFkZCBlbGVtZW50cyB0byBhIGdpdmVuIG1lbnUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtNZW51QmFyfSBtZW51IC0gVGhlIG1lbnUgdG8gcHV0IGVsZW1lbnRzIG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gZWxlbWVudHMgLSBUaGUgZWxlbWVudHMgdG8gYWRkLiBGb2xsb3cgYSB0ZW1wbGF0ZSBsaWtlIG5hdkVsZW1lbnRzLmpzLFxyXG4gICAqIGFzIGluLCBhbiBvYmplY3Qgd2l0aCBhIHR5cGUsIHRleHQsIGFuZCBocmVmIGF0dHJpYnV0ZXMuXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZEVsZW1lbnRzVG9IZWFkZXIobWVudSwgZWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgc3dpdGNoIChlbGVtLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibG9nb1wiOlxyXG4gICAgICAgICAgbWVudS5hZGRMb2dvKGVsZW0udGV4dCwgZWxlbS5pY29uLCBlbGVtLmhyZWYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxpbmtcIjpcclxuICAgICAgICAgIG1lbnUuYWRkTGluayhlbGVtLnRleHQsIGVsZW0uaHJlZik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZHJvcGRvd25cIjpcclxuICAgICAgICAgIG1lbnUuYWRkRHJvcGRvd24oZWxlbS50ZXh0LCBlbGVtLmxpbmtzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2VsZW0udHlwZX0gaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIHlldGApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9idXR0ZS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvYnV0dGUuanBnXCIsXG5cdFwiLi9jYXBpdG9sLXJlZWYuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2NhcGl0b2wtcmVlZi5qcGdcIixcblx0XCIuL2dyYW5kLXRldG9uLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9ncmFuZC10ZXRvbi5qcGdcIixcblx0XCIuL29wZW4tcm9hZC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvb3Blbi1yb2FkLmpwZ1wiLFxuXHRcIi4vc2FuZHN0b25lLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zYW5kc3RvbmUuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5wbmcnO1xyXG5cclxuXHJcbmNvbnN0IE5BVl9FTEVNRU5UUyA9IFtcclxuICB7XHJcbiAgICB0eXBlOiBcImxvZ29cIixcclxuICAgIHRleHQ6IFwiUmF2ZW4gUm9jayBTb2Z0d2FyZVwiLFxyXG4gICAgaWNvbjogbG9nbyxcclxuICAgIGhyZWY6IFwiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZHJvcGRvd25cIixcclxuICAgIHRleHQ6IFwiUHJvZHVjdHNcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkNvbnN1bWVyU29mdCBUcmFkZXJcIixcclxuICAgICAgICBocmVmOiBcIiNcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJPcHRpb25zIEFuYWx5emVyXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkJyaXNrYm9va3MgQnVkZ2V0aW5nXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlNsaWNrZW4gTW9uZXkgTWFuYWdlclwiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZHJvcGRvd25cIixcclxuICAgIHRleHQ6IFwiTG9jYXRpb25zXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJXaWxzaGlyZVwiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkFsbW9uZCBQZWFrXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCJcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwibGlua1wiLFxyXG4gICAgdGV4dDogXCJPdXIgU3RvcnlcIixcclxuICAgIGhyZWY6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImxpbmtcIixcclxuICAgIHRleHQ6IFwiQ29udGFjdCBVc1wiLFxyXG4gICAgaHJlZjogXCIjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwibGlua1wiLFxyXG4gICAgdGV4dDogXCJTdXBwb3J0XCIsXHJcbiAgICBocmVmOiBcIiNcIlxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkFWX0VMRU1FTlRTOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciBpbiB3aGljaCBwb3NzZXNzZXMgdGhlIGVudGlyZSBzbGlkZXIgYXBwYXJhdHVzLlxyXG4gICAqL1xyXG4gICNzbGlkZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciB3aGljaCBwcmVzZW50cyB0aGUgaW1hZ2UuXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAqL1xyXG4gICNmcmFtZTtcclxuICAvKipcclxuICAgKiBUaGUgcGljdHVyZXMgd2hpY2ggd2lsbCBiZSB1c2VkIGluIHRoZSBzbGlkZXIuXHJcbiAgICogQHR5cGUge3twYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGNhcHRpb24gOiBzdHJpbmd9W119XHJcbiAgICovXHJcbiAgI3BpY3R1cmVzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkdXJhdGlvbiB0byBzaG93IGVhY2ggcGljdHVyZS5cclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gICNkdXJhdGlvbjtcclxuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBzbGlkZXNob3cgaXMgY3VycmVudGx5IHBhdXNlZC5cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cclxuICAjaXNQYXVzZWQ7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xzIGNvbnRhaW5lci5cclxuICAgKi9cclxuICAjY29udHJvbHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGV4IG9mIHRoZSBjdXJyZW50IHBpY3R1cmUgdGhlIHNsaWRlc2hvdyBpcyBvbi5cclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gICNjdXJyZW50UGljSW5kZXg7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNsaWRlci4gVGhlcmUgYXJlIHRocmVlIGNvbXBvbmVudHMgdGhhdCB3aWxsIGJlIGdlbmVyYXRlZC4gMSkgdGhlXHJcbiAgICogY29udGFpbmVyLCAyKSB0aGUgZnJhbWUgd2hlcmUgcGljdHVyZXMgYXJlIGRpc3BsYXllZCwgYW5kIDMpIHRoZSBjb250cm9scy5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3twYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGNhcHRpb24gOiBzdHJpbmd9W119IHBpY3R1cmVzIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwaWN0dXJlcywgZHVyYXRpb24pIHtcclxuICAgIHRoaXMuI3BpY3R1cmVzID0gcGljdHVyZXM7XHJcbiAgICB0aGlzLiNkdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgdGhpcy4jaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuI2N1cnJlbnRQaWNJbmRleCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuI3NsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuc2xpZGVyLCBcInNsaWRlclwiKTtcclxuXHJcbiAgICB0aGlzLiNmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuI2ZyYW1lLCBcInNsaWRlci1pbWctZnJhbWVcIik7XHJcbiAgICBcclxuICAgIHRoaXMuI2NvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuI2NvbnRyb2xzLCBcInNsaWRlci1jb250cm9sc1wiKTtcclxuICAgIHRoaXMuI2FkZENvbnRyb2xzVG9TbGlkZXIoKTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY29uc3QgZmlnQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gICAgY29uc3QgZmlnQ2FwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBmaWdDYXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGltZywgXCJpbWFnZVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoZmlnQ2FwdGlvblRpdGxlLCBcImNhcHRpb24tdGl0bGVcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGZpZ0NhcHRpb25UZXh0LCBcImNhcHRpb24tdGV4dFwiKTtcclxuICAgIFxyXG4gICAgZmlnQ2FwdGlvbi5hcHBlbmQoZmlnQ2FwdGlvblRpdGxlLCBmaWdDYXB0aW9uVGV4dCk7XHJcbiAgICB0aGlzLiNmcmFtZS5hcHBlbmQoaW1nLCBmaWdDYXB0aW9uKTtcclxuXHJcbiAgICB0aGlzLiNzbGlkZXIuYXBwZW5kKHRoaXMuI2ZyYW1lLCB0aGlzLiNjb250cm9scyk7XHJcblxyXG4gICAgdGhpcy4jbG9hZEltYWdlKHRoaXMuI2N1cnJlbnRQaWNJbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBUaGUgY2xhc3NuYW1lcyB0byBnaXZlIHRoZSBlbGVtZW50IChvcHRpb25hbCkuXHJcbiAgICogKi8gXHJcbiAgI2FkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gIHNldCBwaWN0dXJlcyhwaWN0dXJlcyl7XHJcbiAgICB0aGlzLiNwaWN0dXJlcyA9IHBpY3R1cmVzO1xyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gVGVzdCBhbmQgbWFrZSBzdXJlIHRoaXNcclxuICAgIHRoaXMuI2Rpc3BsYXlDbGlja2FibGVEb3RzKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgZHVyYXRpb24oc2Vjb25kcykge1xyXG4gICAgdGhpcy4jZHVyYXRpb24gPSBzZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgI2FkZENvbnRyb2xzVG9TbGlkZXIoKSB7XHJcbiAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBjb25zdCBkb3RDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHByZXYsIFwic2xpZGVyLWFycm93XCIsIFwibGVmdFwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQobmV4dCwgXCJzbGlkZXItYXJyb3dcIiwgXCJyaWdodFwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoZG90Q29udHJvbHMsIFwiZG90LWNvbnRyb2xzXCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudCh0b2dnbGUsIFwic2xpZGVyLXRvZ2dsZVwiLCBcInBhdXNlXCIpO1xyXG5cclxuICAgIHRoaXMuI2NvbnRyb2xzLmFwcGVuZChwcmV2LCBuZXh0LCBkb3RDb250cm9scywgdG9nZ2xlKTtcclxuICAgIHRoaXMuI2Rpc3BsYXlDbGlja2FibGVEb3RzKCk7XHJcblxyXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy4jcmV2ZXJzZVNsaWRlci5jYWxsKHRoaXMpKTtcclxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuI2FkdmFuY2VTbGlkZXIuY2FsbCh0aGlzKSk7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuI3BhdXNlU2xpZGVzaG93LmNhbGwodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgI3BhdXNlU2xpZGVzaG93KCkge1xyXG4gICAgdGhpcy4jaXNQYXVzZWQgPSAhdGhpcy4jaXNQYXVzZWQ7XHJcblxyXG4gICAgdGhpcy4jY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItdG9nZ2xlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwYXVzZVwiKTtcclxuICAgIHRoaXMuI2NvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLXRvZ2dsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwicGxheVwiKTtcclxuICB9IFxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBjbGlja2FibGUgZG90cyBvbiB0aGUgY29udHJvbCBzZWN0aW9uIG9mIHRoZSBzbGlkZXIuXHJcbiAgICovXHJcbiAgI2Rpc3BsYXlDbGlja2FibGVEb3RzKCkge1xyXG5cclxuICAgIGNvbnN0IGRvdENvbnRyb2xzID0gdGhpcy4jY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5kb3QtY29udHJvbHNcIik7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGFueSBleGlzdGluZyBkb3RzLiBuZWVkZWQgaWYgcGljdHVyZXMgZ2V0cyBjaGFuZ2VkIGxhdGVyLlxyXG4gICAgd2hpbGUoZG90Q29udHJvbHMuZmlyc3RDaGlsZCl7XHJcbiAgICAgIGRvdENvbnRyb2xzLnJlbW92ZUNoaWxkKGRvdENvbnRyb2xzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI3BpY3R1cmVzLmZvckVhY2goKHBpYywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkb3QsIFwiZG90LWluZGV4XCIpO1xyXG4gICAgICBcclxuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbG9hZEltYWdlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuI2N1cnJlbnRQaWNJbmRleCA9IGluZGV4O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvdENvbnRyb2xzLmFwcGVuZChkb3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyBhbiBpbWFnZSBiYXNlZCBvbiBhIGdpdmVuIGluZGV4LCBhbmQgdGhlbiBoaWdobGlnaHRzIHRoZSBjb3JyZXNwb25kaW5nXHJcbiAgICogZG90LlxyXG4gICAqL1xyXG4gICNsb2FkSW1hZ2UoaW5kZXgpIHtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuI2ZyYW1lLnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIik7XHJcbiAgICBjb25zdCBmaWdDYXB0aW9uVGl0bGUgPSB0aGlzLiNmcmFtZS5xdWVyeVNlbGVjdG9yKFwiLmNhcHRpb24tdGl0bGVcIik7XHJcbiAgICBjb25zdCBmaWdDYXB0aW9uVGV4dCA9IHRoaXMuI2ZyYW1lLnF1ZXJ5U2VsZWN0b3IoXCIuY2FwdGlvbi10ZXh0XCIpO1xyXG4gICAgY29uc3QgcGljUmVmID0gdGhpcy4jcGljdHVyZXNbaW5kZXhdO1xyXG5cclxuICAgIGltZy5zcmMgPSBwaWNSZWYucGF0aDtcclxuICAgIGZpZ0NhcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IHBpY1JlZi50aXRsZTtcclxuICAgIGZpZ0NhcHRpb25UZXh0LnRleHRDb250ZW50ID0gcGljUmVmLmNhcHRpb247XHJcblxyXG4gICAgY29uc3QgcHJldkltZ0RvdCA9IHRoaXMuI2NvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoYC5kb3QtaW5kZXguY3VycmVudC1kb3RgKTtcclxuICAgIGlmIChwcmV2SW1nRG90ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXZJbWdEb3QuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtZG90XCIpO1xyXG4gICAgfSBcclxuXHJcbiAgICB0aGlzLiNjb250cm9sc1xyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuZG90LWluZGV4Om50aC1jaGlsZCgke2luZGV4KzF9KWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWRvdFwiKTtcclxuICB9XHJcblxyXG4gICNhZHZhbmNlU2xpZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQaWNJbmRleCA8ICh0aGlzLiNwaWN0dXJlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICB0aGlzLiNjdXJyZW50UGljSW5kZXggKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnRQaWNJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jbG9hZEltYWdlKHRoaXMuI2N1cnJlbnRQaWNJbmRleCk7XHJcbiAgfVxyXG5cclxuICAjcmV2ZXJzZVNsaWRlcigpIHtcclxuICAgIGlmICh0aGlzLiNjdXJyZW50UGljSW5kZXggPiAwKSB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnRQaWNJbmRleCAtPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jY3VycmVudFBpY0luZGV4ID0gdGhpcy4jcGljdHVyZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLiNjdXJyZW50UGljSW5kZXgpO1xyXG4gICAgdGhpcy4jbG9hZEltYWdlKHRoaXMuI2N1cnJlbnRQaWNJbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSByZWFkLW9ubHkgRWxlbWVudCByZWZlcmVuY2UgdG8gdGhlIHNsaWRlci4gRm9yIGFwcGVuZGluZyB0byBlbGVtZW50cy5cclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAgICovXHJcbiAgZ2V0IHNsaWRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNzbGlkZXI7XHJcbiAgfVxyXG5cclxuICBwbGF5U2xpZGVzaG93KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gIFxyXG4gICAgLy8gcGxheSBpdCBvbmNlIGV2ZXJ5IFggc2Vjb25kcyB0aGVyZWFmdGVyLlxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIXNlbGYuI2lzUGF1c2VkKSB7XHJcbiAgICAgICAgc2VsZi4jYWR2YW5jZVNsaWRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLiNkdXJhdGlvbiAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBhbmQgcGxheSB0aGUgc2xpZGVzaG93IGZvciBhIGdpdmVuIHNsaWRlci5cclxuICAgKiBAcGFyYW0ge1NsaWRlcn0gc2xpZGVyIC0gQSBzbGlkZXIuXHJcbiAgICovXHJcbiAgc3RhdGljIHBsYXlTbGlkZXNob3dPbldpbmRvd0xvYWQoc2xpZGVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2xpZGVyLnBsYXlTbGlkZXNob3cuY2FsbChzbGlkZXIpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUT0RPLlxyXG4gKiAwLiBMYXp5IGxvYWQgaW1hZ2VzIHVzaW5nIFwibG9hZGluZz1cImxhenlcIlwiLlxyXG4gKiAxLiBDcmVhdGUgYSAuanMgZmlsZSB3aXRoIGV4cG9ydHMgdG8gaW1hZ2VzLCB1c2UgcHJvamVjdC1yZXN0YXVyYW50J3NcclxuICogZnVuY3Rpb24gdG8gZ2V0IHRoZSBwYXRocyBkeW5hbWljYWxseS5cclxuICovIiwiY29uc3QgSU1BR0VfRklMRVBBVEggPSBcImltYWdlcy9cIjtcclxuXHJcbmNvbnN0IHNsaWRlclBpY3MgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCJidXR0ZS5qcGdcIixcclxuICAgIHRpdGxlOiBcIkJ1dHRlXCIsXHJcbiAgICBjYXB0aW9uOiBcIkxpbmNvbG4gQ291bnR5LCBXeW9taW5nXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiY2FwaXRvbC1yZWVmLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiQ2FwaXRvbCBSZWVmXCIsXHJcbiAgICBjYXB0aW9uOiBcIlRvcnJleSwgVXRhaFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcImdyYW5kLXRldG9uLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiR3JhbmQgVGV0b25cIixcclxuICAgIGNhcHRpb246IFwiVGV0b24gQ291bnR5LCBXeW9taW5nXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwib3Blbi1yb2FkLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSmFja3NvbiBMYWtlXCIsXHJcbiAgICBjYXB0aW9uOiBcIlRldG9uIENvdW50eSwgV3lvbWluZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcInNhbmRzdG9uZS5qcGdcIixcclxuICAgIHRpdGxlOiBcIk5hdmFqbyBTYW5kc3RvbmVcIixcclxuICAgIGNhcHRpb246IFwiR2xlbiBDYW55b24sIE5ldmFkYVwiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IHsgSU1BR0VfRklMRVBBVEgsIHNsaWRlclBpY3MgfTsiLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0ge307XHJcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoZWxwZXIgbWV0aG9kIHdoaWNoIGFkZHMgY2xhc3NlcyB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCBjbGFzc2VzIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBUaGUgY2xhc3NuYW1lIHRoYXQgc2FpZCBlbGVtZW50IHNob3VsZCBhbHdheXMgaGF2ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudCAob3B0aW9uYWwpLlxyXG4gICAqICovIFxyXG4gIHN0YXRpYyBhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gICAgICAvLyBwYXNzaW5nIGluIGFycmF5cyB0byBhIHZhcmFyZ3NcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHR4dCBpbXBvcnRzXHJcbmltcG9ydCBTQU1QTEVfVEVYVCBmcm9tICcuL2xvcmVtLnR4dCc7XHJcbi8vIGNzcyBpbXBvcnRzXHJcbmltcG9ydCAnLi9yZXNldC5jc3MnO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2Ryb3Bkb3duLmNzcyc7XHJcbmltcG9ydCAnLi9zbGlkZXIuY3NzJztcclxuXHJcbi8vIGpzIGltcG9ydHNcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcclxuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9kcm9wZG93bic7XHJcbmltcG9ydCBOQVZfRUxFTUVOVFMgZnJvbSAnLi9uYXZFbGVtZW50cyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xyXG5pbXBvcnQgeyBJTUFHRV9GSUxFUEFUSCwgc2xpZGVyUGljcyB9IGZyb20gJy4vc2xpZGVyUGljcyc7XHJcblxyXG4vLyBkYXRhIGltcG9ydHNcclxuXHJcblxyXG5jb25zdCBsb2FkR2VuZXJpY0JvZHkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBoMS50ZXh0Q29udGVudCA9IFwiTG9yZW0gSXBzdW1cIjtcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFNBTVBMRV9URVhUOyBcclxuICBcclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInNhbXBsZS10ZXh0XCIpO1xyXG5cclxuICBkaXYuYXBwZW5kKGgxLCBkZXNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG5cclxuICBjb25zdCBtZW51YmFyID0gbmV3IE1lbnVCYXIoXCJkcm9wZG93bi1tZW51XCIpO1xyXG4gIE1lbnVCYXIuYWRkRWxlbWVudHNUb0hlYWRlcihtZW51YmFyLCBOQVZfRUxFTUVOVFMpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1lbnViYXIuZ2V0TWVudSgpLCBsb2FkR2VuZXJpY0JvZHkoKSk7XHJcblxyXG4gIGNvbnN0IGltYWdlcyA9IFV0aWxpdHkuaW1wb3J0QWxsSW1hZ2VzKCk7XHJcbiAgc2xpZGVyUGljcy5mb3JFYWNoKChwaWMpID0+IHtcclxuICAgIC8vIHJlcGxhY2UgdGhlIHBhdGggb2YgdGhlIHNsaWRlclBpY3Mgd2l0aCB0aGUgZGVzdGluYXRpb24gcGF0aCBnZW5lcmF0ZWQgYnkgd2VicGFjay5cclxuICAgIHBpYy5wYXRoID0gaW1hZ2VzW3BpYy5wYXRoXTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2xpZGVyUGljcykpO1xyXG5cclxuICBjb25zdCBuYXRpb25hbFBhcmtTbGlkZXIgPSBuZXcgU2xpZGVyKHNsaWRlclBpY3MsIDMpO1xyXG4gIFxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5hdGlvbmFsUGFya1NsaWRlci5zbGlkZXIpO1xyXG5cclxuICBTbGlkZXIucGxheVNsaWRlc2hvd09uV2luZG93TG9hZChuYXRpb25hbFBhcmtTbGlkZXIpO1xyXG5cclxufSgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9