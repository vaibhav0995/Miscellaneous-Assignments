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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_greeting__ = __webpack_require__(/*! ./modules/greeting */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_math_functions__ = __webpack_require__(/*! ./modules/math-functions */ 2);\n\n\n\nconst resultGreeting = document.getElementById('resultGreeting');\nconst resultSum = document.getElementById('resultSum');\n\nconst a = 3;\nconst b = 7;\n\nresultGreeting.textContent = Object(__WEBPACK_IMPORTED_MODULE_0__modules_greeting__[\"a\" /* sayHello */])('Nice to see you! 🙂');\nresultSum.textContent = `The sum of ${a} and ${b} using sum(a,b) is: ${Object(__WEBPACK_IMPORTED_MODULE_1__modules_math_functions__[\"a\" /* sum */])(a, b)} and using sun(a)(b) is: ${Object(__WEBPACK_IMPORTED_MODULE_1__modules_math_functions__[\"a\" /* sum */])(a)(b)}. ✨`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NheUhlbGxvfSBmcm9tICcuL21vZHVsZXMvZ3JlZXRpbmcnO1xuaW1wb3J0IHtzdW19IGZyb20gJy4vbW9kdWxlcy9tYXRoLWZ1bmN0aW9ucyc7XG5cbmNvbnN0IHJlc3VsdEdyZWV0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdEdyZWV0aW5nJyk7XG5jb25zdCByZXN1bHRTdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0U3VtJyk7XG5cbmNvbnN0IGEgPSAzO1xuY29uc3QgYiA9IDc7XG5cbnJlc3VsdEdyZWV0aW5nLnRleHRDb250ZW50ID0gc2F5SGVsbG8oJ05pY2UgdG8gc2VlIHlvdSEg8J+ZgicpO1xucmVzdWx0U3VtLnRleHRDb250ZW50ID0gYFRoZSBzdW0gb2YgJHthfSBhbmQgJHtifSB1c2luZyBzdW0oYSxiKSBpczogJHtzdW0oYSwgYil9IGFuZCB1c2luZyBzdW4oYSkoYikgaXM6ICR7c3VtKGEpKGIpfS4g4pyoYDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/modules/greeting.js ***!
  \*********************************/
/*! exports provided: sayHello */
/*! exports used: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return sayHello; });\nconst sayHello = (greeting) => {\n    const currentHour = new Date().getHours();\n    let timeGreeting = 'Good morning!';\n\n    if (currentHour >= 12 && currentHour <= 17) {\n        timeGreeting = 'Good afternoon!';\n    } else if (currentHour >= 17) {\n        timeGreeting = 'Good evening!';\n    }\n\n    return `${timeGreeting} ${greeting}`;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dyZWV0aW5nLmpzP2RiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2F5SGVsbG8gPSAoZ3JlZXRpbmcpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBsZXQgdGltZUdyZWV0aW5nID0gJ0dvb2QgbW9ybmluZyEnO1xuXG4gICAgaWYgKGN1cnJlbnRIb3VyID49IDEyICYmIGN1cnJlbnRIb3VyIDw9IDE3KSB7XG4gICAgICAgIHRpbWVHcmVldGluZyA9ICdHb29kIGFmdGVybm9vbiEnO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPj0gMTcpIHtcbiAgICAgICAgdGltZUdyZWV0aW5nID0gJ0dvb2QgZXZlbmluZyEnO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aW1lR3JlZXRpbmd9ICR7Z3JlZXRpbmd9YDtcbn1cblxuZXhwb3J0IHtzYXlIZWxsb307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dyZWV0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum */
/*! exports used: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return sum; });\nconst sum = function(a, b){\n    if(arguments.length == 1) {\n        return function(b) {\n            return a + b;\n        }\n    }\n    return a + b;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzP2VlOTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VtID0gZnVuY3Rpb24oYSwgYil7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGEgKyBiO1xufTtcblxuZXhwb3J0IHtzdW19O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9tYXRoLWZ1bmN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);