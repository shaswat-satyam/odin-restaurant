/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nlet data = [\n  { name: \"Mama Bear\", email: \"MamaBear@gmail.com\", phone: \"123456789\" },\n  { name: \"Mama Bear\", email: \"MamaBear@gmail.com\", phone: \"123456789\" },\n  { name: \"Mama Bear\", email: \"MamaBear@gmail.com\", phone: \"123456789\" },\n];\n\nfunction contactDiv(person) {\n  let div = document.createElement(\"div\");\n  let name = document.createElement(\"h2\");\n  name.innerText = person.name;\n  let email = document.createElement(\"p\");\n  email.innerText = person.email;\n  let phone = document.createElement(\"p\");\n  phone.innerText = person.phone;\n  div.appendChild(name);\n  div.appendChild(email);\n  div.appendChild(phone);\n  return div;\n}\nfunction contact() {\n  let contents = document.getElementById(\"content\");\n  contents.innerHTML = \"\";\n  data.forEach((person) => contents.appendChild(contactDiv(person)));\n}\n\n\n//# sourceURL=webpack://rest/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  let content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n  let heading = document.createElement(\"h1\");\n  heading.innerText = \"Chippy Chippy chapa chapa\";\n  content.appendChild(heading);\n  let data = document.createElement(\"div\");\n  let description = document.createElement(\"p\");\n  description.innerText =\n    \"Chippy's has the best chips available. The atmosphere and customer service make you feel like you are chips. This is the exactly the kind of place that I like to return to again and again\";\n  data.appendChild(description);\n  let author = document.createElement(\"h2\");\n  author.innerText = \"Sonakshi Sinha\";\n  data.appendChild(author);\n  content.appendChild(data);\n  data = document.createElement(\"div\");\n  heading = document.createElement(\"h2\");\n  heading.innerText = \"Hours\";\n  let timing = document.createElement(\"p\");\n  let list = document.createElement(\"ul\");\n  [\n    \"Sunday: 8am - 8pm\",\n    \"Monday: 6am - 6pm\",\n    \"Tuesday:6am - 6pm\",\n    \"Wednesday:6am - 6pm\",\n    \"Thursday:6am - 10pm\",\n    \"Friday:6am - 10pm\",\n    \"Saturday: 6am - 10pm\",\n  ].forEach((item) => {\n    let ListItem = document.createElement(\"li\");\n    ListItem.innerText = item;\n    list.appendChild(ListItem);\n  });\n  timing.appendChild(list);\n  data.appendChild(timing);\n  content.appendChild(data);\n  data = document.createElement(\"div\");\n  heading = document.createElement(\"h3\");\n  heading.innerText = \"Location\";\n  data.appendChild(heading);\n  let location = document.createElement(\"p\");\n  location.innerText = \"123 village, India\";\n  data.appendChild(location);\n  content.appendChild(data);\n}\n\n\n//# sourceURL=webpack://rest/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet homeButton = document.getElementById(\"home\");\nhomeButton.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nlet contactButton = document.getElementById(\"contact\");\ncontactButton.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nlet menuButton = document.getElementById(\"menu\");\nmenuButton.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nlet menuItems = [\n  {\n    type: \"Beverage\",\n    items: [\n      {\n        name: \"CocaCola\",\n        desc: \"A cold, sugary drink which can eat away your teeths\",\n        price: 45,\n      },\n      {\n        name: \"Thumbs Up\",\n        desc: \"A cold, sugary drink which can eat away your teeths\",\n        price: 40,\n      },\n    ],\n  },\n  { type: \"Sides\", items: [] },\n  { type: \"Main Dishes\", items: [] },\n];\n\nfunction createItemDiv(item) {\n  let div = document.createElement(\"div\");\n  let heading = document.createElement(\"h3\");\n  heading.innerText = item.name;\n  let desc = document.createElement(\"p\");\n  desc.innerText = item.desc;\n  let price = document.createElement(\"b\");\n  price.innerText = item.price;\n\n  div.appendChild(heading);\n  div.appendChild(desc);\n  div.appendChild(price);\n  return div;\n}\n\nfunction createSubMenu(subMenu) {\n  let div = document.createElement(\"div\");\n  let heading = document.createElement(\"h2\");\n  heading.innerText = subMenu.type;\n  div.appendChild(heading);\n  subMenu.items.forEach((item) => {\n    let itemDiv = createItemDiv(item);\n    div.appendChild(itemDiv);\n  });\n  return div;\n}\nfunction menu() {\n  let content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n  let heading = document.createElement(\"h1\");\n  heading.innerHTML = \"Menu\";\n  content.appendChild(heading);\n  let menuDiv = document.createElement(\"div\");\n  menuItems.forEach((item) => {\n    content.appendChild(createSubMenu(item));\n  });\n  content.appendChild(menuDiv);\n}\n\n\n//# sourceURL=webpack://rest/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;