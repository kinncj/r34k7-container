(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["r34k7"] = factory(require("React"));
	else
		root["r34k7"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _eventConfiguration = __webpack_require__(/*! ./eventConfiguration */ 4);
	
	var _eventConfiguration2 = _interopRequireDefault(_eventConfiguration);
	
	var _dispatcher = __webpack_require__(/*! ./dispatcher */ 1);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _containerReact = __webpack_require__(/*! ./container.react */ 8);
	
	var _containerReact2 = _interopRequireDefault(_containerReact);
	
	var _handlerReact = __webpack_require__(/*! ./handler.react */ 9);
	
	var _handlerReact2 = _interopRequireDefault(_handlerReact);
	
	var r34k7 = {
	    'EventConfiguration': _eventConfiguration2['default'],
	    'Dispatcher': _dispatcher2['default'],
	    'Container': _containerReact2['default'],
	    'Handler': _handlerReact2['default']
	};
	
	exports['default'] = r34k7;
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!***************************!*\
  !*** ./lib/dispatcher.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _eventConfiguration = __webpack_require__(/*! ./eventConfiguration */ 4);
	
	var _eventConfiguration2 = _interopRequireDefault(_eventConfiguration);
	
	var _abstractEventTarget = __webpack_require__(/*! ./abstractEventTarget */ 2);
	
	var _abstractEventTarget2 = _interopRequireDefault(_abstractEventTarget);
	
	var _eventTarget = __webpack_require__(/*! ./eventTarget */ 5);
	
	var _eventTarget2 = _interopRequireDefault(_eventTarget);
	
	var Dispatcher = (function () {
	    function Dispatcher(eventTarget) {
	        _classCallCheck(this, Dispatcher);
	
	        if (eventTarget instanceof window.EventTarget === false && eventTarget instanceof _abstractEventTarget2['default'] === false) {
	            eventTarget = _eventTarget2['default'];
	        }
	
	        this.eventTarget = eventTarget;
	    }
	
	    _createClass(Dispatcher, [{
	        key: 'dispatch',
	        value: function dispatch(event) {
	            if (!(event instanceof Event)) {
	                event = new Event(event);
	            }
	
	            this.eventTarget.dispatchEvent(event);
	            this.eventTarget.dispatchEvent(new Event(_eventConfiguration2['default'].name + '.dispatcher.dispatched'));
	        }
	    }]);
	
	    return Dispatcher;
	})();
	
	exports['default'] = Dispatcher;
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!************************************!*\
  !*** ./lib/abstractEventTarget.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _abstractMethodException = __webpack_require__(/*! ./abstractMethodException */ 7);
	
	var _abstractMethodException2 = _interopRequireDefault(_abstractMethodException);
	
	var AbstractEventTarget = (function () {
	    function AbstractEventTarget() {
	        _classCallCheck(this, AbstractEventTarget);
	    }
	
	    _createClass(AbstractEventTarget, [{
	        key: 'addEventListener',
	        value: function addEventListener() {
	            throw new _abstractMethodException2['default']('Abstract method "addEventListener" must be implemented.');
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener() {
	            throw new _abstractMethodException2['default']('Abstract method "removeEventListener" must be implemented.');
	        }
	    }, {
	        key: 'dispatchEvent',
	        value: function dispatchEvent() {
	            throw new _abstractMethodException2['default']('Abstract method "dispatchEvent" must be implemented.');
	        }
	    }]);
	
	    return AbstractEventTarget;
	})();
	
	exports['default'] = AbstractEventTarget;
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!**********************!*\
  !*** ./lib/event.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Event = {
	    name: 'r34k7.container',
	    mask: 'r34k7.container.%TARGET%.%ACTION%'
	};
	
	exports['default'] = Event;
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!***********************************!*\
  !*** ./lib/eventConfiguration.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var EventConfiguration = {
	    name: 'r34k7.container',
	    mask: 'r34k7.container.%TARGET%.%ACTION%'
	};
	
	exports['default'] = Event;
	module.exports = exports['default'];

/***/ },
/* 5 */
/*!****************************!*\
  !*** ./lib/eventTarget.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _noListenerException = __webpack_require__(/*! ./noListenerException */ 10);
	
	var _noListenerException2 = _interopRequireDefault(_noListenerException);
	
	var _runtimeException = __webpack_require__(/*! ./runtimeException */ 11);
	
	var _runtimeException2 = _interopRequireDefault(_runtimeException);
	
	var _abstractEventTarget = __webpack_require__(/*! ./abstractEventTarget */ 2);
	
	var _abstractEventTarget2 = _interopRequireDefault(_abstractEventTarget);
	
	var EventTarget = (function (_AbstractEventTarget) {
	    _inherits(EventTarget, _AbstractEventTarget);
	
	    function EventTarget() {
	        _classCallCheck(this, EventTarget);
	
	        _get(Object.getPrototypeOf(EventTarget.prototype), 'constructor', this).call(this);
	
	        this._listeners = [];
	    }
	
	    _createClass(EventTarget, [{
	        key: 'addEventListener',
	        value: function addEventListener(eventName, callback) {
	            if (!this._listeners[eventName]) {
	                this._listeners[eventName] = [];
	            }
	
	            this._listeners[eventName].push(callback);
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(eventName, callable) {
	            if (!this._listeners[eventName] || this._listeners[eventName]) {
	                throw new _noListenerException2['default']('There\'s no listener for event "' + eventName + '".', callback);
	            }
	
	            this._listeners[eventName].forEach((function (callback, index) {
	                if (callback == callable) {
	                    delete this._listeners[eventName][index];
	                }
	            }).bind(this));
	        }
	    }, {
	        key: 'dispatchEvent',
	        value: function dispatchEvent(event) {
	            if (!(event instanceof Event)) {
	                throw new _runtimeException2['default']('Event expected; "' + typeof event + '" given.');
	            }
	
	            var eventName = event.type;
	
	            if (!this._listeners[eventName]) {
	                return;
	            }
	
	            this._listeners[eventName].forEach(function (callback) {
	                console.log(callback);
	                callback.apply(event);
	            });
	        }
	    }]);
	
	    return EventTarget;
	})(_abstractEventTarget2['default']);
	
	exports['default'] = new EventTarget();
	module.exports = exports['default'];

/***/ },
/* 6 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/*!****************************************!*\
  !*** ./lib/abstractMethodException.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var AbstractMethodException = function AbstractMethodException(message) {
	    _classCallCheck(this, AbstractMethodException);
	
	    this.message = message;
	    this.name = 'AbstractMethodException';
	};
	
	exports['default'] = AbstractMethodException;
	module.exports = exports['default'];

/***/ },
/* 8 */
/*!********************************!*\
  !*** ./lib/container.react.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _event = __webpack_require__(/*! ./event */ 3);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _dispatcher = __webpack_require__(/*! ./dispatcher */ 1);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _eventTarget = __webpack_require__(/*! ./eventTarget */ 5);
	
	var _eventTarget2 = _interopRequireDefault(_eventTarget);
	
	var Container = (function (_React$Component) {
	    _inherits(Container, _React$Component);
	
	    function Container(props, context) {
	        _classCallCheck(this, Container);
	
	        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).call(this, props, context);
	
	        this.state = { visible: props.visible || false };
	        this.actions = ['open', 'close'];
	        this.eventTarget = this.props.eventTarget || _eventTarget2['default'];
	    }
	
	    _createClass(Container, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.actions.forEach((function (action) {
	                this.eventTarget.addEventListener(_event2['default'].mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action), this[action].bind(this), false);
	            }).bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.actions.forEach((function (action) {
	                this.eventTarget.removeEventListener(_event2['default'].mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action), this[action], false);
	            }).bind(this));
	        }
	    }, {
	        key: 'open',
	        value: function open() {
	            var eventName = _event2['default'].mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'opened'),
	                dispatcher = new _dispatcher2['default']();
	
	            dispatcher.dispatch(eventName);
	
	            this.setState({ visible: true });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            var eventName = _event2['default'].mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'closed'),
	                dispatcher = new _dispatcher2['default'](this.props.eventTarget);
	
	            dispatcher.dispatch(eventName);
	
	            this.setState({ visible: false });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var style = {};
	
	            if (!this.state.visible) {
	                style.display = 'none';
	            }
	
	            return _react2['default'].createElement(
	                'div',
	                { style: style },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Container;
	})(_react2['default'].Component);
	
	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 9 */
