(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react/addons"));
	else if(typeof define === 'function' && define.amd)
		define(["react/addons"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react/addons")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/***/ function(module, exports, __webpack_require__) {

	module.exports.Panel = __webpack_require__(1);
	module.exports.ResponsivePanel = __webpack_require__(2);
	module.exports.PanelHead = __webpack_require__(3);
	module.exports.PanelBody = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var react = __webpack_require__(5);
	var ClassNameMixin = __webpack_require__(7).ClassNameMixin;

	var Panel = React.createClass({displayName: "Panel",
	  mixins: [ClassNameMixin],

	  render: function() {
	    return (
	      React.createElement("section", {className: this.getClassName()}, 
	        this.props.children
	      )
	    );
	  },

	  getComponentClassName: function() {
	    return 'panel';
	  }
	});

	module.exports = Panel;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var react = __webpack_require__(5);

	var ClassNameMixin = __webpack_require__(7).ClassNameMixin;
	var mediaMatch = __webpack_require__(6);

	var Panel = __webpack_require__(1);
	var $__0=    __webpack_require__(9),Collapsible=$__0.Collapsible,CollapsibleHead=$__0.CollapsibleHead,CollapsibleBody=$__0.CollapsibleBody;

	var ResponsivePanel = React.createClass({displayName: "ResponsivePanel",
	  mixins: [ClassNameMixin],
	  mediaQuery: null,

	  getDefaultProps: function() {
	    return {
	      convertQuery: '(max-width: 480px)'
	    }
	  },

	  getInitialState: function() {
	    return {
	      renderAsCollapsbile: false
	    };
	  },

	  componentWillMount: function() {
	    this.addMediaMatch();
	  },

	  componentWillUnmount: function() {
	    this.mediaQuery.removeListener(this.observeMediaQuery);
	  },

	  addMediaMatch: function() {
	    var query = this.props.convertQuery;
	    if (!query.match(/\(|\)/)) {
	      query = '(' + this.props.convertQuery + ')';
	    }

	    this.mediaQuery = window.matchMedia(query);
	    this.mediaQuery.addListener(this.observeMediaQuery);

	    this.observeMediaQuery();
	  },

	  observeMediaQuery: function() {
	    this.setState({renderAsCollapsbile: this.mediaQuery.matches});
	  },

	  render: function() {
	    if (this.state.renderAsCollapsbile) {
	      return this.renderAsCollapsible();
	    } else {
	      return this.renderAsPanel();
	    }
	  },

	  renderAsPanel: function() {
	    return (
	      React.createElement(Panel, {className: this.getClassName()}, 
	        this.props.children
	      )
	    );
	  },

	  renderAsCollapsible: function() {
	    collapsibleHead = this.getCollapsibleHead();
	    collapsibleBody = this.getCollapsibleBody();

	    return (
	      React.createElement(Collapsible, {className: this.getClassName()}, 
	        collapsibleHead, 
	        collapsibleBody
	      )
	    );
	  },

	  getCollapsibleHead: function() {
	    var collapsibleHead;

	    React.Children.forEach(this.props.children, function(child) {
	      if (child.type == PanelHead.type) {
	        collapsibleHead = (
	          React.createElement(CollapsibleHead, React.__spread({},  child.props), child.props.children)
	        );
	      }
	    });

	    return collapsibleHead;
	  },

	  getCollapsibleBody: function() {
	    var collapsibleBody;

	    React.Children.forEach(this.props.children, function(child) {
	      if (child.type == PanelBody.type) {
	        collapsibleBody = (
	          React.createElement(CollapsibleBody, React.__spread({},  child.props), child.props.children)
	        );
	      }
	    });

	    return collapsibleBody;
	  }
	});

	module.exports = ResponsivePanel;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var react = __webpack_require__(5);
	var ClassNameMixin = __webpack_require__(7).ClassNameMixin;

	var PanelHead = React.createClass({displayName: "PanelHead",
	  mixins: [ClassNameMixin],

	  render: function() {
	    return (
	      React.createElement("header", {className: this.getClassName()}, 
	        this.props.children
	      )
	    );
	  },

	  getComponentClassName: function() {
	    return 'panel__head';
	  }
	});

	module.exports = PanelHead;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var react = __webpack_require__(5);
	var ClassNameMixin = __webpack_require__(7).ClassNameMixin;

	var PanelBody = React.createClass({displayName: "PanelBody",
	  mixins: [ClassNameMixin],

	  render: function() {
	    return (
	      React.createElement("div", {className: this.getClassName()}, 
	        this.props.children
	      )
	    );
	  },

	  getComponentClassName: function() {
	    return 'panel__body';
	  }
	});

	module.exports = PanelBody;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

	window.matchMedia || (window.matchMedia = function (win) {
	    'use strict';

	    // Internal globals
	    var _doc        = win.document,
	        _viewport   = _doc.documentElement,
	        _queries    = [],
	        _queryID    = 0,
	        _type       = '',
	        _features   = {},
	                    // only screen
	                    // only screen and
	                    // not screen
	                    // not screen and
	                    // screen
	                    // screen and
	        _typeExpr   = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
	                    // (-vendor-min-width: 300px)
	                    // (min-width: 300px)
	                    // (width: 300px)
	                    // (width)
	                    // (orientation: portrait|landscape)
	        _mediaExpr  = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
	        _timer      = 0,

	        // Helper methods

	        /*
	            _matches
	         */
	        _matches = function (media) {
	            // screen and (min-width: 400px), screen and (max-width: 500px)
	            var mql         = (media.indexOf(',') !== -1 && media.split(',')) || [media],
	                mqIndex     = mql.length - 1,
	                mqLength    = mqIndex,
	                mq          = null,

	                // not screen, screen
	                negateType      = null,
	                negateTypeFound = '',
	                negateTypeIndex = 0,
	                negate          = false,
	                type            = '',

	                // (min-width: 400px), (min-width)
	                exprListStr = '',
	                exprList    = null,
	                exprIndex   = 0,
	                exprLength  = 0,
	                expr        = null,

	                prefix      = '',
	                length      = '',
	                unit        = '',
	                value       = '',
	                feature     = '',

	                match       = false;

	            if (media === '') {
	                return true;
	            }

	            do {
	                mq          = mql[mqLength - mqIndex];
	                negate      = false;
	                negateType  = mq.match(_typeExpr);

	                if (negateType) {
	                    negateTypeFound = negateType[0];
	                    negateTypeIndex = negateType.index;
	                }

	                if (!negateType || ((mq.substring(0, negateTypeIndex).indexOf('(') === -1) && (negateTypeIndex || (!negateType[3] && negateTypeFound !== negateType.input)))) {
	                    match = false;
	                    continue;
	                }

	                exprListStr = mq;

	                negate = negateType[1] === 'not';

	                if (!negateTypeIndex) {
	                    type        =  negateType[2];
	                    exprListStr = mq.substring(negateTypeFound.length);
	                }

	                // Test media type
	                // Test type against this device or if 'all' or empty ''
	                match       = type === _type || type === 'all' || type === '';

	                exprList    = (exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ')) || [exprListStr];
	                exprIndex   = exprList.length - 1;
	                exprLength  = exprIndex;

	                if (match && exprIndex >= 0 && exprListStr !== '') {
	                    do {
	                        expr = exprList[exprIndex].match(_mediaExpr);

	                        if (!expr || !_features[expr[3]]) {
	                            match = false;
	                            break;
	                        }

	                        prefix  = expr[2];
	                        length  = expr[5];
	                        value   = length;
	                        unit    = expr[7];
	                        feature = _features[expr[3]];

	                        // Convert unit types
	                        if (unit) {
	                            if (unit === 'px') {
	                                // If unit is px
	                                value = Number(length);
	                            } else if (unit === 'em' || unit === 'rem') {
	                                // Convert relative length unit to pixels
	                                // Assumed base font size is 16px
	                                value = 16 * length;
	                            } else if (expr[8]) {
	                                // Convert aspect ratio to decimal
	                                value = (length / expr[8]).toFixed(2);
	                            } else if (unit === 'dppx') {
	                                // Convert resolution dppx unit to pixels
	                                value = length * 96;
	                            } else if (unit === 'dpcm') {
	                                // Convert resolution dpcm unit to pixels
	                                value = length * 0.3937;
	                            } else {
	                                // default
	                                value = Number(length);
	                            }
	                        }

	                        // Test for prefix min or max
	                        // Test value against feature
	                        if (prefix === 'min-' && value) {
	                            match = feature >= value;
	                        } else if (prefix === 'max-' && value) {
	                            match = feature <= value;
	                        } else if (value) {
	                            match = feature === value;
	                        } else {
	                            match = !!feature;
	                        }

	                        // If 'match' is false, break loop
	                        // Continue main loop through query list
	                        if (!match) {
	                            break;
	                        }
	                    } while (exprIndex--);
	                }

	                // If match is true, break loop
	                // Once matched, no need to check other queries
	                if (match) {
	                    break;
	                }
	            } while (mqIndex--);

	            return negate ? !match : match;
	        },

	        /*
	            _setFeature
	         */
	        _setFeature = function () {
	            // Sets properties of '_features' that change on resize and/or orientation.
	            var w   = win.innerWidth || _viewport.clientWidth,
	                h   = win.innerHeight || _viewport.clientHeight,
	                dw  = win.screen.width,
	                dh  = win.screen.height,
	                c   = win.screen.colorDepth,
	                x   = win.devicePixelRatio;

	            _features.width                     = w;
	            _features.height                    = h;
	            _features['aspect-ratio']           = (w / h).toFixed(2);
	            _features['device-width']           = dw;
	            _features['device-height']          = dh;
	            _features['device-aspect-ratio']    = (dw / dh).toFixed(2);
	            _features.color                     = c;
	            _features['color-index']            = Math.pow(2, c);
	            _features.orientation               = (h >= w ? 'portrait' : 'landscape');
	            _features.resolution                = (x && x * 96) || win.screen.deviceXDPI || 96;
	            _features['device-pixel-ratio']     = x || 1;
	        },

	        /*
	            _watch
	         */
	        _watch = function () {
	            clearTimeout(_timer);

	            _timer = setTimeout(function () {
	                var query   = null,
	                    qIndex  = _queryID - 1,
	                    qLength = qIndex,
	                    match   = false;

	                if (qIndex >= 0) {
	                    _setFeature();

	                    do {
	                        query = _queries[qLength - qIndex];

	                        if (query) {
	                            match = _matches(query.mql.media);

	                            if ((match && !query.mql.matches) || (!match && query.mql.matches)) {
	                                query.mql.matches = match;

	                                if (query.listeners) {
	                                    for (var i = 0, il = query.listeners.length; i < il; i++) {
	                                        if (query.listeners[i]) {
	                                            query.listeners[i].call(win, query.mql);
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    } while(qIndex--);
	                }

	                
	            }, 10);
	        },

	        /*
	            _init
	         */
	        _init = function () {
	            var head        = _doc.getElementsByTagName('head')[0],
	                style       = _doc.createElement('style'),
	                info        = null,
	                typeList    = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
	                typeIndex   = 0,
	                typeLength  = typeList.length,
	                cssText     = '#mediamatchjs { position: relative; z-index: 0; }',
	                eventPrefix = '',
	                addEvent    = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

	            style.type  = 'text/css';
	            style.id    = 'mediamatchjs';

	            head.appendChild(style);

	            // Must be placed after style is inserted into the DOM for IE
	            info = (win.getComputedStyle && win.getComputedStyle(style)) || style.currentStyle;

	            // Create media blocks to test for media type
	            for ( ; typeIndex < typeLength; typeIndex++) {
	                cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
	            }

	            // Add rules to style element
	            if (style.styleSheet) {
	                style.styleSheet.cssText = cssText;
	            } else {
	                style.textContent = cssText;
	            }

	            // Get media type
	            _type = typeList[(info.zIndex * 1) || 0];

	            head.removeChild(style);

	            _setFeature();

	            // Set up listeners
	            addEvent(eventPrefix + 'resize', _watch);
	            addEvent(eventPrefix + 'orientationchange', _watch);
	        };

	    _init();

	    /*
	        A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
	    */
	    return function (media) {
	        var id  = _queryID,
	            mql = {
	                matches         : false,
	                media           : media,
	                addListener     : function addListener(listener) {
	                    _queries[id].listeners || (_queries[id].listeners = []);
	                    listener && _queries[id].listeners.push(listener);
	                },
	                removeListener  : function removeListener(listener) {
	                    var query   = _queries[id],
	                        i       = 0,
	                        il      = 0;

	                    if (!query) {
	                        return;
	                    }

	                    il = query.listeners.length;

	                    for ( ; i < il; i++) {
	                        if (query.listeners[i] === listener) {
	                            query.listeners.splice(i, 1);
	                        }
	                    }
	                }
	            };

	        if (media === '') {
	            mql.matches = true;
	            return mql;
	        }

	        mql.matches = _matches(media);

	        _queryID = _queries.push({
	            mql         : mql,
	            listeners   : null
	        });

	        return mql;
	    };
	}(window));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){if(true)module.exports=t(__webpack_require__(5));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var o=t("object"==typeof exports?require("react/addons"):e.React);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports.ClassNameMixin=o(1)},function(e,t,o){var r=o(2),s=o(3),n=o(4),a={propTypes:{className:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.object])},getDefaultProps:function(){return{className:{}}},getClassName:function(e){void 0===e&&(e={}),"string"==typeof e&&(e=s(e));var t=this.props.className;"string"==typeof t&&(t=s(t));var o={};"function"==typeof this.getComponentClassName&&(o=this.getComponentClassName(),"string"==typeof o&&(o=s(o)));var a=n(o,e);return a=n(a,t),r.addons.classSet(a)}};e.exports=a},function(t){t.exports=e},function(e){e.exports=function(e){var t={};return e.split(" ").forEach(function(e){t[e]=!0}),t}},function(e){e.exports=function(e,t){var o=JSON.parse(JSON.stringify(e));for(className in t)t.hasOwnProperty(className)&&(o[className]=t[className]);return o}}])});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){if(true)module.exports=t(__webpack_require__(5));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var n=t("object"==typeof exports?require("react/addons"):e.React);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports.Collapsible=n(3),e.exports.CollapsibleHead=n(4),e.exports.CollapsibleBody=n(5),e.exports.CollapsibleGroup=n(6)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(7)(i,{})},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,'.ddm-collapsible__body{overflow:hidden;height:0}.ddm-collapsible--opening>.ddm-collapsible__body{transition:height .3s}.ddm-collapsible--open>.ddm-collapsible__body{height:auto}.ddm-collapsible--closing>.ddm-collapsible__body{transition:height .3s}.ddm-collapsible__head{cursor:pointer;position:relative;padding-right:26px}.ddm-collapsible__arrow{position:absolute;top:0;right:0;display:block;height:100%;width:20px;text-align:center}.ddm-collapsible__arrow:before{content:"\\25b8";vertical-align:middle;display:block}.csstransforms .ddm-collapsible__arrow:before{transition:all .2s}.ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:"\\25be"}.csstransforms .ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.csstransforms .ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:"\\25b8";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.ddm-collapsible__arrow.ddm-collapsible__arrow--with-image{background:url('+n(13)+") no-repeat center center}.csstransforms .ddm-collapsible__arrow.ddm-collapsible__arrow--with-image{transition:all .2s}.ddm-collapsible__arrow.ddm-collapsible__arrow--with-image:before{display:none}.ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow.ddm-collapsible__arrow--with-image,.ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow.ddm-collapsible__arrow--with-image{background:url("+n(14)+") no-repeat center center}",""])},function(e,t,n){var i=n(8),s=n(4),o=n(5),r=n(15),l=n(11);e.exports=i.createClass({displayName:"Collapsible",propTypes:{open:i.PropTypes.bool,onOpen:i.PropTypes.func,onClose:i.PropTypes.func},getDefaultProps:function(){return{open:null,onOpen:l,onClose:l}},getInitialState:function(){return{open:this.props.open||!1,willOpen:!1,opening:!1,willClose:!1,closing:!1}},render:function(){return i.createElement("div",{className:this.getClassNames()},this.renderChildren())},getClassNames:function(){var e={"ddm-collapsible":!0,"ddm-collapsible--will-open":this.state.willOpen,"ddm-collapsible--opening":this.state.opening,"ddm-collapsible--open":this.state.open,"ddm-collapsible--will-close":this.state.willClose,"ddm-collapsible--closing":this.state.closing,"ddm-collapsible--closed":this.isClosed()};return[i.addons.classSet(e),this.props.className].join(" ")},renderChildren:function(){return i.Children.map(this.props.children,this.renderChild)},renderChild:function(e){return e.type===s.type?this.renderHead(e):e.type===o.type?this.renderBody(e):e},renderHead:function(e){return i.addons.cloneWithProps(e,{ref:"head",onClick:this.handleHeadClick})},renderBody:function(e){return i.addons.cloneWithProps(e,{ref:"body",key:"body"})},handleHeadClick:function(){setTimeout(function(){this.toggle()}.bind(this),0)},toggle:function(){this.state.open?this.close():this.isClosed()&&this.open()},open:function(){this.inTransition()||this.state.open||(this.props.onOpen(this),this.prepareOpen())},prepareOpen:function(){this.setState({willOpen:!0},function(){this.after(this.hasWillOpenClass,this.startOpen)}.bind(this))},hasWillOpenClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--will-open")},startOpen:function(){this.refs.body.addTransitionEndHandler(this.finishOpen),this.setState({willOpen:!1,opening:!0},function(){this.refs.body.setTransitionDuration(),this.after(this.hasOpeningClass,this.refs.body.setHeight),r.supported()||this.finishOpen()}.bind(this))},hasOpeningClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--opening")},finishOpen:function(){this.setState({opening:!1,open:!0},function(){this.refs.body.unsetTransitionDuration(),this.after(this.hasOpenClass,this.refs.body.unsetHeight)}.bind(this))},hasOpenClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--open")},close:function(e){return e===!1?(this.props.onClose(this),void this.forceClose()):void(this.inTransition()||this.isClosed()||(this.props.onClose(this),this.prepareClose()))},prepareClose:function(){this.refs.body.setHeight(),this.setState({open:!1,willClose:!0},this.startClose)},startClose:function(){this.refs.body.addTransitionEndHandler(this.finishClose),this.setState({willClose:!1,closing:!0},function(){this.refs.body.setTransitionDuration(),this.after(this.readyToClose,this.refs.body.unsetHeight),r.supported()||this.finishClose()})},readyToClose:function(){var e=this.hasClosingClass()&&this.refs.body.hasHeight();return e},hasClosingClass:function(){var e=this.hasClass(this.getDOMNode(),"ddm-collapsible--closing");return e},finishClose:function(){this.refs.body.unsetTransitionDuration(),this.setState({closing:!1})},forceClose:function(){this.setState({open:!1,willOpen:!1,opening:!1,willClose:!1,closing:!1})},isClosed:function(){return!(this.state.open||this.inTransition())},inTransition:function(){return this.state.willOpen||this.state.opening||this.state.willClose||this.state.closing},after:function a(e,t,n){n=void 0===n?10:n,e()?t():n>1&&setTimeout(function(){a(e,t,--n)}.bind(this),0)},hasClass:function(e,t){var n=!1;return n=e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}})},function(e,t,n){var i=n(8),s=n(10),o=n(11),r=n(12);e.exports=i.createClass({displayName:"CollapsibleHead",propTypes:{href:i.PropTypes.string,onClick:i.PropTypes.func},getDefaultProps:function(){return{href:null,onClick:o}},render:function(){return i.createElement("div",{className:this.getClasses(),onClick:this.props.onClick},this.renderChildren(),i.createElement("span",{className:this.getArrowClasses()}))},componentDidMount:function(){s()},getClasses:function(){var e={"ddm-collapsible__head":!0};return[i.addons.classSet(e),this.props.className].join(" ")},getArrowClasses:function(){var e={"ddm-collapsible__arrow":!0,"ddm-collapsible__arrow--with-image":r()};return[i.addons.classSet(e),this.props.className].join(" ")},renderChildren:function(){var e;return e=this.props.href?i.createElement("a",{href:this.props.href},this.props.children):this.props.children}})},function(e,t,n){var i=n(8),s=n(15);e.exports=i.createClass({displayName:"CollapsibleBody",propTypes:{speed:i.PropTypes.number},getDefaultProps:function(){return{speed:700}},render:function(){return i.createElement("div",{className:this.getClasses(),key:"body"},this.props.children)},getClasses:function(){var e={"ddm-collapsible__body":!0};return[i.addons.classSet(e),this.props.className].join(" ")},setHeight:function(){this.getDOMNode().style.height=this.getContentHeight()+"px"},hasHeight:function(){var e=this.getDOMNode().style.height,t=this.getContentHeight()+"px",n=e===t;return n},unsetHeight:function(){this.getDOMNode().style.height=null},getContentHeight:function(){for(var e=0,t=this.getDOMNode().children,n=t.length,i=0;n>i;i++)e+=t[i].offsetHeight;return e},addTransitionEndHandler:function(e){return s.addEndEventListener(this.getDOMNode(),e,"height")},setTransitionDuration:function(){var e=this.getContentHeight(),t=(e/this.props.speed).toFixed(2)+"s";s.setDuration(this.getDOMNode(),t)},unsetTransitionDuration:function(){s.setDuration(this.getDOMNode(),null)}})},function(e,t,n){var i=n(8),s=n(3);e.exports=i.createClass({displayName:"CollapsibleGroup",propTypes:{accordion:i.PropTypes.bool,open:i.PropTypes.bool},getDefaultProps:function(){return{accordion:!1,open:!1}},render:function(){return i.createElement("div",{className:this.getClasses()},this.renderChildren())},getClasses:function(){var e={"ddm-collapsible-group":!0};return[i.addons.classSet(e),this.props.className].join(" ")},handleCollapsibleOpen:function(e){this.props.accordion&&this.closeOtherCollapsibles(e)},close:function(){for(var e in this.refs){var t=this.refs[e],n=t.type!==s.type;n&&t.close()}},closeOtherCollapsibles:function(e){for(var t in this.refs){var n=this.refs[t],i=n.type!==s.type,o=n.props.index===e.props.index;i&&!o&&n.close()}},renderChildren:function(){return i.Children.map(this.props.children,this.renderChild)},renderChild:function(e,t){return e.type!==s.type?e:e=i.addons.cloneWithProps(e,{key:"ddmCollapsible"+t,ref:"ddmCollapsible"+t,index:t,open:null===e.props.open?this.props.open:e.props.open,onOpen:this.getOnOpenMethod(e)})},getOnOpenMethod:function(e){var t=this;return function(n){e.props.onOpen(n),t.handleCollapsibleOpen(n)}}})},function(e){function t(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=a[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(s(i.parts[r],t))}else{for(var l=[],r=0;r<i.parts.length;r++)l.push(s(i.parts[r],t));a[i.id]={id:i.id,refs:1,parts:l}}}}function n(e){for(var t=[],n={},i=0;i<e.length;i++){var s=e[i],o=s[0],r=s[1],l=s[2],a=s[3],d={css:r,media:l,sourceMap:a};n[o]?n[o].parts.push(d):t.push(n[o]={id:o,parts:[d]})}return t}function i(){var e=document.createElement("style"),t=c();return e.type="text/css",t.appendChild(e),e}function s(e,t){var n,s,o;if(t.singleton){var a=u++;n=h||(h=i()),s=r.bind(null,n,a,!1),o=r.bind(null,n,a,!0)}else n=i(),s=l.bind(null,n),o=function(){n.parentNode.removeChild(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else o()}}function o(e,t,n){var i=["/** >>"+t+" **/","/** "+t+"<< **/"],s=e.lastIndexOf(i[0]),o=n?i[0]+n+i[1]:"";if(e.lastIndexOf(i[0])>=0){var r=e.lastIndexOf(i[1])+i[1].length;return e.slice(0,s)+o+e.slice(r)}return e+o}function r(e,t,n,i){var s=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=o(e.styleSheet.cssText,t,s);else{var r=document.createTextNode(s),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function l(e,t){var n=t.css,i=t.media,s=t.sourceMap;if(s&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(s))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(o){}if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),c=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,u=0;e.exports=function(e,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=p());var s=n(e);return t(s,i),function(e){for(var o=[],r=0;r<s.length;r++){var l=s[r],d=a[l.id];d.refs--,o.push(d)}if(e){var p=n(e);t(p,i)}for(var r=0;r<o.length;r++){var d=o[r];if(0===d.refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete a[d.id]}}}}},function(t){t.exports=e},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},function(e){var t=function(){return document.querySelectorAll("html")[0]},n=function(e,t){return e.classList?e.classList.contains(t):void new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},i=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},s=function(){for(var e="transform WebkitTransform MozTransform OTransform msTransform".split(" "),t=0;t<e.length;t++)if(void 0!==document.createElement("div").style[e[t]])return e[t];return!1},o=function(){var e=t(),o="csstransforms";return n(e,o)?!0:s()!==!1?(i(e,o),!0):!1};e.exports=o},function(e){e.exports=function(){}},function(e){var t=function(){var e=!1;return navigator.userAgent.search("MSIE 8")>0?e=!0:void 0};e.exports=t},function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQjU5ODVEQzZFMUIxMUU0OENCMURGRUY2MUU0OUZDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQjU5ODVERDZFMUIxMUU0OENCMURGRUY2MUU0OUZDQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCNTk4NURBNkUxQjExRTQ4Q0IxREZFRjYxRTQ5RkNCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCNTk4NURCNkUxQjExRTQ4Q0IxREZFRjYxRTQ5RkNCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/tcEZwAAAGpJREFUeNpi8Pf3bwZiyf///zPAMBMDA0MZEK8MCAhgZYACkOAdILYF4s1ACT6Y4D+oAncgPgCUUGJiQAWGQDwNXfA6EJeyAAlGqMAhIA7asGHDW5CgChCfBpkJFPgBs2gKEAfDBEAAIMAAFewhyZ+CLHAAAAAASUVORK5CYII="},function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQjU5ODVFMDZFMUIxMUU0OENCMURGRUY2MUU0OUZDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQjU5ODVFMTZFMUIxMUU0OENCMURGRUY2MUU0OUZDQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCNTk4NURFNkUxQjExRTQ4Q0IxREZFRjYxRTQ5RkNCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCNTk4NURGNkUxQjExRTQ4Q0IxREZFRjYxRTQ5RkNCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yehEhwAAAGZJREFUeNpi8ff372FgYMgB4jtA/J8BAZiAWAWIu1iAxEQgtgNiUwZMcBiIpzFt2LDhMVTRITQFO4HYGSj/HGQkA5DxA0gFAfF1qILzQBwGFP8Ns5cBqvAtkAqHmhAC5H+CyQEEGABWCR6GchIL8QAAAABJRU5ErkJggg=="},function(e,t){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e){var t={supported:function(){return this.styleName()!==!1},styleName:function(){for(var e=["transition","WebkitTransition","MozTransition","OTransition","msTransition"],t=document.createElement("div").style,n=!1,i=0;i<e.length;i++){var s=e[i];if(s in t){n=s;break}}return n},endEventName:function(){if(!this.supported())return!1;var e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"};return"TransitionEvent"in window||delete e.transition,e[this.styleName()]},addEndEventListener:function(e,t,n,i){if(!this.supported())return!1;if(n&&(t=function(e){return function(t){t.propertyName===n&&e(t)}}(t)),i!==!1){var s=this.removeEndEventListener.bind(this);t=function(n){return function(i){n(i),s(e,t)}}(t)}return e.addEventListener(this.endEventName(),t,!1),t},removeEndEventListener:function(e,t){return this.supported()?void e.removeEventListener(this.endEventName(),t):!1},setDuration:function(e,t){return this.supported()?void(e.style[this.styleName()+"Duration"]=t):!1}};e.exports=t}])})}])});


/***/ }
/******/ ])
});
