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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n\n    const about = document.createElement(\"div\");\n    about.classList.add(\"about\");\n\n    about.appendChild(createParagraph(\"Now in its latest incarnation as La Vita Bella, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated collection of local simple yet delightfully executed cuisine, world-class cocktails, and an award-winning bar program. Welcome to La Vita Bella, where everything old is new again.\"));\n\n    return about;\n}\n\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadAbout() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createAbout());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDrinks() {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"drinks\");\n\n    menu.appendChild(\n        createMenuItem(\n          \"GARIBALDI\",\n          \"campari & fluffy orange juice 13\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"OUR VERMOUTH SERVICE\",\n          \"noilly prat vermouth. s.pellegrino. lemon oils. frozen grapes 12\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"GIN & TONIC\",\n          \"fords gin. jack rudy tonic cordial. s.pellegrino. citrus. jasmine mist 16\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"EL DIABLO ON TAP\",\n          \"don julio blanco. mezcal vida. meletti. cassis cordial. fever tree grapefruit soda & devil salt 18\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"ALL DAY BLOODY MARY\",\n          \"grey goose. cold-pressed vegetables. fennel salt. fresh horseradish. pickles 16\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"BELLINI\",\n          \"white peach & prosecco 16\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SUMMER 2021\",\n          \"boatyard gin. lillet rosé. clarified strawberry. rhubarb. cucumber bitters. London Essence white peach & jasmine soda 18\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"CLARIFIED PIÑA COLADA\",\n          \"cocchi Americano. banks 5 years. wray & nephew. nardini mandorla. coconut. pineapple 18\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SORRENTO LEMONADE\",\n          \"malfy gin di limone. Dante limoncello. fresh lemon. lemon bitters. lemon leaf. s. pellegrino limonata 18\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"FLUFFY MARGARITA ROYALE\",\n          \"olmeca altos. ancho verde. fresh lime. roasted & fluffy pineapple. pineapple soda. green chilli. prosecco 19\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SALTY DOG\",\n          \"absolut. fluffy pink grapefruit juice. black lava salt 15\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"OLD FASHIONED WHISKEY COCKTAIL\",\n          \"knob creek rye. amaro montenegro. salted honey. dale’s bitters 18\"\n        )\n    );\n\n\n    return menu;\n}\n\nfunction createMenuItem(name, description) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n    \n    const itemName = document.createElement(\"h2\");\n    itemName.textContent = name;\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n\n   \n   // menuItem.appendChild(drinkImage);\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemDescription);\n\n    return menuItem;\n}\n\nfunction loadDrinks() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createDrinks());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDrinks);\n\n//# sourceURL=webpack://restaurant-page/./src/drinks.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFood() {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"food\");\n\n    menu.appendChild(\n        createMenuItem(\n          \"BREAD & BUTTER\",\n          \"acme sesame levain, cultured butter 5\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"MARINATED OLIVES\",\n          \"mandarin, herbs, olive oil 5\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"CRUDITÉ\",\n          \"perfect veggies, savory mayo 14\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"CHEESE PLATE\",\n          \"selection of 3 cheeses 25\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"CHARCUTERIE PLATE\",\n          \"selection of 3 meats 25\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SQUASH SALAD\",\n          \"fromage blanc, nectarine, hazelnut 16\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"PAN CON TOMATE\",\n          \"mangalitsa lardo, early girl tomato, sesame levain 14\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"FINGERLING POTATO\",\n          \"mt tam cheese sauce, iberico ham, black garlic vin 15\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"AREPAS\",\n          \"brokaw avocado, bay shrimp, peanut chili salsa, herbs 16\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SNAILS\",\n          \"cashew miso, garlic confit butter, kumquat 20\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"HAM & CHEESE\",\n          \"jambon de paris, alpine cheese, dijon 15\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n          \"SAKE KASU CUSTARD\",\n          \"berries, olive oil, citrus marigold 9\"\n        )\n    );\n\n    return menu;\n}\n\n\n\nfunction createMenuItem(name, description) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n    \n    const itemName = document.createElement(\"h2\");\n    itemName.textContent = name;\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n\n\n\n   // menuItem.appendChild(drinkImage);\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemDescription);\n\n    return menuItem;\n}\n\nfunction loadFood() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createFood());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFood);\n\n//# sourceURL=webpack://restaurant-page/./src/food.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\")\n    restaurantName.textContent = \"La Vita Bella\";\n\n    home.appendChild(restaurantName);\n\n    home.appendChild(createParagraph(\"1010 WALLER ST\"));\n    home.appendChild(createParagraph(\"SAN FRANCSICO, CA 94110\"));\n    home.appendChild(createParagraph(\"TUESDAY - SUNDAY\"));\n    home.appendChild(createParagraph(\"NOON - LATE\"));\n\n    return home;\n}\n\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadHome() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drinks */ \"./src/drinks.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n    \n\n    header.appendChild(createNav());\n    \n\n    return header;\n}\n\n\nfunction createNav() {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"nav\");\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"home-nav\");\n    homeButton.textContent = \"La Bella Vita\";\n    homeButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n    });\n\n    const drinksButton = document.createElement(\"button\");\n    drinksButton.classList.add(\"button-nav\");\n    drinksButton.textContent = \"Drinks\";\n    drinksButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(drinksButton);\n        (0,_drinks__WEBPACK_IMPORTED_MODULE_1__.default)();\n    });\n\n    const foodButton = document.createElement(\"button\");\n    foodButton.classList.add(\"button-nav\");\n    foodButton.textContent = \"Food\";\n    foodButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(foodButton);\n        (0,_food__WEBPACK_IMPORTED_MODULE_2__.default)();\n    });\n\n    const aboutButton = document.createElement(\"button\");\n    aboutButton.classList.add(\"button-nav\");\n    aboutButton.textContent = \"About\";\n    aboutButton.addEventListener(\"click\", (e) => {\n        //if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(aboutButton);\n        (0,_about__WEBPACK_IMPORTED_MODULE_3__.default)();\n    });\n\n\n\n    nav.appendChild(homeButton);\n    nav.appendChild(aboutButton);\n    nav.appendChild(foodButton);\n    nav.appendChild(drinksButton);\n\n    return nav;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav, .home-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {    \n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n\n    return main;\n}\n\nfunction initializeWebsite() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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