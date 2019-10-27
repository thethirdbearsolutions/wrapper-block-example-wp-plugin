// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/classnames/index.js":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"wrapper-block-example.js":[function(require,module,exports) {
"use strict";

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BLOCK: wrapper-block-example/background
 */
// Used to to join classes together
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
registerBlockType('sos-section/sos-section-group', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Story of Stuff Section Group', 'sos-section-group'),
  // Block title.
  icon: 'editor-table',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'layout',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('Story of Stuff Section', 'sos-section-group')],
  attributes: {
    color: {
      type: 'string'
    },
    pattern: {
      type: 'string'
    },
    topSlant: {
      type: 'string'
    },
    bottomSlant: {
      type: 'string'
    },
    widthExtent: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var _attributes$color = attributes.color,
        color = _attributes$color === void 0 ? '' : _attributes$color,
        _attributes$pattern = attributes.pattern,
        pattern = _attributes$pattern === void 0 ? '' : _attributes$pattern,
        _attributes$topSlant = attributes.topSlant,
        topSlant = _attributes$topSlant === void 0 ? '' : _attributes$topSlant,
        _attributes$bottomSla = attributes.bottomSlant,
        bottomSlant = _attributes$bottomSla === void 0 ? '' : _attributes$bottomSla,
        _attributes$widthExte = attributes.widthExtent,
        widthExtent = _attributes$widthExte === void 0 ? '' : _attributes$widthExte;
    return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
      title: __('Story of Stuff Section Settings', 'story-of-stuff-section-group'),
      initialOpen: true
    }, React.createElement(SelectControl, {
      label: __('Background Color', 'story-of-stuff-section-group'),
      value: color,
      options: [{
        value: '',
        label: __('No Background Color', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--light-blue',
        label: __('Light Blue', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--dark-blue',
        label: __('Dark Blue', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--red',
        label: __('Red', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--yellow',
        label: __('Yellow', 'story-of-stuff-section-group')
      }],
      onChange: function onChange(selectedOption) {
        return setAttributes({
          color: selectedOption
        });
      }
    }), React.createElement(SelectControl, {
      label: __('Pattern', 'story-of-stuff-section-group'),
      value: pattern,
      options: [{
        value: '',
        label: __('No Pattern', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--wave',
        label: __('Wave', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--noodles',
        label: __('Noodles', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--ramen',
        label: __('Ramen', 'story-of-stuff-section-group')
      }, {
        value: 'patterned--halfshell',
        label: __('Halfshell', 'story-of-stuff-section-group')
      }],
      onChange: function onChange(selectedOption) {
        return setAttributes({
          pattern: selectedOption
        });
      }
    }), React.createElement(SelectControl, {
      label: __('Top Slant', 'story-of-stuff-section-group'),
      value: topSlant,
      options: [{
        value: '',
        label: __('No Slant', 'story-of-stuff-section-group')
      }, {
        value: 'slant--top-up',
        label: __('Slant upwards from top left to right', 'story-of-stuff-section-group')
      }, {
        value: 'slant--top-down',
        label: __('Slant downwards from top left to right', 'story-of-stuff-section-group')
      }],
      onChange: function onChange(selectedOption) {
        return setAttributes({
          topSlant: selectedOption
        });
      }
    }), React.createElement(SelectControl, {
      label: __('Bottom Slant', 'story-of-stuff-section-group'),
      value: bottomSlant,
      options: [{
        value: '',
        label: __('No Slant', 'story-of-stuff-section-group')
      }, {
        value: 'slant--bottom-up',
        label: __('Slant upwards from bottom left to right', 'story-of-stuff-section-group')
      }, {
        value: 'slant--bottom-down',
        label: __('Slant downwards from bottom left to right', 'story-of-stuff-section-group')
      }],
      onChange: function onChange(selectedOption) {
        return setAttributes({
          bottomSlant: selectedOption
        });
      }
    }), React.createElement(SelectControl, {
      label: __('Extend to full width?', 'story-of-stuff-section-group'),
      value: widthExtent,
      options: [{
        value: '',
        label: __('No', 'story-of-stuff-section-group')
      }, {
        value: 'flush-left',
        label: __('Left Side Only', 'story-of-stuff-section-group')
      }, {
        value: 'flush-right',
        label: __('Right Side Only', 'story-of-stuff-section-group')
      }, {
        value: 'flush-left-and-right',
        label: __('Full Width - Left & Right', 'story-of-stuff-section-group')
      }],
      onChange: function onChange(selectedOption) {
        return setAttributes({
          widthExtent: selectedOption
        });
      }
    }))), React.createElement("div", {
      className: className
    }, React.createElement(InnerBlocks, null)));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes,
        className = _ref2.className;
    var _attributes$color2 = attributes.color,
        color = _attributes$color2 === void 0 ? '' : _attributes$color2,
        _attributes$pattern2 = attributes.pattern,
        pattern = _attributes$pattern2 === void 0 ? '' : _attributes$pattern2,
        _attributes$topSlant2 = attributes.topSlant,
        topSlant = _attributes$topSlant2 === void 0 ? '' : _attributes$topSlant2,
        _attributes$bottomSla2 = attributes.bottomSlant,
        bottomSlant = _attributes$bottomSla2 === void 0 ? '' : _attributes$bottomSla2,
        _attributes$widthExte2 = attributes.widthExtent,
        widthExtent = _attributes$widthExte2 === void 0 ? '' : _attributes$widthExte2;
    var styles = {};
    var classes = className;
    var patterned = pattern || color ? 'patterned' : '';
    var slanted = topSlant || bottomSlant ? 'slant' : ''; // Use classnames library to join all classes together

    classes = (0, _classnames.default)(patterned, color, pattern, slanted, topSlant, bottomSlant, widthExtent, classes);
    return React.createElement("div", {
      className: classes
    }, React.createElement("div", {
      className: "container"
    }, React.createElement(InnerBlocks.Content, null)));
  }
});
},{"classnames":"../../node_modules/classnames/index.js"}]},{},["wrapper-block-example.js"], null)
//# sourceMappingURL=/wrapper-block-example.js.map