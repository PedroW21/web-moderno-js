/*! For license information please see principal.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/assets/css/estilo.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/css/estilo.css?")},"./src/assets/scss/index.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/scss/index.scss?")},"./src/assets/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ "./src/assets/css/estilo.css");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/assets/scss/index.scss");\n\r\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/index.js?')},"./src/modulos/moduloA.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval('const moduloB = __webpack_require__(/*! ./moduloB */ "./src/modulos/moduloB.js");\r\n\r\nconsole.log(moduloB.saudacao());\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloA.js?')},"./src/modulos/moduloB.js":module=>{eval("module.exports = {\r\n    saudacao() {return 'ola, sou um modulo e sou B'}\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloB.js?")},"./src/pessoa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pessoa)\n/* harmony export */ });\nclass Pessoa {\r\n    cumprimentar()\r\n    {\r\n        return 'Bom dia';\r\n    }\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/pessoa.js?")},"./src/principal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ "./src/pessoa.js");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/moduloA */ "./src/modulos/moduloA.js");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./src/assets/index.js");\n\r\n\r\n //vai procurar um arquivo index.js por padrao qd n damos algo direto\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__["default"];\r\n\r\nconsole.log(atendente.cumprimentar());\n\n//# sourceURL=webpack://capitulo-webpack/./src/principal.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var s=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](s,s.exports,__webpack_require__),s.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var s in e)__webpack_require__.o(e,s)&&!__webpack_require__.o(_,s)&&Object.defineProperty(_,s,{enumerable:!0,get:e[s]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/principal.js")})();