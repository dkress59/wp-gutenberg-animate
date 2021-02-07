(window["webpackJsonp_animate_wp_blocks"] = window["webpackJsonp_animate_wp_blocks"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_animate_wp_blocks"] = window["webpackJsonp_animate_wp_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: animations, animationClassNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animations", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationClassNames", function() { return animationClassNames; });
var animations = {
  // Attention seekers
  bounce: 'bounce',
  flash: 'flash',
  pulse: 'pulse',
  rubberBand: 'rubberBand',
  shakeX: 'shakeX',
  shakeY: 'shakeY',
  headShake: 'headShake',
  swing: 'swing',
  tada: 'tada',
  wobble: 'wobble',
  jello: 'jello',
  heartBeat: 'heartBeat',
  // Back entrances
  backInDown: 'backInDown',
  backInLeft: 'backInLeft',
  backInRight: 'backInRight',
  backInUp: 'backInUp',
  // Back exits
  backOutDown: 'backOutDown',
  backOutLeft: 'backOutLeft',
  backOutRight: 'backOutRight',
  backOutUp: 'backOutUp',
  // Bouncing entrances
  bounceIn: 'bounceIn',
  bounceInDown: 'bounceInDown',
  bounceInLeft: 'bounceInLeft',
  bounceInRight: 'bounceInRight',
  bounceInUp: 'bounceInUp',
  // Bouncing exits
  bounceOut: 'bounceOut',
  bounceOutDown: 'bounceOutDown',
  bounceOutLeft: 'bounceOutLeft',
  bounceOutRight: 'bounceOutRight',
  bounceOutUp: 'bounceOutUp',
  // Fading entrances
  fadeIn: 'fadeIn',
  fadeInDown: 'fadeInDown',
  fadeInDownBig: 'fadeInDownBig',
  fadeInLeft: 'fadeInLeft',
  fadeInLeftBig: 'fadeInLeftBig',
  fadeInRight: 'fadeInRight',
  fadeInRightBig: 'fadeInRightBig',
  fadeInUp: 'fadeInUp',
  fadeInUpBig: 'fadeInUpBig',
  fadeInTopLeft: 'fadeInTopLeft',
  fadeInTopRight: 'fadeInTopRight',
  fadeInBottomLeft: 'fadeInBottomLeft',
  fadeInBottomRight: 'fadeInBottomRight',
  // Fading exits
  fadeOut: 'fadeOut',
  fadeOutDown: 'fadeOutDown',
  fadeOutDownBig: 'fadeOutDownBig',
  fadeOutLeft: 'fadeOutLeft',
  fadeOutLeftBig: 'fadeOutLeftBig',
  fadeOutRight: 'fadeOutRight',
  fadeOutRightBig: 'fadeOutRightBig',
  fadeOutUp: 'fadeOutUp',
  fadeOutUpBig: 'fadeOutUpBig',
  fadeOutTopLeft: 'fadeOutTopLeft',
  fadeOutTopRight: 'fadeOutTopRight',
  fadeOutBottomRight: 'fadeOutBottomRight',
  fadeOutBottomLeft: 'fadeOutBottomLeft',
  // Flippers
  flip: 'flip',
  flipInX: 'flipInX',
  flipInY: 'flipInY',
  flipOutX: 'flipOutX',
  flipOutY: 'flipOutY',
  // Lightspeed
  lightSpeedInRight: 'lightSpeedInRight',
  lightSpeedInLeft: 'lightSpeedInLeft',
  lightSpeedOutRight: 'lightSpeedOutRight',
  lightSpeedOutLeft: 'lightSpeedOutLeft',
  // Rotating entrances
  rotateIn: 'rotateIn',
  rotateInDownLeft: 'rotateInDownLeft',
  rotateInDownRight: 'rotateInDownRight',
  rotateInUpLeft: 'rotateInUpLeft',
  rotateInUpRight: 'rotateInUpRight',
  // Rotating exits
  rotateOut: 'rotateOut',
  rotateOutDownLeft: 'rotateOutDownLeft',
  rotateOutDownRight: 'rotateOutDownRight',
  rotateOutUpLeft: 'rotateOutUpLeft',
  rotateOutUpRight: 'rotateOutUpRight',
  // Specials
  hinge: 'hinge',
  jackInTheBox: 'jackInTheBox',
  rollIn: 'rollIn',
  rollOut: 'rollOut',
  // Zooming entrances
  zoomIn: 'zoomIn',
  zoomInDown: 'zoomInDown',
  zoomInLeft: 'zoomInLeft',
  zoomInRight: 'zoomInRight',
  zoomInUp: 'zoomInUp',
  // Zooming exits
  zoomOut: 'zoomOut',
  zoomOutDown: 'zoomOutDown',
  zoomOutLeft: 'zoomOutLeft',
  zoomOutRight: 'zoomOutRight',
  zoomOutUp: 'zoomOutUp',
  // Sliding entrances
  slideInDown: 'slideInDown',
  slideInLeft: 'slideInLeft',
  slideInRight: 'slideInRight',
  slideInUp: 'slideInUp',
  // Sliding exits
  slideOutDown: 'slideOutDown',
  slideOutLeft: 'slideOutLeft',
  slideOutRight: 'slideOutRight',
  slideOutUp: 'slideOutUp'
};
var animationClassNames = [['Attention seekers', '', true], // Attention seekers
['bounce', 'animate__bounce'], ['flash', 'animate__flash'], ['pulse', 'animate__pulse'], ['rubberBand', 'animate__rubberBand'], ['shakeX', 'animate__shakeX'], ['shakeY', 'animate__shakeY'], ['headShake', 'animate__headShake'], ['swing', 'animate__swing'], ['tada', 'animate__tada'], ['wobble', 'animate__wobble'], ['jello', 'animate__jello'], ['heartBeat', 'animate__heartBeat'], ['Back entrances', '', true], // Back entrances
['backInDown', 'animate__backInDown'], ['backInLeft', 'animate__backInLeft'], ['backInRight', 'animate__backInRight'], ['backInUp', 'animate__backInUp'], ['Back exits', '', true], // Back exits
['backOutDown', 'animate__backOutDown'], ['backOutLeft', 'animate__backOutLeft'], ['backOutRight', 'animate__backOutRight'], ['backOutUp', 'animate__backOutUp'], ['Bouncing entrances', '', true], // Bouncing entrances
['bounceIn', 'animate__bounceIn'], ['bounceInDown', 'animate__bounceInDown'], ['bounceInLeft', 'animate__bounceInLeft'], ['bounceInRight', 'animate__bounceInRight'], ['bounceInUp', 'animate__bounceInUp'], ['Bouncing exits', '', true], // Bouncing exits
['bounceOut', 'animate__bounceOut'], ['bounceOutDown', 'animate__bounceOutDown'], ['bounceOutLeft', 'animate__bounceOutLeft'], ['bounceOutRight', 'animate__bounceOutRight'], ['bounceOutUp', 'animate__bounceOutUp'], ['Fading entrances', '', true], // Fading entrances
['fadeIn', 'animate__fadeIn'], ['fadeInDown', 'animate__fadeInDown'], ['fadeInDownBig', 'animate__fadeInDownBig'], ['fadeInLeft', 'animate__fadeInLeft'], ['fadeInLeftBig', 'animate__fadeInLeftBig'], ['fadeInRight', 'animate__fadeInRight'], ['fadeInRightBig', 'animate__fadeInRightBig'], ['fadeInUp', 'animate__fadeInUp'], ['fadeInUpBig', 'animate__fadeInUpBig'], ['fadeInTopLeft', 'animate__fadeInTopLeft'], ['fadeInTopRight', 'animate__fadeInTopRight'], ['fadeInBottomLeft', 'animate__fadeInBottomLeft'], ['fadeInBottomRight', 'animate__fadeInBottomRight'], ['Fading exits', '', true], // Fading exits
['fadeOut', 'animate__fadeOut'], ['fadeOutDown', 'animate__fadeOutDown'], ['fadeOutDownBig', 'animate__fadeOutDownBig'], ['fadeOutLeft', 'animate__fadeOutLeft'], ['fadeOutLeftBig', 'animate__fadeOutLeftBig'], ['fadeOutRight', 'animate__fadeOutRight'], ['fadeOutRightBig', 'animate__fadeOutRightBig'], ['fadeOutUp', 'animate__fadeOutUp'], ['fadeOutUpBig', 'animate__fadeOutUpBig'], ['fadeOutTopLeft', 'animate__fadeOutTopLeft'], ['fadeOutTopRight', 'animate__fadeOutTopRight'], ['fadeOutBottomRight', 'animate__fadeOutBottomRight'], ['fadeOutBottomLeft', 'animate__fadeOutBottomLeft'], ['Flippers', '', true], // Flippers
['flip', 'animate__flip'], ['flipInX', 'animate__flipInX'], ['flipInY', 'animate__flipInY'], ['flipOutX', 'animate__flipOutX'], ['flipOutY', 'animate__flipOutY'], ['Lightspeed', '', true], // Lightspeed
['lightSpeedInRight', 'animate__lightSpeedInRight'], ['lightSpeedInLeft', 'animate__lightSpeedInLeft'], ['lightSpeedOutRight', 'animate__lightSpeedOutRight'], ['lightSpeedOutLeft', 'animate__lightSpeedOutLeft'], ['Rotating entrances', '', true], // Rotating entrances
['rotateIn', 'animate__rotateIn'], ['rotateInDownLeft', 'animate__rotateInDownLeft'], ['rotateInDownRight', 'animate__rotateInDownRight'], ['rotateInUpLeft', 'animate__rotateInUpLeft'], ['rotateInUpRight', 'animate__rotateInUpRight'], ['Rotating exits', '', true], // Rotating exits
['rotateOut', 'animate__rotateOut'], ['rotateOutDownLeft', 'animate__rotateOutDownLeft'], ['rotateOutDownRight', 'animate__rotateOutDownRight'], ['rotateOutUpLeft', 'animate__rotateOutUpLeft'], ['rotateOutUpRight', 'animate__rotateOutUpRight'], ['Specials', '', true], // Specials
['hinge', 'animate__hinge'], ['jackInTheBox', 'animate__jackInTheBox'], ['rollIn', 'animate__rollIn'], ['rollOut', 'animate__rollOut'], ['Zooming entrances', '', true], // Zooming entrances
['zoomIn', 'animate__zoomIn'], ['zoomInDown', 'animate__zoomInDown'], ['zoomInLeft', 'animate__zoomInLeft'], ['zoomInRight', 'animate__zoomInRight'], ['zoomInUp', 'animate__zoomInUp'], ['Zooming exits', '', true], // Zooming exits
['zoomOut', 'animate__zoomOut'], ['zoomOutDown', 'animate__zoomOutDown'], ['zoomOutLeft', 'animate__zoomOutLeft'], ['zoomOutRight', 'animate__zoomOutRight'], ['zoomOutUp', 'animate__zoomOutUp'], ['Sliding entrances', '', true], // Sliding entrances
['slideInDown', 'animate__slideInDown'], ['slideInLeft', 'animate__slideInLeft'], ['slideInRight', 'animate__slideInRight'], ['slideInUp', 'animate__slideInUp'], ['Sliding exits', '', true], // Sliding exits
['slideOutDown', 'animate__slideOutDown'], ['slideOutLeft', 'animate__slideOutLeft'], ['slideOutRight', 'animate__slideOutRight'], ['slideOutUp', 'animate__slideOutUp']];
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: addAnimateBlockControls, addAttribute, addSaveProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAnimateBlockControls", function() { return addAnimateBlockControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttribute", function() { return addAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSaveProps", function() { return addSaveProps; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);











/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {Function | Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var addAnimateBlockControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        gbaType = _props$attributes.gbaType,
        gbaDuration = _props$attributes.gbaDuration,
        gbaDelay = _props$attributes.gbaDelay,
        gbaRepeat = _props$attributes.gbaRepeat;
    var options = _animations__WEBPACK_IMPORTED_MODULE_3__["animationClassNames"].map(function (a) {
      return {
        label: a[0],
        value: a[1],
        disabled: a[2]
      };
    });
    options.unshift({
      label: 'none',
      value: ''
    }, {
      label: '————',
      value: '',
      disabled: true
    });
    if (isValidBlockType(name) && isSelected) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animateditor", {
      onAnimationEnd: function onAnimationEnd(e) {
        return e.target.classList.remove('animate__animated');
      },
      className: gbaType !== '' ? 'animate__animated ' + gbaType : '',
      style: gbaDuration ? {
        animationDuration: gbaDuration + 'ms'
      } : null
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Animation Controls', 'dk-gb/animate'),
      className: "gb-animation-panel",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Type', 'dk-gb/animate'),
      value: gbaType || '',
      onChange: function onChange(option) {
        setAttributes({
          gbaType: option
        });
      },
      options: options
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      className: "repeat",
      type: "number",
      min: 0,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Repetitions', 'dk-gb/animate'),
      value: gbaRepeat || '',
      onChange: function onChange(value) {
        return setAttributes({
          gbaRepeat: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      className: "duration",
      type: "number",
      min: 0,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('time in milliseconds', 'dk-gb/animate'),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Duration', 'dk-gb/animate'),
      value: gbaDuration || '',
      onChange: function onChange(value) {
        return setAttributes({
          gbaDuration: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      className: "delay",
      type: "number",
      min: 0,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('time in milliseconds', 'dk-gb/animate'),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Delay', 'dk-gb/animate'),
      value: gbaDelay || '',
      onChange: function onChange(value) {
        return setAttributes({
          gbaDelay: value
        });
      }
    }))));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'addAnimateBlockControls');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockEdit', 'dk-gb/animate', addAnimateBlockControls);

function isValidBlockType(name) {
  /**
   * You can use this function to only selectively
   * enable animation options for certain blocks:
   *
   * 1) comment out the next line
   * 2) comment out the corresponding strings in
   *		validBlockTypes for the blocks which you
   *		would like to disable
   *
   */
  return true; // eslint-disable-next-line no-unreachable

  var validBlockTypes = ['core/paragraph', 'core/image', 'core/heading', 'core/gallery', 'core/list', 'core/quote', 'core/shortcode', 'core/archives', 'core/audio', 'core/button', 'core/categories', 'core/code', 'core/columns', 'core/column', 'core/cover-image', 'core/embed', 'core/file', 'core/freeform', 'core/html', 'core/latest-comments', 'core/latest-posts', 'core/more', 'core/nextpage', 'core/preformatted', 'core/pullquote', 'core/separator', 'core/block', 'core/spacer', 'core/subhead', 'core/table', 'core/template', 'core/text-columns', 'core/verse', 'core/video', 'core-embed/twitter', 'core-embed/youtube', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/dailymotion', 'core-embed/funnyordie', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/photobucket', 'core-embed/polldaddy', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker', 'core-embed/speaker-deck', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv'];
  return validBlockTypes.includes(name);
}
/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */


function addAttribute(settings) {
  if (isValidBlockType(settings.name)) // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["assign"])(settings.attributes, {
      gbaType: {
        type: 'string'
      },
      gbaDuration: {
        type: 'string'
      },
      gbaDelay: {
        type: 'string'
      },
      gbaRepeat: {
        type: 'string'
      }
    });
  return settings;
}
/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addSaveProps(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  // Comment out the next line to make the features accessible to ANY GB Block (experimental)
  if (isValidBlockType(blockType.name)) {
    if (!attributes.gbaType || attributes.gbaType === '') //extraProps['data-animated'] = false
      return;
    extraProps['data-animation'] = attributes.gbaType;
    extraProps['data-animated'] = true;
    extraProps['data-duration'] = attributes.gbaDuration;
    extraProps['data-delay'] = attributes.gbaDelay;
    extraProps['data-repeat'] = attributes.gbaRepeat; // Comment out the next line to make the features accessible to ANY GB Block (experimental)
  }

  return extraProps;
} // end addSaveProps()

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('blocks.registerBlockType', 'dk-animate-gutenberg/add-attr', addAttribute);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('blocks.getSaveContent.extraProps', 'dk-animate-gutenberg/add-props', addSaveProps);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ "./src/block.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
 //import './components/format.js'

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map