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
___CSS_LOADER_EXPORT___.push([module.id, ".slider {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  width: 90vw;\r\n  height: 50vh;\r\n  max-height: 500px;\r\n  position: relative;\r\n  background-color: black;\r\n}\r\n\r\n.slider-img-frame {\r\n  height: 100%;\r\n}\r\n\r\n.slider .previous-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  object-fit: cover;\r\n}\r\n\r\n.slider .image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.slider-img-frame figcaption {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  color: white;\r\n  text-shadow: 1px 1px BLACK;\r\n\r\n}\r\n\r\n.caption-title {\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n}\r\n\r\n.slider-controls {\r\n  border: 1px solid red;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"prev next\"\r\n  \"dots pause\"\r\n  ;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 95% 5%;\r\n}\r\n\r\n.slider-arrow {\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  width: 15px;\r\n  height: 15px;\r\n  align-self: center;\r\n  margin: 25px;\r\n}\r\n\r\n.slider-arrow:hover {\r\n  box-shadow: 2px 2px 3px darkgrey;\r\n}\r\n\r\n.slider-arrow.left {\r\n  grid-area: prev;\r\n}\r\n\r\n.slider-arrow.right {\r\n  grid-area: next;\r\n  justify-self: end;\r\n}\r\n\r\n.slider-toggle {\r\n  grid-area: pause;\r\n  justify-self: start;\r\n  align-self: center;\r\n  position: relative;\r\n  left: 25px;\r\n  bottom: 3px;\r\n}\r\n\r\n.pause {\r\n  width: 0;\r\n  height: 20px;\r\n  border-width: 0px 5px 0px 5px;\r\n  border-color: white;\r\n  border-style: solid;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0 5px 0 0;\r\n\r\n}\r\n\r\n.play {\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: transparent transparent transparent white;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n.left {\r\n  transform: rotate(135deg);\r\n  -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.right {\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.dot-controls {\r\n  grid-area: dots;\r\n  justify-self: end;\r\n  align-self: baseline;\r\n  position: relative;\r\n}\r\n\r\n.dot-index {\r\n  all: unset;\r\n  width: 7px;\r\n  height: 7px;\r\n  margin: 5px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  transition: transform 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot-index:not(.current-dot):hover {\r\n  transform: scale(2.0);\r\n}\r\n\r\n.current-dot {\r\n  background-color: red;\r\n}\r\n\r\n.disappear-appear {\r\n  animation: disappear-appear 1s;\r\n}\r\n\r\n/* .slide-transition {\r\n  animation: slide-transition 1.3s;\r\n} */\r\n\r\n.slide-from-right {\r\n  animation: slide-from-right 1s;\r\n}\r\n\r\n/* \r\n@keyframes slide-transition {\r\n  0% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n} */\r\n\r\n@keyframes slide-transition-movement {\r\n  0% {\r\n    transform: translateX(0%);\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  51% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  52% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n@keyframes slide-to-left {\r\n  0% {\r\n    transform: translateX(0%);\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    transform: translateX(100%);\r\n  }\r\n  100% {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n@keyframes disappear-appear {\r\n  0% {\r\n    opacity: 0.5;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/slider.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,0BAA0B;;AAE5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb;;;EAGA;EACA,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;;AAEpB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,uDAAuD;EACvD,6BAA6B;EAC7B,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;GAEG;;AAEH;EACE,8BAA8B;AAChC;;AAEA;;;;;;;;GAQG;;AAEH;EACE;IACE,yBAAyB;IACzB,UAAU;EACZ;EACA;IACE,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF","sourcesContent":[".slider {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  width: 90vw;\r\n  height: 50vh;\r\n  max-height: 500px;\r\n  position: relative;\r\n  background-color: black;\r\n}\r\n\r\n.slider-img-frame {\r\n  height: 100%;\r\n}\r\n\r\n.slider .previous-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  object-fit: cover;\r\n}\r\n\r\n.slider .image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.slider-img-frame figcaption {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  color: white;\r\n  text-shadow: 1px 1px BLACK;\r\n\r\n}\r\n\r\n.caption-title {\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n}\r\n\r\n.slider-controls {\r\n  border: 1px solid red;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"prev next\"\r\n  \"dots pause\"\r\n  ;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 95% 5%;\r\n}\r\n\r\n.slider-arrow {\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  width: 15px;\r\n  height: 15px;\r\n  align-self: center;\r\n  margin: 25px;\r\n}\r\n\r\n.slider-arrow:hover {\r\n  box-shadow: 2px 2px 3px darkgrey;\r\n}\r\n\r\n.slider-arrow.left {\r\n  grid-area: prev;\r\n}\r\n\r\n.slider-arrow.right {\r\n  grid-area: next;\r\n  justify-self: end;\r\n}\r\n\r\n.slider-toggle {\r\n  grid-area: pause;\r\n  justify-self: start;\r\n  align-self: center;\r\n  position: relative;\r\n  left: 25px;\r\n  bottom: 3px;\r\n}\r\n\r\n.pause {\r\n  width: 0;\r\n  height: 20px;\r\n  border-width: 0px 5px 0px 5px;\r\n  border-color: white;\r\n  border-style: solid;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0 5px 0 0;\r\n\r\n}\r\n\r\n.play {\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: transparent transparent transparent white;\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n.left {\r\n  transform: rotate(135deg);\r\n  -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.right {\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.dot-controls {\r\n  grid-area: dots;\r\n  justify-self: end;\r\n  align-self: baseline;\r\n  position: relative;\r\n}\r\n\r\n.dot-index {\r\n  all: unset;\r\n  width: 7px;\r\n  height: 7px;\r\n  margin: 5px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  transition: transform 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot-index:not(.current-dot):hover {\r\n  transform: scale(2.0);\r\n}\r\n\r\n.current-dot {\r\n  background-color: red;\r\n}\r\n\r\n.disappear-appear {\r\n  animation: disappear-appear 1s;\r\n}\r\n\r\n/* .slide-transition {\r\n  animation: slide-transition 1.3s;\r\n} */\r\n\r\n.slide-from-right {\r\n  animation: slide-from-right 1s;\r\n}\r\n\r\n/* \r\n@keyframes slide-transition {\r\n  0% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n} */\r\n\r\n@keyframes slide-transition-movement {\r\n  0% {\r\n    transform: translateX(0%);\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  51% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  52% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n@keyframes slide-to-left {\r\n  0% {\r\n    transform: translateX(0%);\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    transform: translateX(100%);\r\n  }\r\n  100% {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n@keyframes disappear-appear {\r\n  0% {\r\n    opacity: 0.5;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


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
   * Index of the previous picture that was played.
   */
  #previousPicIndex;

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
    this.#previousPicIndex = 0;
    
    this.#slider = document.createElement("div");
    this.#addClassesToElement(this.slider, "slider");

    this.#frame = document.createElement("figure");
    this.#addClassesToElement(this.#frame, "slider-img-frame");
    
    this.#controls = document.createElement("section");
    this.#addClassesToElement(this.#controls, "slider-controls");
    this.#addControlsToSlider();

    const img = document.createElement("img");
    const prevImg = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    const figCaptionTitle = document.createElement("p");
    const figCaptionText = document.createElement("p");
    
    this.#addClassesToElement(img, "image");
    this.#addClassesToElement(prevImg, "previous-image");
    this.#addClassesToElement(figCaptionTitle, "caption-title");
    this.#addClassesToElement(figCaptionText, "caption-text");
    
    figCaption.append(figCaptionTitle, figCaptionText);
    this.#frame.append(prevImg, img, figCaption);

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
        if (index === this.#currentPicIndex) {
          return;
        }

        this.#previousPicIndex = this.#currentPicIndex;
        
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
    const prevImg = this.#frame.querySelector(".previous-image");

    const picRef = this.#pictures[index];
    const prevPicRef = this.#pictures[this.#previousPicIndex];

    prevImg.src = prevPicRef.path;

    _utility__WEBPACK_IMPORTED_MODULE_0__["default"].triggerAnimation(figCaptionText.parentNode, "disappear-appear");
    _utility__WEBPACK_IMPORTED_MODULE_0__["default"].triggerAnimation(img, "disappear-appear");
    
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
    this.#previousPicIndex = this.#currentPicIndex;

    if (this.#currentPicIndex < (this.#pictures.length - 1)) {
      this.#currentPicIndex += 1;
    } else {
      this.#currentPicIndex = 0;
    }
    
    this.#loadImage(this.#currentPicIndex);
  }

  #reverseSlider() {
    this.#previousPicIndex = this.#currentPicIndex;

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

  /**
   * For a given element, add an animation but only play it once. Afterwards,
   * unload the animation. This allows you to add the class to it again to 
   * play the animation; this is useful when associated with event triggers.
   * @param {HTMLElement} elem - An element to apply the animation to.
   * @param {string} animationName - A CSS class associated with an animation.
   */
  static triggerAnimation(elem, animationName) {
    elem.classList.add(animationName);

    elem.onanimationend = () => {elem.classList.remove(animationName)};
  }

  /**
   * Recursively scale the tree of a child node until the parent matching the given
   * selector is found. Returns NULL if no matching parent is found.
   * @param {HTMLElement} elem - A child node.
   * @param {string} selector - CSS Selector String.
   * 
   * @returns {HTMLelement} - Parent of elem.
   */
  static getMatchingParent(elem, selector) {
    while(!elem.parentNode.matches(selector)) {
      elem = elem.parentNode;
      if (elem.matches("html")) {
        return null;
      }
    }
    return elem;
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

  const nationalParkSlider = new _slider__WEBPACK_IMPORTED_MODULE_8__["default"](_sliderPics__WEBPACK_IMPORTED_MODULE_9__.sliderPics, 6);
  
  document.body.append(nationalParkSlider.slider);

  _slider__WEBPACK_IMPORTED_MODULE_8__["default"].playSlideshowOnWindowLoad(nationalParkSlider);

}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsNkhBQTZIO0FBQzdILDJIQUEySDtBQUMzSDtBQUNBLGlEQUFpRCx1Q0FBdUMsdUNBQXVDLEtBQUssd0JBQXdCLHNDQUFzQyxxQkFBcUIsS0FBSyxvQkFBb0Isb0NBQW9DLHFCQUFxQixzQkFBc0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsU0FBUyx3QkFBd0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsS0FBSyx1QkFBdUIsaUJBQWlCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLEtBQUssb0RBQW9ELG9CQUFvQixvQkFBb0Isc0JBQXNCLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLHlCQUF5QixzQkFBc0IsS0FBSyx3QkFBd0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUssZ0NBQWdDLHdCQUF3QixLQUFLLHNDQUFzQyxrQ0FBa0MsS0FBSyxrQ0FBa0MsNEJBQTRCLG1CQUFtQixLQUFLLGtDQUFrQyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixLQUFLLDRCQUE0QixnQ0FBZ0MsT0FBTyxnQkFBZ0IsMEJBQTBCLGdDQUFnQyw0QkFBNEIsbUJBQW1CLEtBQUssZUFBZSwrQkFBK0IsdUNBQXVDLEtBQUssYUFBYSxpQ0FBaUMseUNBQXlDLDhDQUE4Qyx5QkFBeUIsOEJBQThCLHFCQUFxQix5QkFBeUIsZUFBZSw4QkFBOEIseUJBQXlCLGtCQUFrQixnQkFBZ0IsY0FBYyxxQ0FBcUMsS0FBSywwQkFBMEIsVUFBVSxxQkFBcUIsbUNBQW1DLHNDQUFzQyxPQUFPLFdBQVcscUNBQXFDLE9BQU8sWUFBWSxxQkFBcUIsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixLQUFLLG1DQUFtQyxZQUFZLHdDQUF3QyxPQUFPLHNCQUFzQix5QkFBeUIsT0FBTywwQkFBMEIsMkJBQTJCLHNCQUFzQix3RUFBd0Usd0NBQXdDLHFDQUFxQyxPQUFPLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLHVCQUF1Qix3QkFBd0IsT0FBTyx1QkFBdUIsMkJBQTJCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDhCQUE4Qix3QkFBd0Isa0JBQWtCLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLE9BQU8sMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLE9BQU8sb0NBQW9DLHNDQUFzQyxPQUFPLFNBQVMsb0JBQW9CLHNCQUFzQixvQkFBb0IsS0FBSyxpSUFBaUksbUZBQW1GLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sOEdBQThHLHVGQUF1RixtQkFBbUIsdUNBQXVDLHVDQUF1QyxLQUFLLHdCQUF3QixzQ0FBc0MscUJBQXFCLEtBQUssb0JBQW9CLG9DQUFvQyxxQkFBcUIsc0JBQXNCLG1CQUFtQixvQkFBb0IsMEJBQTBCLFNBQVMsd0JBQXdCLGtCQUFrQixvQkFBb0IscUJBQXFCLEtBQUssdUJBQXVCLGlCQUFpQix3QkFBd0Isd0JBQXdCLHdCQUF3QixLQUFLLG9EQUFvRCxvQkFBb0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsNEJBQTRCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEtBQUssd0JBQXdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixLQUFLLGdDQUFnQyx3QkFBd0IsS0FBSyxzQ0FBc0Msa0NBQWtDLEtBQUssa0NBQWtDLDRCQUE0QixtQkFBbUIsS0FBSyxrQ0FBa0MseUJBQXlCLGdCQUFnQixrQkFBa0IsS0FBSyw0QkFBNEIsZ0NBQWdDLE9BQU8sZ0JBQWdCLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLG1CQUFtQixLQUFLLGVBQWUsK0JBQStCLHVDQUF1QyxLQUFLLGFBQWEsaUNBQWlDLHlDQUF5Qyw4Q0FBOEMseUJBQXlCLDhCQUE4QixxQkFBcUIseUJBQXlCLGVBQWUsOEJBQThCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLGNBQWMscUNBQXFDLEtBQUssMEJBQTBCLFVBQVUscUJBQXFCLG1DQUFtQyxzQ0FBc0MsT0FBTyxXQUFXLHFDQUFxQyxPQUFPLFlBQVkscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsS0FBSyxtQ0FBbUMsWUFBWSx3Q0FBd0MsT0FBTyxzQkFBc0IseUJBQXlCLE9BQU8sMEJBQTBCLDJCQUEyQixzQkFBc0Isd0VBQXdFLHdDQUF3QyxxQ0FBcUMsT0FBTyx3QkFBd0IsOEJBQThCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLE9BQU8sdUJBQXVCLDJCQUEyQixzQkFBc0IsK0JBQStCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLGtCQUFrQixxQkFBcUIsZ0NBQWdDLDRCQUE0QixPQUFPLDJCQUEyQix5QkFBeUIsdUJBQXVCLDRCQUE0QixPQUFPLG9DQUFvQyxzQ0FBc0MsT0FBTyxTQUFTLG9CQUFvQixzQkFBc0Isb0JBQW9CLEtBQUssNklBQTZJO0FBQzcvUTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtDQUFrQyxLQUFLLGtCQUFrQixrQkFBa0IsdUJBQXVCLHdCQUF3QixLQUFLLHlCQUF5QixzQkFBc0Isd0JBQXdCLEtBQUssbUNBQW1DLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLCtCQUErQixrQ0FBa0MsS0FBSyxrQkFBa0Isa0JBQWtCLHVCQUF1Qix3QkFBd0IsS0FBSyx5QkFBeUIsc0JBQXNCLHdCQUF3QixLQUFLLG1DQUFtQyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxtQkFBbUI7QUFDejNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0akJBQTRqQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLHNKQUFzSixxQkFBcUIsS0FBSyxVQUFVLHFCQUFxQixLQUFLLFlBQVksdUJBQXVCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLCtEQUErRCxrQkFBa0Isb0JBQW9CLEtBQUssV0FBVyxnQ0FBZ0Msd0JBQXdCLEtBQUssT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsNGlCQUE0aUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsS0FBSyxzSkFBc0oscUJBQXFCLEtBQUssVUFBVSxxQkFBcUIsS0FBSyxZQUFZLHVCQUF1QixLQUFLLG1CQUFtQixtQkFBbUIsS0FBSywrREFBK0Qsa0JBQWtCLG9CQUFvQixLQUFLLFdBQVcsZ0NBQWdDLHdCQUF3QixLQUFLLG1CQUFtQjtBQUNobkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG1EQUFtRCw4QkFBOEIscUJBQXFCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsS0FBSywyQkFBMkIsbUJBQW1CLEtBQUssaUNBQWlDLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3QixLQUFLLHdCQUF3QixrQkFBa0Isd0JBQXdCLHFCQUFxQixtQkFBbUIseUJBQXlCLEtBQUssc0NBQXNDLHlCQUF5QixtQkFBbUIsaUJBQWlCLG1CQUFtQixpQ0FBaUMsU0FBUyx3QkFBd0Isd0JBQXdCLHNCQUFzQixLQUFLLDBCQUEwQiw0QkFBNEIseUJBQXlCLGlCQUFpQixhQUFhLGtCQUFrQixtQkFBbUIsd0NBQXdDLG9CQUFvQix5RUFBeUUsNENBQTRDLGlDQUFpQyxLQUFLLHVCQUF1QiwwQkFBMEIsZ0NBQWdDLDRCQUE0QixtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUJBQW1CLEtBQUssNkJBQTZCLHVDQUF1QyxLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyw2QkFBNkIsc0JBQXNCLHdCQUF3QixLQUFLLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGtCQUFrQixLQUFLLGdCQUFnQixlQUFlLG1CQUFtQixvQ0FBb0MsMEJBQTBCLDBCQUEwQixvQ0FBb0MsNkJBQTZCLHlCQUF5QixTQUFTLGVBQWUsaUJBQWlCLGtCQUFrQiwwQkFBMEIseUJBQXlCLDhEQUE4RCxvQ0FBb0MsNkJBQTZCLGlCQUFpQixLQUFLLGVBQWUsZ0NBQWdDLHdDQUF3QyxLQUFLLGdCQUFnQixnQ0FBZ0Msd0NBQXdDLEtBQUssdUJBQXVCLHNCQUFzQix3QkFBd0IsMkJBQTJCLHlCQUF5QixLQUFLLG9CQUFvQixpQkFBaUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsOEJBQThCLHlCQUF5QixpQ0FBaUMsc0JBQXNCLEtBQUssNENBQTRDLDRCQUE0QixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSywyQkFBMkIscUNBQXFDLEtBQUssOEJBQThCLHVDQUF1QyxNQUFNLDZCQUE2QixxQ0FBcUMsS0FBSyw0Q0FBNEMsVUFBVSxxQkFBcUIsT0FBTyxZQUFZLHFCQUFxQixPQUFPLE1BQU0sZ0RBQWdELFVBQVUsa0NBQWtDLG1CQUFtQixPQUFPLFdBQVcscUNBQXFDLG1CQUFtQixPQUFPLFdBQVcsb0NBQW9DLG1CQUFtQixPQUFPLFdBQVcsbUJBQW1CLE9BQU8sWUFBWSxrQ0FBa0MsT0FBTyxLQUFLLGtDQUFrQyxVQUFVLGtDQUFrQyxPQUFPLFlBQVkscUNBQXFDLE9BQU8sS0FBSyxxQ0FBcUMsVUFBVSxvQ0FBb0MsT0FBTyxZQUFZLGtDQUFrQyxPQUFPLEtBQUsscUNBQXFDLFVBQVUscUJBQXFCLE9BQU8sWUFBWSxxQkFBcUIsT0FBTyxLQUFLLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLGtDQUFrQyw4QkFBOEIscUJBQXFCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsS0FBSywyQkFBMkIsbUJBQW1CLEtBQUssaUNBQWlDLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3QixLQUFLLHdCQUF3QixrQkFBa0Isd0JBQXdCLHFCQUFxQixtQkFBbUIseUJBQXlCLEtBQUssc0NBQXNDLHlCQUF5QixtQkFBbUIsaUJBQWlCLG1CQUFtQixpQ0FBaUMsU0FBUyx3QkFBd0Isd0JBQXdCLHNCQUFzQixLQUFLLDBCQUEwQiw0QkFBNEIseUJBQXlCLGlCQUFpQixhQUFhLGtCQUFrQixtQkFBbUIsd0NBQXdDLG9CQUFvQix5RUFBeUUsNENBQTRDLGlDQUFpQyxLQUFLLHVCQUF1QiwwQkFBMEIsZ0NBQWdDLDRCQUE0QixtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUJBQW1CLEtBQUssNkJBQTZCLHVDQUF1QyxLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyw2QkFBNkIsc0JBQXNCLHdCQUF3QixLQUFLLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGtCQUFrQixLQUFLLGdCQUFnQixlQUFlLG1CQUFtQixvQ0FBb0MsMEJBQTBCLDBCQUEwQixvQ0FBb0MsNkJBQTZCLHlCQUF5QixTQUFTLGVBQWUsaUJBQWlCLGtCQUFrQiwwQkFBMEIseUJBQXlCLDhEQUE4RCxvQ0FBb0MsNkJBQTZCLGlCQUFpQixLQUFLLGVBQWUsZ0NBQWdDLHdDQUF3QyxLQUFLLGdCQUFnQixnQ0FBZ0Msd0NBQXdDLEtBQUssdUJBQXVCLHNCQUFzQix3QkFBd0IsMkJBQTJCLHlCQUF5QixLQUFLLG9CQUFvQixpQkFBaUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsOEJBQThCLHlCQUF5QixpQ0FBaUMsc0JBQXNCLEtBQUssNENBQTRDLDRCQUE0QixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSywyQkFBMkIscUNBQXFDLEtBQUssOEJBQThCLHVDQUF1QyxNQUFNLDZCQUE2QixxQ0FBcUMsS0FBSyw0Q0FBNEMsVUFBVSxxQkFBcUIsT0FBTyxZQUFZLHFCQUFxQixPQUFPLE1BQU0sZ0RBQWdELFVBQVUsa0NBQWtDLG1CQUFtQixPQUFPLFdBQVcscUNBQXFDLG1CQUFtQixPQUFPLFdBQVcsb0NBQW9DLG1CQUFtQixPQUFPLFdBQVcsbUJBQW1CLE9BQU8sWUFBWSxrQ0FBa0MsT0FBTyxLQUFLLGtDQUFrQyxVQUFVLGtDQUFrQyxPQUFPLFlBQVkscUNBQXFDLE9BQU8sS0FBSyxxQ0FBcUMsVUFBVSxvQ0FBb0MsT0FBTyxZQUFZLGtDQUFrQyxPQUFPLEtBQUsscUNBQXFDLFVBQVUscUJBQXFCLE9BQU8sWUFBWSxxQkFBcUIsT0FBTyxLQUFLLG1CQUFtQjtBQUNyN1M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUseUZBQU8sSUFBSSxnR0FBYyxHQUFHLGdHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsV0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7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Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDc0M7QUFDdEM7QUFDcUI7QUFDQTtBQUNHO0FBQ0Y7QUFDdEI7QUFDQTtBQUNnQztBQUNDO0FBQ1E7QUFDWDtBQUM0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1Q0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBTztBQUM3QixFQUFFLHFFQUEyQixVQUFVLG9EQUFZO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUIsZ0VBQXVCO0FBQ3hDLEVBQUUsMkRBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLCtDQUFNLENBQUMsbURBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5RUFBZ0M7QUFDbEM7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2Ryb3Bkb3duLmNzcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL3NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvZHJvcGRvd24uY3NzPzYyNTQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvc2xpZGVyLmNzcz80MDliIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8Ly4ocG5nfGpwZSIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvbmF2RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvc2xpZGVyUGljcy5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9idWZmaW5nLWNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnVmZmluZy1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2J1ZmZpbmctY29tcG9uZW50cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUp1bGl1cytTYW5zK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaWRhY3QrR290aGljJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tbG9nby1mb250OiBcXFwiSnVsaXVzIFNhbnMgT25lXFxcIjtcXHJcXG4gIC0taGVhZGVyLWZvbnQ6IFxcXCJEaWRhY3QgR290aGljXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1sb2dvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sb2dvLWZvbnQpO1xcclxcbiAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICBmb250LXNpemU6IDExMCU7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLWxvZ28gaDEge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItbGluay1jbGlja2FibGUsIC5tZW51YmFyLWRyb3Bkb3duIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMjUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duLWxpbmsge1xcclxcbiAgcGFkZGluZzogMTBweCAycHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duLWxpbms6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1kcm9wZG93bi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1kcm9wZG93biAuYXJyb3cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgYm90dG9tOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51ID4gKiB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvd24ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi51cCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuXFxyXFxuLmRyb3Bkb3duLWxpbmtzIHtcXHJcXG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogdW5zZXQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDIwMCU7XFxyXFxuICB0b3A6IDEwNSU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYW5pbWF0aW9uOiBwb3BJbiAwLjI1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1JSk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMyUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEuMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgLyogRGVidWcgKi9cXHJcXG4gICAgY29sb3I6IHJlZDsgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLnNpdGUtbG9nbyB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGRvd24tbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJpY29uIGxvZ29cXFwiXFxyXFxuICAgIFxcXCJtZW51IG1lbnVcXFwiO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVudS1pY29uIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZpZ2F0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BJbiAxcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93bi1saW5rcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZXZlcnQ7XFxyXFxuICAgIGJvcmRlcjogcmV2ZXJ0O1xcclxcbiAgICBhbmltYXRpb246IHBvcEluIDFzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVudWJhci1kcm9wZG93bi1saW5rIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb2xsYXBzZWQge1xcclxcbiAgbWF4LWhlaWdodDogMHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UcmFuc2ZlciB0aGUgbmF2IGVsZW1lbnQgdXNpbmcgYSBmaXhlZCBwb3NpdGlvbiB0byByZW1vdmUgaXQgZnJvbSB0aGUgZmxvdy4uLlxcclxcbnRvIHRoZSBsZWZ0IHNpZGUuXFxyXFxuKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZHJvcGRvd24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2I7O2VBRVc7SUFDWCwrQkFBK0I7SUFDL0IsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztBQUVGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTs7O0NBR0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SnVsaXVzK1NhbnMrT25lJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1sb2dvLWZvbnQ6IFxcXCJKdWxpdXMgU2FucyBPbmVcXFwiO1xcclxcbiAgLS1oZWFkZXItZm9udDogXFxcIkRpZGFjdCBHb3RoaWNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLWxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxyXFxuICBtYXJnaW46IDAgMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtbG9nbyBoMSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJhci1saW5rLWNsaWNrYWJsZSwgLm1lbnViYXItZHJvcGRvd24ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24tbGluayB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnViYXItZHJvcGRvd24tbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duLWxpbmsgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51YmFyLWRyb3Bkb3duIC5hcnJvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgPiAqIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFycm93IHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG93biB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG5cXHJcXG4uZHJvcGRvd24tbGlua3Mge1xcclxcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMjAwJTtcXHJcXG4gIHRvcDogMTA1JTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBhbmltYXRpb246IHBvcEluIDAuMjVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUlKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zJSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICAvKiBEZWJ1ZyAqL1xcclxcbiAgICBjb2xvcjogcmVkOyAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2l0ZS1sb2dvIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87ICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcImljb24gbG9nb1xcXCJcXHJcXG4gICAgXFxcIm1lbnUgbWVudVxcXCI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51LWljb24ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmlnYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGdyaWQtYXJlYTogbWVudTtcXHJcXG4gICAgdG9wOiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbmltYXRpb246IHBvcEluIDFzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3Bkb3duLWxpbmtzIHtcXHJcXG4gICAgcG9zaXRpb246IHJldmVydDtcXHJcXG4gICAgYm9yZGVyOiByZXZlcnQ7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9wSW4gMXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51YmFyLWRyb3Bkb3duLWxpbmsge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhcHNlZCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAwcHg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRyYW5zZmVyIHRoZSBuYXYgZWxlbWVudCB1c2luZyBhIGZpeGVkIHBvc2l0aW9uIHRvIHJlbW92ZSBpdCBmcm9tIHRoZSBmbG93Li4uXFxyXFxudG8gdGhlIGxlZnQgc2lkZS5cXHJcXG4qL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xcclxcbn1cXHJcXG4uc2FtcGxlLXRleHQge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zYW1wbGUtdGV4dCBoMSB7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuc2FtcGxlLXRleHQge1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJztcXHJcXG59XFxyXFxuLnNhbXBsZS10ZXh0IHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2FtcGxlLXRleHQgaDEge1xcclxcbiAgZm9udC1zaXplOiAxMjUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnNhbXBsZS10ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWRlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWltZy1mcmFtZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIgLnByZXZpb3VzLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIgLmltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbWctZnJhbWUgZmlnY2FwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDI1cHg7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggQkxBQ0s7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXB0aW9uLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWNvbnRyb2xzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJwcmV2IG5leHRcXFwiXFxyXFxuICBcXFwiZG90cyBwYXVzZVxcXCJcXHJcXG4gIDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDk1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWFycm93OmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGRhcmtncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWFycm93LmxlZnQge1xcclxcbiAgZ3JpZC1hcmVhOiBwcmV2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWFycm93LnJpZ2h0IHtcXHJcXG4gIGdyaWQtYXJlYTogbmV4dDtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLXRvZ2dsZSB7XFxyXFxuICBncmlkLWFyZWE6IHBhdXNlO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDI1cHg7XFxyXFxuICBib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwcHggNXB4IDBweCA1cHg7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4IDAgMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXkge1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMTBweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC1jb250cm9scyB7XFxyXFxuICBncmlkLWFyZWE6IGRvdHM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZG90LWluZGV4IHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICB3aWR0aDogN3B4O1xcclxcbiAgaGVpZ2h0OiA3cHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb3QtaW5kZXg6bm90KC5jdXJyZW50LWRvdCk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjApO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1kb3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYXBwZWFyLWFwcGVhciB7XFxyXFxuICBhbmltYXRpb246IGRpc2FwcGVhci1hcHBlYXIgMXM7XFxyXFxufVxcclxcblxcclxcbi8qIC5zbGlkZS10cmFuc2l0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGUtdHJhbnNpdGlvbiAxLjNzO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uc2xpZGUtZnJvbS1yaWdodCB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLWZyb20tcmlnaHQgMXM7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbkBrZXlmcmFtZXMgc2xpZGUtdHJhbnNpdGlvbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxLjA7XFxyXFxuICB9XFxyXFxufSAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtdHJhbnNpdGlvbi1tb3ZlbWVudCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNTElIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNTIlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvLWxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhci1hcHBlYXIge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYjs7O0VBR0E7RUFDQSxxQ0FBcUM7RUFDckMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1REFBdUQ7RUFDdkQsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbWctZnJhbWUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIC5wcmV2aW91cy1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIC5pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItaW1nLWZyYW1lIGZpZ2NhcHRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyNXB4O1xcclxcbiAgbGVmdDogMjVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IEJMQUNLO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2FwdGlvbi10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1jb250cm9scyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwicHJldiBuZXh0XFxcIlxcclxcbiAgXFxcImRvdHMgcGF1c2VcXFwiXFxyXFxuICA7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5NSUgNSU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYXJyb3cge1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdzpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCBkYXJrZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdy5sZWZ0IHtcXHJcXG4gIGdyaWQtYXJlYTogcHJldjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1hcnJvdy5yaWdodCB7XFxyXFxuICBncmlkLWFyZWE6IG5leHQ7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci10b2dnbGUge1xcclxcbiAgZ3JpZC1hcmVhOiBwYXVzZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXVzZSB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMHB4IDVweCAwcHggNXB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwIDVweCAwIDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wbGF5IHtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5kb3QtY29udHJvbHMge1xcclxcbiAgZ3JpZC1hcmVhOiBkb3RzO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC1pbmRleCB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgd2lkdGg6IDdweDtcXHJcXG4gIGhlaWdodDogN3B4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZG90LWluZGV4Om5vdCguY3VycmVudC1kb3QpOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMi4wKTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtZG90IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FwcGVhci1hcHBlYXIge1xcclxcbiAgYW5pbWF0aW9uOiBkaXNhcHBlYXItYXBwZWFyIDFzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2xpZGUtdHJhbnNpdGlvbiB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLXRyYW5zaXRpb24gMS4zcztcXHJcXG59ICovXFxyXFxuXFxyXFxuLnNsaWRlLWZyb20tcmlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZS1mcm9tLXJpZ2h0IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLXRyYW5zaXRpb24ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgfVxcclxcbn0gKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLXRyYW5zaXRpb24tbW92ZW1lbnQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDUxJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDUyJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS10by1sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBkaXNhcHBlYXItYXBwZWFyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEuMDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcGRvd24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBNZW51QmFyLiBDb250YWlucyBvcGVyYXRpb25zIGZvciBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIE1lbnVCYXIuXHJcbiAqIEZpcnN0LCBhZGQgZWxlbWVudHMgdG8gaXQgdXNpbmcgdGhlIHZhcmlvdXMgYWRkKigpIG1ldGhvZHMuIFRoZW4sIHVzZVxyXG4gKiBnZXRNZW51QmFyKCkgdG8gZ2V0IHRoZSBlbGVtZW50IHJlZmVyZW5jZSwgd2hpY2ggeW91IGNhbiB1c2UgdGhhdCB0byBhcHBlbmQgdG8gXHJcbiAqIGEgcGFyZW50IG9mIHlvdXIgY2hvaWNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBNZW51QmFyLCBzaW5jZSBvbmx5IG9uZSBNZW51QmFyIHNob3VsZCBldmVyIGV4aXN0IG9uIGEgd2VicGFnZS5cclxuICAgKi9cclxuICBzdGF0aWMgI2luc3RhbmNlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZW51IGVsZW1lbnQuXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAqL1xyXG4gIG1lbnU7XHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNsaWNrYWJsZSBlbGVtZW50cyBvbiB0aGUgbWVudS5cclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgKi9cclxuICAjY2xpY2thYmxlcztcclxuICAjbWVudUl0ZW1zO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYnJlYWtwb2ludCB0byBiZSBzZXQgdG8gY29udmVydCB0aGUgbWVudSBiYXIgdG8gYSBtb2JpbGUgZm9ybWF0LiBJbiBweC5cclxuICAgKiBXaGVuIGEgTWVudUJhciByZWZlcmVuY2UgaXMgaW5pdGlhbGl6ZWQsIHRoZSBkZWZhdWx0IGJyZWFrcG9pbnQgaXMgODYwcHguXHJcbiAgICogQHR5cGUge01lZGlhUXVlcnlMaXN0fVxyXG4gICAqL1xyXG4gIG1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBicmVha3BvaW50ID0gODYwKSB7XHJcbiAgICBpZiAoTWVudUJhci4jaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gTWVudUJhci4jaW5zdGFuY2U7XHJcbiAgICB9IFxyXG4gICAgTWVudUJhci4jaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrYWJsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLiNtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgdGhpcy4jbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG5cclxuICAgIHRoaXMubW9iaWxlQnJlYWtwb2ludExpc3RlbmVyID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6JHticmVha3BvaW50fXB4KWApO1xyXG4gICAgdGhpcy4jaW5pdGlhbGl6ZVJlc3BvbnNpdmVNZW51KCk7XHJcblxyXG4gICAgdGhpcy4jYWRkSGFtYnVyZ2VySWNvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGhhbWJ1cmdlciBpY29uIHRvIGNsaWNrYWJsZXMuXHJcbiAgICovXHJcbiAgI2FkZEhhbWJ1cmdlckljb24oKSB7XHJcbiAgICBjb25zdCBzdmdOcyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgXCJzdmdcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgODBcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgNDApO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCA0MCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgbGV0IHkgPSAzMCAqIGk7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsIFwicmVjdFwiKTtcclxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAxMDApO1xyXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAyMCk7XHJcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQobGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb25cIik7XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlcmVkISFcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqICovIFxyXG4gICNhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGNsYXNzTmFtZXMsIGRlZmF1bHRDbGFzcykge1xyXG4gICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAjaW5pdGlhbGl6ZVJlc3BvbnNpdmVNZW51KCkge1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBudWxsO1xyXG4gICAgdGhpcy5tb2JpbGVCcmVha3BvaW50TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAvLyBpZiB0aGUgd2lkdGggb2YgdGhlIHNjcmVlbiBpcyA4NjBweCBvciBiZWxvdy4uLjpcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlIGJyZWFrcG9pbnQgYWN0aXZlLCBoaWRlIG1lbnUgd2hlbiBjbGlja2VkIG9mZi4uLlwiKTtcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGUgYnJlYWtwb2ludCBpbmFjdGl2ZSwgY29sbGFwc2luZyBhbnkgYWN0aXZlIG1lbnVzLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGFueXRoaW5nIGlmIG5vIGRyb3Bkb3duIGlzIGFjdGl2ZS5cclxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHsgXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG9ubHkgY2xvc2Ugd2hlbiB0aGUgZWxlbWVudCBjbGlja2VkIGlzIG5vdCB0aGUgZHJvcGRvd24gaXRzZWxmIG9yIGl0cyBjaGlsZC5cclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLm1lbnViYXItZHJvcGRvd25cIikgJiYgIWFjdGl2ZS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICBNZW51QmFyLmNsb3NlQWN0aXZlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgbGluayB0byB0aGUgbWVudS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIGxpbmsuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBUaGUgcGF0aCB0aGUgbGluayBzaG91bGQgcG9pbnQgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWVzIHRoZSBsaW5rIHNob3VsZCBwb3NzZXNzLiBCeVxyXG4gICAqIGRlZmF1bHQsIGl0IG9idGFpbnMgdGhlIGNsYXNzIG5hbWUgJ21lbnUtYmFyLWNsaWNrYWJsZScuXHJcbiAgICovXHJcbiAgYWRkTGluayhuYW1lLCBocmVmLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChsaW5rLCBjbGFzc05hbWVzLCBcIm1lbnViYXItbGluay1jbGlja2FibGVcIik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSB0ZXh0IGxvZ28gdG8gdGhlIG1lbnUuIFVzZWZ1bCBmb3IgYSBjb21wYW55IGxvZ28uXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBBY2NvbXBhbnlpbmcgdGV4dCB0byBkaXNwbGF5IHdpdGggdGhlIGljb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBGaWxlcGF0aCByZXByZXNlbnRpbmcgYW4gaWNvbi4gTnVsbCBpZiB5b3UgZG9uJ3QgbmVlZCBhbiBpY29uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBPcHRpb25hbCBjbGFzcyBuYW1lcyB0aGUgbGluayBzaG91bGQgcG9zc2Vzcy4gQnlcclxuICAgKiBkZWZhdWx0LCBpdCBvYnRhaW5zIHRoZSBjbGFzcyBuYW1lICdtZW51LWJhci1jbGlja2FibGUnLiBcclxuICAgKi9cclxuICBhZGRMb2dvKHRleHQsIGljb249bnVsbCwgaHJlZj1cIlwiLCAuLi5jbGFzc05hbWVzKXtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGxvZ28sIGNsYXNzTmFtZXMsIFwic2l0ZS1sb2dvXCIpO1xyXG5cclxuICAgIGlmIChpY29uICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGljb24pO1xyXG4gICAgICBsb2dvLmFwcGVuZChpY29uRWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dExvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kKHRleHRMb2dvKTtcclxuXHJcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgdGhpcy4jY2xpY2thYmxlcy5wdXNoKGxvZ28pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHJvcGRvd24gbWVudSBiYXNlZCBvbiBhIGdpdmVuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXHJcbiAgICogQHBhcmFtIHsge1wibmFtZVwiIDogXCJocmVmXCJ9W10gfSBsaW5rcyAtIEFuIGFycmF5IG9mIG5hbWU6aHJlZiBvYmplY3QgcGFpcnMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gT3B0aW9uYWwgY2xhc3MgbmFtZXMgdGhlIGxpbmsgc2hvdWxkIHBvc3Nlc3MuIEJ5XHJcbiAgICogZGVmYXVsdCwgaXQgb2J0YWlucyB0aGUgY2xhc3MgbmFtZSAnbWVudS1iYXItY2xpY2thYmxlJy5cclxuICAgKi9cclxuICBhZGREcm9wZG93bihuYW1lLCBsaW5rcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gVGhyZWUgY29tcG9uZW50cyB0byBhIGRyb3Bkb3duLCB0aGUgbGFiZWwsIHRoZSBuYXZsaW5rcywgYW5kIHRoZSBhcnJvdy5cclxuICAgIGNvbnN0IGRyb3BEb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBkcm9wRG93bkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcERvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoZHJvcERvd25Db250YWluZXIsIGNsYXNzTmFtZXMsIFwibWVudWJhci1kcm9wZG93blwiKTtcclxuICAgIGRyb3BEb3duTGFiZWwuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWxhYmVsXCIpO1xyXG4gICAgZHJvcERvd25MaW5rcy5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbGlua3NcIiwgXCJjb2xsYXBzZWRcIik7XHJcbiAgICBkcm9wRG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiLCBcImRvd25cIik7XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgocGFpcikgPT4ge1xyXG4gICAgICBsZXQgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIFxyXG4gICAgICBsaW5rLnRleHRDb250ZW50ID0gcGFpci50ZXh0O1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcGFpci5ocmVmKTtcclxuXHJcbiAgICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51YmFyLWRyb3Bkb3duLWxpbmtcIik7XHJcbiAgICAgIGxpbmtXcmFwcGVyLmFwcGVuZChsaW5rKTtcclxuICAgICAgZHJvcERvd25MaW5rcy5hcHBlbmQobGlua1dyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wRG93bkxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBkcm9wRG93bkxhYmVsLmFwcGVuZChkcm9wRG93bkFycm93KTtcclxuICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZChkcm9wRG93bkxhYmVsLCBkcm9wRG93bkxpbmtzKTtcclxuXHJcbiAgICBkcm9wRG93bkxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxyXG4gICAgICAgIChlKSA9PiB0aGlzLiN0b2dnbGVEcm9wZG93bi5jYWxsKHRoaXMsIGUpKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja2FibGVzLnB1c2goZHJvcERvd25Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgY2xvc2luZyBhbnkgYWN0aXZlIGRyb3Bkb3ducywgaWYgdGhleSdyZSBhY3RpdmUgb3IgdGhlIHVzZXIgY2xpY2tzIFxyXG4gICAqIGFueSBhcmVhIG91dHNpZGUgb2YgaXQgb24gdGhlIHdpbmRvdy5cclxuICAgKi9cclxuICBzdGF0aWMgY2xvc2VBY3RpdmVEcm9wZG93bigpIHtcclxuICAgIC8vIElmIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSB0aGF0IGlzbid0IHRoZSBjdXJyZW50IGFjdGl2ZSBkcm9wZG93bi4uLlxyXG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnViYXItZHJvcGRvd24uYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd24gPSBhY3RpdmVEcm9wZG93bkJ0bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWxpbmtzXCIpO1xyXG4gICAgY29uc3QgYWN0aXZlQXJyb3cgPSBhY3RpdmVEcm9wZG93bkJ0bi5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgXHJcbiAgICAvLyBjb2xsYXBzZSBpdC5cclxuICAgIGFjdGl2ZURyb3Bkb3duQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBhY3RpdmVEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgYWN0aXZlQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcInVwXCIpO1xyXG4gICAgYWN0aXZlQXJyb3cuY2xhc3NMaXN0LmFkZChcImRvd25cIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNhbGxiYWNrIHRvIHNob3cgYSBkcm9wZG93biBtZW51LiBBc3NpZ24gdGhpcyB0byBidXR0b25zIG9uIHRoZSBuYXZiYXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSBlIC0gRXZlbnQuIFVzZWQgdG8gZ2V0IHRoZSBjdXJyZW50IGxpbmsgYmVpbmcgaG92ZXJlZCBvdmVyLFxyXG4gICAqIGFuZCB0aGVuIHVzZSBpdCB0byBmaW5kIHRoZSBkcm9wZG93biBsaW5rcy5cclxuICAgKi9cclxuICAjdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgXHJcbiAgICBsZXQgZHJvcGRvd25Sb290ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgd2hpbGUoIWRyb3Bkb3duUm9vdC5tYXRjaGVzKFwiLm1lbnViYXItZHJvcGRvd25cIikpIHtcclxuICAgICAgZHJvcGRvd25Sb290ID0gZHJvcGRvd25Sb290LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm1vYmlsZUJyZWFrcG9pbnRMaXN0ZW5lci5tYXRjaGVzKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YmFyLWRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICAgICAgaWYgKGFjdGl2ZURyb3Bkb3duICE9PSBudWxsICYmICFhY3RpdmVEcm9wZG93bi5jb250YWlucyhkcm9wZG93blJvb3QpKSB7XHJcbiAgICAgICAgTWVudUJhci5jbG9zZUFjdGl2ZURyb3Bkb3duKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkxpc3QgPSBkcm9wZG93blJvb3QucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgY29uc3QgZHJvcGRvd25BcnJvdyA9IGRyb3Bkb3duUm9vdC5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgXHJcbiAgICBkcm9wZG93blJvb3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGRyb3Bkb3duTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgIGRyb3Bkb3duQXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShcImRvd25cIik7XHJcbiAgICBkcm9wZG93bkFycm93LmNsYXNzTGlzdC50b2dnbGUoXCJ1cFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWVudSB3aXRoIGFsbCB0aGUgY2xpY2thYmxlcyB0aGF0IGhhcyBiZWVuIGFkZGVkIHRvIGl0LlxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBtZW51LlxyXG4gICAqL1xyXG4gIGdldE1lbnUoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiNjbGlja2FibGVzLmZvckVhY2goKGNsaWNrYWJsZSkgPT4ge1xyXG4gICAgICBpZiAoY2xpY2thYmxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnViYXItbGluay1jbGlja2FibGVcIilcclxuICAgICAgICAgIHx8IGNsaWNrYWJsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51YmFyLWRyb3Bkb3duXCIpKSB7XHJcbiAgICAgICAgICAgIHNlbGYuI21lbnVJdGVtcy5hcHBlbmQoY2xpY2thYmxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLm1lbnUuYXBwZW5kKGNsaWNrYWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWVudS5hcHBlbmQodGhpcy4jbWVudUl0ZW1zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tZW51O1xyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBBZGQgZWxlbWVudHMgdG8gYSBnaXZlbiBtZW51LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TWVudUJhcn0gbWVudSAtIFRoZSBtZW51IHRvIHB1dCBlbGVtZW50cyBvbi5cclxuICAgKiBAcGFyYW0geyp9IGVsZW1lbnRzIC0gVGhlIGVsZW1lbnRzIHRvIGFkZC4gRm9sbG93IGEgdGVtcGxhdGUgbGlrZSBuYXZFbGVtZW50cy5qcyxcclxuICAgKiBhcyBpbiwgYW4gb2JqZWN0IHdpdGggYSB0eXBlLCB0ZXh0LCBhbmQgaHJlZiBhdHRyaWJ1dGVzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRFbGVtZW50c1RvSGVhZGVyKG1lbnUsIGVsZW1lbnRzKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWxlbS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImxvZ29cIjpcclxuICAgICAgICAgIG1lbnUuYWRkTG9nbyhlbGVtLnRleHQsIGVsZW0uaWNvbiwgZWxlbS5ocmVmKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5rXCI6XHJcbiAgICAgICAgICBtZW51LmFkZExpbmsoZWxlbS50ZXh0LCBlbGVtLmhyZWYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRyb3Bkb3duXCI6XHJcbiAgICAgICAgICBtZW51LmFkZERyb3Bkb3duKGVsZW0udGV4dCwgZWxlbS5saW5rcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtlbGVtLnR5cGV9IGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCB5ZXRgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYnV0dGUuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2J1dHRlLmpwZ1wiLFxuXHRcIi4vY2FwaXRvbC1yZWVmLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9jYXBpdG9sLXJlZWYuanBnXCIsXG5cdFwiLi9ncmFuZC10ZXRvbi5qcGdcIjogXCIuL3NyYy9pbWFnZXMvZ3JhbmQtdGV0b24uanBnXCIsXG5cdFwiLi9vcGVuLXJvYWQuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL29wZW4tcm9hZC5qcGdcIixcblx0XCIuL3NhbmRzdG9uZS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvc2FuZHN0b25lLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJpbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28ucG5nJztcclxuXHJcblxyXG5jb25zdCBOQVZfRUxFTUVOVFMgPSBbXHJcbiAge1xyXG4gICAgdHlwZTogXCJsb2dvXCIsXHJcbiAgICB0ZXh0OiBcIlJhdmVuIFJvY2sgU29mdHdhcmVcIixcclxuICAgIGljb246IGxvZ28sXHJcbiAgICBocmVmOiBcIlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgICB0ZXh0OiBcIlByb2R1Y3RzXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJDb25zdW1lclNvZnQgVHJhZGVyXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiT3B0aW9ucyBBbmFseXplclwiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJCcmlza2Jvb2tzIEJ1ZGdldGluZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJTbGlja2VuIE1vbmV5IE1hbmFnZXJcIixcclxuICAgICAgICBocmVmOiBcIiNcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgICB0ZXh0OiBcIkxvY2F0aW9uc1wiLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiV2lsc2hpcmVcIixcclxuICAgICAgICBocmVmOiBcIiNcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJBbG1vbmQgUGVha1wiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImxpbmtcIixcclxuICAgIHRleHQ6IFwiT3VyIFN0b3J5XCIsXHJcbiAgICBocmVmOiBcIiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJsaW5rXCIsXHJcbiAgICB0ZXh0OiBcIkNvbnRhY3QgVXNcIixcclxuICAgIGhyZWY6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImxpbmtcIixcclxuICAgIHRleHQ6IFwiU3VwcG9ydFwiLFxyXG4gICAgaHJlZjogXCIjXCJcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5BVl9FTEVNRU5UUzsiLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWluZXIgaW4gd2hpY2ggcG9zc2Vzc2VzIHRoZSBlbnRpcmUgc2xpZGVyIGFwcGFyYXR1cy5cclxuICAgKi9cclxuICAjc2xpZGVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWluZXIgd2hpY2ggcHJlc2VudHMgdGhlIGltYWdlLlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuICAgKi9cclxuICAjZnJhbWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBpY3R1cmVzIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiB0aGUgc2xpZGVyLlxyXG4gICAqIEB0eXBlIHt7cGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBjYXB0aW9uIDogc3RyaW5nfVtdfVxyXG4gICAqL1xyXG4gICNwaWN0dXJlcztcclxuICAvKipcclxuICAgKiBUaGUgZHVyYXRpb24gdG8gc2hvdyBlYWNoIHBpY3R1cmUuXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICAjZHVyYXRpb247XHJcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiB0aGUgc2xpZGVzaG93IGlzIGN1cnJlbnRseSBwYXVzZWQuXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgI2lzUGF1c2VkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9scyBjb250YWluZXIuXHJcbiAgICovXHJcbiAgI2NvbnRyb2xzO1xyXG4gIC8qKlxyXG4gICAqIEluZGV4IG9mIHRoZSBjdXJyZW50IHBpY3R1cmUgdGhlIHNsaWRlc2hvdyBpcyBvbi5cclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gICNjdXJyZW50UGljSW5kZXg7XHJcbiAgLyoqXHJcbiAgICogSW5kZXggb2YgdGhlIHByZXZpb3VzIHBpY3R1cmUgdGhhdCB3YXMgcGxheWVkLlxyXG4gICAqL1xyXG4gICNwcmV2aW91c1BpY0luZGV4O1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzbGlkZXIuIFRoZXJlIGFyZSB0aHJlZSBjb21wb25lbnRzIHRoYXQgd2lsbCBiZSBnZW5lcmF0ZWQuIDEpIHRoZVxyXG4gICAqIGNvbnRhaW5lciwgMikgdGhlIGZyYW1lIHdoZXJlIHBpY3R1cmVzIGFyZSBkaXNwbGF5ZWQsIGFuZCAzKSB0aGUgY29udHJvbHMuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHt7cGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBjYXB0aW9uIDogc3RyaW5nfVtdfSBwaWN0dXJlcyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGljdHVyZXMsIGR1cmF0aW9uKSB7XHJcbiAgICB0aGlzLiNwaWN0dXJlcyA9IHBpY3R1cmVzO1xyXG4gICAgdGhpcy4jZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuI2lzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLiNjdXJyZW50UGljSW5kZXggPSAwO1xyXG4gICAgdGhpcy4jcHJldmlvdXNQaWNJbmRleCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuI3NsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuc2xpZGVyLCBcInNsaWRlclwiKTtcclxuXHJcbiAgICB0aGlzLiNmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuI2ZyYW1lLCBcInNsaWRlci1pbWctZnJhbWVcIik7XHJcbiAgICBcclxuICAgIHRoaXMuI2NvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRoaXMuI2NvbnRyb2xzLCBcInNsaWRlci1jb250cm9sc1wiKTtcclxuICAgIHRoaXMuI2FkZENvbnRyb2xzVG9TbGlkZXIoKTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY29uc3QgcHJldkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBmaWdDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgICBjb25zdCBmaWdDYXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGZpZ0NhcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoaW1nLCBcImltYWdlXCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChwcmV2SW1nLCBcInByZXZpb3VzLWltYWdlXCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChmaWdDYXB0aW9uVGl0bGUsIFwiY2FwdGlvbi10aXRsZVwiKTtcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQoZmlnQ2FwdGlvblRleHQsIFwiY2FwdGlvbi10ZXh0XCIpO1xyXG4gICAgXHJcbiAgICBmaWdDYXB0aW9uLmFwcGVuZChmaWdDYXB0aW9uVGl0bGUsIGZpZ0NhcHRpb25UZXh0KTtcclxuICAgIHRoaXMuI2ZyYW1lLmFwcGVuZChwcmV2SW1nLCBpbWcsIGZpZ0NhcHRpb24pO1xyXG5cclxuICAgIHRoaXMuI3NsaWRlci5hcHBlbmQodGhpcy4jZnJhbWUsIHRoaXMuI2NvbnRyb2xzKTtcclxuXHJcbiAgICB0aGlzLiNsb2FkSW1hZ2UodGhpcy4jY3VycmVudFBpY0luZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQgKG9wdGlvbmFsKS5cclxuICAgKiAqLyBcclxuICAjYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNsYXNzTmFtZXMucHVzaChkZWZhdWx0Q2xhc3MpO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHBpY3R1cmVzKHBpY3R1cmVzKXtcclxuICAgIHRoaXMuI3BpY3R1cmVzID0gcGljdHVyZXM7XHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyBUZXN0IGFuZCBtYWtlIHN1cmUgdGhpc1xyXG4gICAgdGhpcy4jZGlzcGxheUNsaWNrYWJsZURvdHMoKTtcclxuICB9XHJcblxyXG4gIHNldCBkdXJhdGlvbihzZWNvbmRzKSB7XHJcbiAgICB0aGlzLiNkdXJhdGlvbiA9IHNlY29uZHM7XHJcbiAgfVxyXG5cclxuICAjYWRkQ29udHJvbHNUb1NsaWRlcigpIHtcclxuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGNvbnN0IGRvdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBcclxuICAgIHRoaXMuI2FkZENsYXNzZXNUb0VsZW1lbnQocHJldiwgXCJzbGlkZXItYXJyb3dcIiwgXCJsZWZ0XCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChuZXh0LCBcInNsaWRlci1hcnJvd1wiLCBcInJpZ2h0XCIpO1xyXG4gICAgdGhpcy4jYWRkQ2xhc3Nlc1RvRWxlbWVudChkb3RDb250cm9scywgXCJkb3QtY29udHJvbHNcIik7XHJcbiAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KHRvZ2dsZSwgXCJzbGlkZXItdG9nZ2xlXCIsIFwicGF1c2VcIik7XHJcblxyXG4gICAgdGhpcy4jY29udHJvbHMuYXBwZW5kKHByZXYsIG5leHQsIGRvdENvbnRyb2xzLCB0b2dnbGUpO1xyXG4gICAgdGhpcy4jZGlzcGxheUNsaWNrYWJsZURvdHMoKTtcclxuXHJcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLiNyZXZlcnNlU2xpZGVyLmNhbGwodGhpcykpO1xyXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy4jYWR2YW5jZVNsaWRlci5jYWxsKHRoaXMpKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy4jcGF1c2VTbGlkZXNob3cuY2FsbCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAjcGF1c2VTbGlkZXNob3coKSB7XHJcbiAgICB0aGlzLiNpc1BhdXNlZCA9ICF0aGlzLiNpc1BhdXNlZDtcclxuXHJcbiAgICB0aGlzLiNjb250cm9scy5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci10b2dnbGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcInBhdXNlXCIpO1xyXG4gICAgdGhpcy4jY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItdG9nZ2xlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwbGF5XCIpO1xyXG4gIH0gXHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIGNsaWNrYWJsZSBkb3RzIG9uIHRoZSBjb250cm9sIHNlY3Rpb24gb2YgdGhlIHNsaWRlci5cclxuICAgKi9cclxuICAjZGlzcGxheUNsaWNrYWJsZURvdHMoKSB7XHJcblxyXG4gICAgY29uc3QgZG90Q29udHJvbHMgPSB0aGlzLiNjb250cm9scy5xdWVyeVNlbGVjdG9yKFwiLmRvdC1jb250cm9sc1wiKTtcclxuXHJcbiAgICAvLyByZW1vdmUgYW55IGV4aXN0aW5nIGRvdHMuIG5lZWRlZCBpZiBwaWN0dXJlcyBnZXRzIGNoYW5nZWQgbGF0ZXIuXHJcbiAgICB3aGlsZShkb3RDb250cm9scy5maXJzdENoaWxkKXtcclxuICAgICAgZG90Q29udHJvbHMucmVtb3ZlQ2hpbGQoZG90Q29udHJvbHMuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jcGljdHVyZXMuZm9yRWFjaCgocGljLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLiNhZGRDbGFzc2VzVG9FbGVtZW50KGRvdCwgXCJkb3QtaW5kZXhcIik7XHJcbiAgICAgIFxyXG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuI2N1cnJlbnRQaWNJbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jcHJldmlvdXNQaWNJbmRleCA9IHRoaXMuI2N1cnJlbnRQaWNJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLiNsb2FkSW1hZ2UuY2FsbCh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy4jY3VycmVudFBpY0luZGV4ID0gaW5kZXg7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZG90Q29udHJvbHMuYXBwZW5kKGRvdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWRzIGFuIGltYWdlIGJhc2VkIG9uIGEgZ2l2ZW4gaW5kZXgsIGFuZCB0aGVuIGhpZ2hsaWdodHMgdGhlIGNvcnJlc3BvbmRpbmdcclxuICAgKiBkb3QuXHJcbiAgICovXHJcbiAgI2xvYWRJbWFnZShpbmRleCkge1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy4jZnJhbWUucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKTtcclxuICAgIGNvbnN0IGZpZ0NhcHRpb25UaXRsZSA9IHRoaXMuI2ZyYW1lLnF1ZXJ5U2VsZWN0b3IoXCIuY2FwdGlvbi10aXRsZVwiKTtcclxuICAgIGNvbnN0IGZpZ0NhcHRpb25UZXh0ID0gdGhpcy4jZnJhbWUucXVlcnlTZWxlY3RvcihcIi5jYXB0aW9uLXRleHRcIik7XHJcbiAgICBjb25zdCBwcmV2SW1nID0gdGhpcy4jZnJhbWUucXVlcnlTZWxlY3RvcihcIi5wcmV2aW91cy1pbWFnZVwiKTtcclxuXHJcbiAgICBjb25zdCBwaWNSZWYgPSB0aGlzLiNwaWN0dXJlc1tpbmRleF07XHJcbiAgICBjb25zdCBwcmV2UGljUmVmID0gdGhpcy4jcGljdHVyZXNbdGhpcy4jcHJldmlvdXNQaWNJbmRleF07XHJcblxyXG4gICAgcHJldkltZy5zcmMgPSBwcmV2UGljUmVmLnBhdGg7XHJcblxyXG4gICAgVXRpbGl0eS50cmlnZ2VyQW5pbWF0aW9uKGZpZ0NhcHRpb25UZXh0LnBhcmVudE5vZGUsIFwiZGlzYXBwZWFyLWFwcGVhclwiKTtcclxuICAgIFV0aWxpdHkudHJpZ2dlckFuaW1hdGlvbihpbWcsIFwiZGlzYXBwZWFyLWFwcGVhclwiKTtcclxuICAgIFxyXG4gICAgaW1nLnNyYyA9IHBpY1JlZi5wYXRoO1xyXG4gICAgZmlnQ2FwdGlvblRpdGxlLnRleHRDb250ZW50ID0gcGljUmVmLnRpdGxlO1xyXG4gICAgZmlnQ2FwdGlvblRleHQudGV4dENvbnRlbnQgPSBwaWNSZWYuY2FwdGlvbjtcclxuXHJcbiAgICBjb25zdCBwcmV2SW1nRG90ID0gdGhpcy4jY29udHJvbHMucXVlcnlTZWxlY3RvcihgLmRvdC1pbmRleC5jdXJyZW50LWRvdGApO1xyXG4gICAgaWYgKHByZXZJbWdEb3QgIT09IG51bGwpIHtcclxuICAgICAgcHJldkltZ0RvdC5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1kb3RcIik7XHJcbiAgICB9IFxyXG5cclxuICAgIHRoaXMuI2NvbnRyb2xzXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5kb3QtaW5kZXg6bnRoLWNoaWxkKCR7aW5kZXgrMX0pYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtZG90XCIpO1xyXG4gIH1cclxuXHJcbiAgI2FkdmFuY2VTbGlkZXIoKSB7XHJcbiAgICB0aGlzLiNwcmV2aW91c1BpY0luZGV4ID0gdGhpcy4jY3VycmVudFBpY0luZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLiNjdXJyZW50UGljSW5kZXggPCAodGhpcy4jcGljdHVyZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgdGhpcy4jY3VycmVudFBpY0luZGV4ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNjdXJyZW50UGljSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLiNsb2FkSW1hZ2UodGhpcy4jY3VycmVudFBpY0luZGV4KTtcclxuICB9XHJcblxyXG4gICNyZXZlcnNlU2xpZGVyKCkge1xyXG4gICAgdGhpcy4jcHJldmlvdXNQaWNJbmRleCA9IHRoaXMuI2N1cnJlbnRQaWNJbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy4jY3VycmVudFBpY0luZGV4ID4gMCkge1xyXG4gICAgICB0aGlzLiNjdXJyZW50UGljSW5kZXggLT0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnRQaWNJbmRleCA9IHRoaXMuI3BpY3R1cmVzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy4jY3VycmVudFBpY0luZGV4KTtcclxuICAgIHRoaXMuI2xvYWRJbWFnZSh0aGlzLiNjdXJyZW50UGljSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcmVhZC1vbmx5IEVsZW1lbnQgcmVmZXJlbmNlIHRvIHRoZSBzbGlkZXIuIEZvciBhcHBlbmRpbmcgdG8gZWxlbWVudHMuXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gICAqL1xyXG4gIGdldCBzbGlkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jc2xpZGVyO1xyXG4gIH1cclxuXHJcbiAgcGxheVNsaWRlc2hvdygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICBcclxuICAgIC8vIHBsYXkgaXQgb25jZSBldmVyeSBYIHNlY29uZHMgdGhlcmVhZnRlci5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKCFzZWxmLiNpc1BhdXNlZCkge1xyXG4gICAgICAgIHNlbGYuI2FkdmFuY2VTbGlkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy4jZHVyYXRpb24gKiAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgYW5kIHBsYXkgdGhlIHNsaWRlc2hvdyBmb3IgYSBnaXZlbiBzbGlkZXIuXHJcbiAgICogQHBhcmFtIHtTbGlkZXJ9IHNsaWRlciAtIEEgc2xpZGVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBwbGF5U2xpZGVzaG93T25XaW5kb3dMb2FkKHNsaWRlcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNsaWRlci5wbGF5U2xpZGVzaG93LmNhbGwoc2xpZGVyKSk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IElNQUdFX0ZJTEVQQVRIID0gXCJpbWFnZXMvXCI7XHJcblxyXG5jb25zdCBzbGlkZXJQaWNzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiYnV0dGUuanBnXCIsXHJcbiAgICB0aXRsZTogXCJCdXR0ZVwiLFxyXG4gICAgY2FwdGlvbjogXCJMaW5jb2xuIENvdW50eSwgV3lvbWluZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcImNhcGl0b2wtcmVlZi5qcGdcIixcclxuICAgIHRpdGxlOiBcIkNhcGl0b2wgUmVlZlwiLFxyXG4gICAgY2FwdGlvbjogXCJUb3JyZXksIFV0YWhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJncmFuZC10ZXRvbi5qcGdcIixcclxuICAgIHRpdGxlOiBcIkdyYW5kIFRldG9uXCIsXHJcbiAgICBjYXB0aW9uOiBcIlRldG9uIENvdW50eSwgV3lvbWluZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIm9wZW4tcm9hZC5qcGdcIixcclxuICAgIHRpdGxlOiBcIkphY2tzb24gTGFrZVwiLFxyXG4gICAgY2FwdGlvbjogXCJUZXRvbiBDb3VudHksIFd5b21pbmdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJzYW5kc3RvbmUuanBnXCIsXHJcbiAgICB0aXRsZTogXCJOYXZham8gU2FuZHN0b25lXCIsXHJcbiAgICBjYXB0aW9uOiBcIkdsZW4gQ2FueW9uLCBOZXZhZGFcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCB7IElNQUdFX0ZJTEVQQVRILCBzbGlkZXJQaWNzIH07IiwiLyoqXHJcbiAqIEEgY2xhc3Mgd2l0aCB1c2VmdWwsIGdlbmVyYWwtcHVycG9zZSBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQmFzZWQgb24gd2VicGFjaydzIHJlcXVpcmUgdG8gcXVpY2tseSBpbXBvcnQgaW4gYWxsIGltYWdlcyBpbiBhIGZvbGRlci5cclxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZXF1aXJlLWNvbnRleHQgdG8gdW5kZXJzdGFuZFxyXG4gICAqIG1vcmUgYWJvdXQgdGhlIHBhcmFtZXRlci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0gciAtIHJlcXVpcmUuY29udGV4dCgpIGZ1bmN0aW9uLCB1c2VkIGZvciBpbXBvcnRpbmcgYWxsIGZpbGVzIGluXHJcbiAgICogYSBkaXJlY3RvcnkgbWF0Y2hpbmcgYSBwYXR0ZXJuLiBFeDpcclxuICAgKiByZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKS4gTGVhdmUgYmxhbmsgdG8gdXNlIHRoaXMuXHJcbiAgICogQHJldHVybnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGltYWdlcyBtYXRjaGluZyB0aGUgcmVxdWlyZSBjb250ZXh0LFxyXG4gICAqIHRoZSBvcmlnaW5hbCBmaWxlbmFtZSAody8gZXh0ZW5zaW9uKSBiZWluZyB0aGUga2V5IHJlZmVyZW5jaW5nIHRoZSBpbWFnZS5cclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBzdGF0aWMgaW1wb3J0QWxsSW1hZ2VzKHIgPSByZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSkge1xyXG4gICAgbGV0IGltYWdlcyA9IHt9O1xyXG4gICAgci5rZXlzKCkubWFwKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQgKG9wdGlvbmFsKS5cclxuICAgKiAqLyBcclxuICBzdGF0aWMgYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICAgICAgLy8gcGFzc2luZyBpbiBhcnJheXMgdG8gYSB2YXJhcmdzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgYSBnaXZlbiBlbGVtZW50LCBhZGQgYW4gYW5pbWF0aW9uIGJ1dCBvbmx5IHBsYXkgaXQgb25jZS4gQWZ0ZXJ3YXJkcyxcclxuICAgKiB1bmxvYWQgdGhlIGFuaW1hdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIGFkZCB0aGUgY2xhc3MgdG8gaXQgYWdhaW4gdG8gXHJcbiAgICogcGxheSB0aGUgYW5pbWF0aW9uOyB0aGlzIGlzIHVzZWZ1bCB3aGVuIGFzc29jaWF0ZWQgd2l0aCBldmVudCB0cmlnZ2Vycy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQW4gZWxlbWVudCB0byBhcHBseSB0aGUgYW5pbWF0aW9uIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltYXRpb25OYW1lIC0gQSBDU1MgY2xhc3MgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBzdGF0aWMgdHJpZ2dlckFuaW1hdGlvbihlbGVtLCBhbmltYXRpb25OYW1lKSB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcblxyXG4gICAgZWxlbS5vbmFuaW1hdGlvbmVuZCA9ICgpID0+IHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSl9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjdXJzaXZlbHkgc2NhbGUgdGhlIHRyZWUgb2YgYSBjaGlsZCBub2RlIHVudGlsIHRoZSBwYXJlbnQgbWF0Y2hpbmcgdGhlIGdpdmVuXHJcbiAgICogc2VsZWN0b3IgaXMgZm91bmQuIFJldHVybnMgTlVMTCBpZiBubyBtYXRjaGluZyBwYXJlbnQgaXMgZm91bmQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEEgY2hpbGQgbm9kZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBDU1MgU2VsZWN0b3IgU3RyaW5nLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIVE1MZWxlbWVudH0gLSBQYXJlbnQgb2YgZWxlbS5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TWF0Y2hpbmdQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcclxuICAgIHdoaWxlKCFlbGVtLnBhcmVudE5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGVsZW0ubWF0Y2hlcyhcImh0bWxcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gdHh0IGltcG9ydHNcclxuaW1wb3J0IFNBTVBMRV9URVhUIGZyb20gJy4vbG9yZW0udHh0JztcclxuLy8gY3NzIGltcG9ydHNcclxuaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vZHJvcGRvd24uY3NzJztcclxuaW1wb3J0ICcuL3NsaWRlci5jc3MnO1xyXG5cclxuLy8ganMgaW1wb3J0c1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xyXG5pbXBvcnQgTWVudUJhciBmcm9tICcuL2Ryb3Bkb3duJztcclxuaW1wb3J0IE5BVl9FTEVNRU5UUyBmcm9tICcuL25hdkVsZW1lbnRzJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuL3NsaWRlcic7XHJcbmltcG9ydCB7IElNQUdFX0ZJTEVQQVRILCBzbGlkZXJQaWNzIH0gZnJvbSAnLi9zbGlkZXJQaWNzJztcclxuXHJcbi8vIGRhdGEgaW1wb3J0c1xyXG5cclxuXHJcbmNvbnN0IGxvYWRHZW5lcmljQm9keSA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGgxLnRleHRDb250ZW50ID0gXCJMb3JlbSBJcHN1bVwiO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gU0FNUExFX1RFWFQ7IFxyXG4gIFxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2FtcGxlLXRleHRcIik7XHJcblxyXG4gIGRpdi5hcHBlbmQoaDEsIGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuKGZ1bmN0aW9uIG1haW4oKSB7XHJcblxyXG4gIGNvbnN0IG1lbnViYXIgPSBuZXcgTWVudUJhcihcImRyb3Bkb3duLW1lbnVcIik7XHJcbiAgTWVudUJhci5hZGRFbGVtZW50c1RvSGVhZGVyKG1lbnViYXIsIE5BVl9FTEVNRU5UUyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWVudWJhci5nZXRNZW51KCksIGxvYWRHZW5lcmljQm9keSgpKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VzID0gVXRpbGl0eS5pbXBvcnRBbGxJbWFnZXMoKTtcclxuICBzbGlkZXJQaWNzLmZvckVhY2goKHBpYykgPT4ge1xyXG4gICAgLy8gcmVwbGFjZSB0aGUgcGF0aCBvZiB0aGUgc2xpZGVyUGljcyB3aXRoIHRoZSBkZXN0aW5hdGlvbiBwYXRoIGdlbmVyYXRlZCBieSB3ZWJwYWNrLlxyXG4gICAgcGljLnBhdGggPSBpbWFnZXNbcGljLnBhdGhdO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzbGlkZXJQaWNzKSk7XHJcblxyXG4gIGNvbnN0IG5hdGlvbmFsUGFya1NsaWRlciA9IG5ldyBTbGlkZXIoc2xpZGVyUGljcywgNik7XHJcbiAgXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobmF0aW9uYWxQYXJrU2xpZGVyLnNsaWRlcik7XHJcblxyXG4gIFNsaWRlci5wbGF5U2xpZGVzaG93T25XaW5kb3dMb2FkKG5hdGlvbmFsUGFya1NsaWRlcik7XHJcblxyXG59KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=