/*!******************************!*\
  !*** ./lib/handler.react.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _event = __webpack_require__(/*! ./event */ 3);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _dispatcher = __webpack_require__(/*! ./dispatcher */ 1);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var Handler = (function (_React$Component) {
	    _inherits(Handler, _React$Component);
	
	    function Handler() {
	        _classCallCheck(this, Handler);
	
	        _get(Object.getPrototypeOf(Handler.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Handler, [{
	        key: 'handle',
	        value: function handle() {
	            var eventName = _event2['default'].mask.replace('%TARGET%', this.props.target).replace('%ACTION%', this.props.action),
	                dispatcher = new _dispatcher2['default'](this.props.eventTarget);
	
	            dispatcher.dispatch(eventName);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].cloneElement(this.props.children, { 'onClick': this.handle.bind(this) });
	        }
	    }]);
	
	    return Handler;
	})(_react2['default'].Component);
	
	exports['default'] = Handler;
	module.exports = exports['default'];

/***/ },
/* 10 */
/*!************************************!*\
  !*** ./lib/noListenerException.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var NoListenerException = function NoListenerException(message, callback) {
	    _classCallCheck(this, NoListenerException);
	
	    this.message = message;
	    this.callback = callback;
	    this.name = 'NoListenerException';
	};
	
	exports['default'] = NoListenerException;
	module.exports = exports['default'];

/***/ },
/* 11 */
/*!*********************************!*\
  !*** ./lib/runtimeException.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var RuntimeException = function RuntimeException(message) {
	    _classCallCheck(this, RuntimeException);
	
	    this.message = message;
	    this.name = 'RuntimeException';
	};
	
	exports['default'] = RuntimeException;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=r34k7.js.map