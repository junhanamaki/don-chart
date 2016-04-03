/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Manager = __webpack_require__(2);
	
	var _Manager2 = _interopRequireDefault(_Manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jquery2.default.fn.donChart = function plugin() {
	  var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return this.each(function initialize() {
	    // element as jquery object
	    var $element = (0, _jquery2.default)(this);
	
	    // get options by merging data and args, priority to args
	    var options = _jquery2.default.extend($element.data(), args);
	
	    // init manager and call draw
	    var manager = new _Manager2.default($element, options);
	    manager.draw();
	
	    // store manager in element
	    $element.data('don-chart-manager', manager);
	
	    return $element;
	  });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _build = __webpack_require__(3);
	
	var _build2 = _interopRequireDefault(_build);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Manager = function () {
	  function Manager($element) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Manager);
	
	    this.$element = $element;
	    this.options = options;
	  }
	
	  _createClass(Manager, [{
	    key: 'draw',
	    value: function draw() {
	      this.$element.append((0, _build2.default)(this.options));
	    }
	  }]);
	
	  return Manager;
	}();

	exports.default = Manager;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(4);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (options) {
	  var percentage = options.percentage || 100;
	  var offset = 439 - 439 * percentage / 100;
	
	  var html = _template2.default.replace('%{percentage}', percentage).replace('%{offset}', offset);
	
	  return html;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"don-chart donut\">\n  <span>%{percentage}%</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\">\n    <g>\n      <circle r=\"69.85699\" cy=\"81\" cx=\"81\" />\n      <circle class=\"chart\" r=\"69.85699\" cy=\"81\" cx=\"81\" stroke-dashoffset=\"%{offset}\" />\n    </g>\n  </svg>\n</div>"

/***/ }
/******/ ]);