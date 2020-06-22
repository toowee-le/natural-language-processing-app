var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performNLP, preloader, checkURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"performNLP\", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_0__[\"performNLP\"]; });\n\n/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/preloader */ \"./src/client/js/preloader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"preloader\", function() { return _js_preloader__WEBPACK_IMPORTED_MODULE_1__[\"preloader\"]; });\n\n/* harmony import */ var _js_urlChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/urlChecker */ \"./src/client/js/urlChecker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return _js_urlChecker__WEBPACK_IMPORTED_MODULE_2__[\"checkURL\"]; });\n\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/resets.scss */ \"./src/client/styles/resets.scss\");\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base.scss */ \"./src/client/styles/base.scss\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/footer.scss */ \"./src/client/styles/footer.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/form.scss */ \"./src/client/styles/form.scss\");\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_form_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/client/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/results.scss */ \"./src/client/styles/results.scss\");\n/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_results_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Client/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: performNLP, postRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performNLP\", function() { return performNLP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postRequest\", function() { return postRequest; });\n/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader */ \"./src/client/js/preloader.js\");\n/* harmony import */ var _urlChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlChecker */ \"./src/client/js/urlChecker.js\");\n\n\n\nconst resultsSection = document.querySelector('.results-section');\n\nfunction performNLP(event) {\n    event.preventDefault();\n\n    // DOM elements needed\n    let url = document.getElementById('url').value;\n    if (url == \"\") {\n        alert(\"Please enter a URL\");\n        return false;\n    };\n\n    if (Object(_urlChecker__WEBPACK_IMPORTED_MODULE_1__[\"checkURL\"])(url)) {\n        Object(_preloader__WEBPACK_IMPORTED_MODULE_0__[\"preloader\"])('show');\n        postRequest('/apiCall', { url })\n        .then(data => {\n            updateUI(data);\n            Object(_preloader__WEBPACK_IMPORTED_MODULE_0__[\"preloader\"])('hide');\n        });\n        clearResults();\n    } else {\n        alert(\"Error: Please check the URL is a valid web address and ensure it starts with http:// or https://\")\n    };\n};\n\n// POST request to the server with the submitted URL\nconst postRequest = async (url = '', data = {}) => {\n    const res = await fetch(url, {\n        method: 'POST',\n        credentials: \"same-origin\",\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(data)\n    })\n    try {\n        const data = await res.json();\n        return data;\n    } catch(err) {\n        console.log(\"Error:\", err);\n    }\n}\n\nconst updateUI = (data) => {\n\n    const innerHTML = `\n        <div class=\"article block\">\n            <h3>Article</h3>\n            <img class=\"article-img\" src=\"${data.img}\" alt=\"News Image\">\n            <p class=\"article-title\">${data.headline}</p>\n            <div class=\"article-info\">\n                <p class=\"article-author\">${data.writer}</p>\n                <p class=\"divider\">|</p>\n                <p class=\"article-date\">${data.date}</p>\n            </div>\n            <p class=\"article-text\">${data.text}</p>\n            <button class=\"article-link\"><a href=\"${data.url}\">Read full article</a></button>\n    </div>\n    <div class=\"data block\">\n        <h3>Results</h3>\n        <div class=\"title-block\">Polarity</div>\n        <p class=\"polarity\">Polarity: <span class=\"data-value\">${data.polarity}</span></p>\n        <p class=\"polarity-confidence\">Confidence: <span class=\"data-value\">${data.polarityConfidence}</span></p>\n        <div class=\"title-block\">Subjectivity</div>\n        <p class=\"subjectivity\">Subjectivity: <span class=\"data-value\">${data.subjectivity}</span></p>\n        <p class=\"subjectivity-confidence\">Confidence: <span class=\"data-value\">${data.subjectivityConfidence}</span></p>\n    </div>\n    `;\n\n    resultsSection.innerHTML = innerHTML;\n}\n\nfunction clearResults() {\n    resultsSection.innerHTML = '';\n}\n\n//# sourceURL=webpack://Client/./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/js/preloader.js":
/*!************************************!*\
  !*** ./src/client/js/preloader.js ***!
  \************************************/
/*! exports provided: preloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preloader\", function() { return preloader; });\nfunction preloader(hide = '') {\n    const loader = document.querySelector('.loader');\n\n    hide === 'show' ? loader.style.display = 'block' : loader.style.display = 'none';\n}\n\n//# sourceURL=webpack://Client/./src/client/js/preloader.js?");

/***/ }),

/***/ "./src/client/js/urlChecker.js":
/*!*************************************!*\
  !*** ./src/client/js/urlChecker.js ***!
  \*************************************/
/*! exports provided: checkURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\nfunction checkURL(input) {\n    const urlRegex = /(^http[s]?:\\/{2})|(^www)|(^\\/{1,2})/igm;\n    const url = new RegExp (urlRegex);\n    return url.test(input);\n};\n\n//# sourceURL=webpack://Client/./src/client/js/urlChecker.js?");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/base.scss?");

/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/footer.scss?");

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/form.scss?");

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/header.scss?");

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/resets.scss?");

/***/ }),

/***/ "./src/client/styles/results.scss":
/*!****************************************!*\
  !*** ./src/client/styles/results.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/results.scss?");

/***/ })

/******/ });