/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(48);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(31)('wks')
	  , uid    = __webpack_require__(33)
	  , Symbol = __webpack_require__(3).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(54);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 7 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(28)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(8)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(1).setDesc
	  , has = __webpack_require__(18)
	  , TAG = __webpack_require__(2)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(66)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(108);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _path = __webpack_require__(24);

	var _path2 = _interopRequireDefault(_path);

	var _development = __webpack_require__(38);

	var _development2 = _interopRequireDefault(_development);

	var _qa = __webpack_require__(40);

	var _qa2 = _interopRequireDefault(_qa);

	var _production = __webpack_require__(39);

	var _production2 = _interopRequireDefault(_production);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaults = {
	    root: _path2.default.resolve(__dirname, "..", ".."),
	    sessionSecret: ["shhh", "this is a secret"],
	    smtpUser: "yoongeemin@gmail.com",
	    smtpPassword: "jywzaiwblxbqfvug"
	};

	var config = void 0;
	switch (process.env.NODE_ENV) {
	    case "development":
	        config = _development2.default;
	        break;
	    case "qa":
	        config = _qa2.default;
	        break;
	    case "production":
	        config = _production2.default;
	        break;
	    default:
	        break;
	}

		exports.default = _lodash2.default.extend(defaults, config);
	/* WEBPACK VAR INJECTION */}.call(exports, "server/config"))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(6);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _co = __webpack_require__(36);

	var _co2 = _interopRequireDefault(_co);

	var _crypt = __webpack_require__(25);

	var _crypt2 = _interopRequireDefault(_crypt);

	var _mongoose = __webpack_require__(23);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _main = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SALT_ROUNDS = 5;

	var UserSchema = new _mongoose2.default.Schema({
	    active: {
	        type: Boolean,
	        default: false
	    },
	    email: {
	        type: String,
	        required: true,
	        unique: true,
	        lowercase: true
	    },
	    mobile: {
	        type: Number,
	        required: false
	    },
	    password: {
	        type: String,
	        required: true
	    },
	    token: String,
	    tokenExpiration: Date,
	    profile: {
	        firstName: {
	            type: String,
	            required: true,
	            lowercase: true
	        },
	        lastName: {
	            type: String,
	            required: true,
	            lowercase: true
	        },
	        accounts: [_main.AccountSchema],
	        preference: {}
	    }
	});

	// Hash user password
	UserSchema.pre("save", function (done) {
	    var user = this;

	    // Only hash the password if it has been added or modified
	    if (!user.isModified("password")) {
	        done();
	    }

	    (0, _co2.default)(_regenerator2.default.mark(function _callee() {
	        var salt, hash;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.prev = 0;
	                        _context.next = 3;
	                        return _crypt2.default.genSalt(SALT_ROUNDS);

	                    case 3:
	                        salt = _context.sent;
	                        _context.next = 6;
	                        return _crypt2.default.hash(user.password, salt);

	                    case 6:
	                        hash = _context.sent;

	                        user.password = hash;
	                        done();
	                        _context.next = 14;
	                        break;

	                    case 11:
	                        _context.prev = 11;
	                        _context.t0 = _context["catch"](0);

	                        done(_context.t0);

	                    case 14:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this, [[0, 11]]);
	    })).then(done);
	});

	UserSchema.methods = {
	    authenticate: _regenerator2.default.mark(function authenticate(password) {
	        return _regenerator2.default.wrap(function authenticate$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _context2.next = 2;
	                        return _crypt2.default.compare(password, this.password);

	                    case 2:
	                        return _context2.abrupt("return", _context2.sent);

	                    case 3:
	                    case "end":
	                        return _context2.stop();
	                }
	            }
	        }, authenticate, this);
	    })
	};

		exports.default = _mongoose2.default.model("User", UserSchema);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(1)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.genSalt = genSalt;
	exports.hash = hash;
	exports.compare = compare;
	exports.randomBytes = randomBytes;

	var _bcryptNodejs = __webpack_require__(90);

	var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

	var _crypto = __webpack_require__(92);

	var _crypto2 = _interopRequireDefault(_crypto);

	var _bluebird = __webpack_require__(35);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function genSalt(rounds) {
	    return new _bluebird2.default(function (resolve, reject) {
	        _bcryptNodejs2.default.genSalt(rounds, function (err, salt) {
	            if (err) return reject(err);
	            return resolve(salt);
	        });
	    });
	}

	function hash(value, salt) {
	    return new _bluebird2.default(function (resolve, reject) {
	        _bcryptNodejs2.default.hash(value, salt, function (err, hasedValue) {
	            if (err) return reject(err);
	            return resolve(hasedValue);
	        });
	    });
	}

	function compare(value, hasedValue) {
	    return new _bluebird2.default(function (resolve, reject) {
	        _bcryptNodejs2.default.compare(value, hasedValue, function (err, match) {
	            if (err) return reject(err);
	            return resolve(match);
	        });
	    });
	}

	function randomBytes(size) {
	    return new _bluebird2.default(function (resolve, reject) {
	        _crypto2.default.randomBytes(size, function (err, buff) {
	            if (err) return reject(err);
	            var token = buff.toString("hex");
	            return resolve(token);
	        });
	    });
		}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(7)
	  , TAG = __webpack_require__(2)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(20)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(18)
	  , Iterators      = __webpack_require__(9)
	  , $iterCreate    = __webpack_require__(70)
	  , setToStringTag = __webpack_require__(13)
	  , getProto       = __webpack_require__(1).getProto
	  , ITERATOR       = __webpack_require__(2)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(1).getDesc
	  , isObject = __webpack_require__(12)
	  , anObject = __webpack_require__(5);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(8)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("bluebird");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("co");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    domain: "localhost:8000",
	    db: "mongodb://localhost/fiscus",
	    viewCache: false,
	    facebook: {
	        clientID: process.env.FACEBOOK_CLIENTID,
	        clientSecret: process.env.FACEBOOK_SECRET,
	        callbackURL: "http://localhost:3000/auth/facebook/callback"
	    },
	    twitter: {
	        clientID: process.env.TWITTER_CLIENTID,
	        clientSecret: process.env.TWITTER_SECRET,
	        callbackURL: "http://localhost:3000/auth/twitter/callback"
	    },
	    github: {
	        clientID: process.env.GITHUB_CLIENTID,
	        clientSecret: process.env.GITHUB_SECRET,
	        callbackURL: "http://localhost:3000/auth/github/callback"
	    },
	    linkedin: {
	        clientID: process.env.LINKEDIN_CLIENTID,
	        clientSecret: process.env.LINKEDIN_SECRET,
	        callbackURL: "http://localhost:3000/auth/linkedin/callback"
	    },
	    google: {
	        clientID: process.env.GOOGLE_CLIENTID,
	        clientSecret: process.env.GOOGLE_SECRET,
	        callbackURL: "http://localhost:3000/auth/google/callback"
	    }
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    domain: "localhost:8000",
	    db: "mongodb://localhost/noobjs_dev",
	    viewCache: true,
	    facebook: {
	        clientID: process.env.FACEBOOK_CLIENTID,
	        clientSecret: process.env.FACEBOOK_SECRET,
	        callbackURL: "http://localhost:3000/auth/facebook/callback"
	    },
	    twitter: {
	        clientID: process.env.TWITTER_CLIENTID,
	        clientSecret: process.env.TWITTER_SECRET,
	        callbackURL: "http://localhost:3000/auth/twitter/callback"
	    },
	    github: {
	        clientID: process.env.GITHUB_CLIENTID,
	        clientSecret: process.env.GITHUB_SECRET,
	        callbackURL: "http://localhost:3000/auth/github/callback"
	    },
	    linkedin: {
	        clientID: process.env.LINKEDIN_CLIENTID,
	        clientSecret: process.env.LINKEDIN_SECRET,
	        callbackURL: "http://localhost:3000/auth/linkedin/callback"
	    },
	    google: {
	        clientID: process.env.GOOGLE_CLIENTID,
	        clientSecret: process.env.GOOGLE_SECRET,
	        callbackURL: "http://localhost:3000/auth/google/callback"
	    }
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    domain: "localhost:8000",
	    db: "mongodb://localhost/noobjs_dev",
	    viewCache: true,
	    facebook: {
	        clientID: process.env.FACEBOOK_CLIENTID,
	        clientSecret: process.env.FACEBOOK_SECRET,
	        callbackURL: "http://localhost:3000/auth/facebook/callback"
	    },
	    twitter: {
	        clientID: process.env.TWITTER_CLIENTID,
	        clientSecret: process.env.TWITTER_SECRET,
	        callbackURL: "http://localhost:3000/auth/twitter/callback"
	    },
	    github: {
	        clientID: process.env.GITHUB_CLIENTID,
	        clientSecret: process.env.GITHUB_SECRET,
	        callbackURL: "http://localhost:3000/auth/github/callback"
	    },
	    linkedin: {
	        clientID: process.env.LINKEDIN_CLIENTID,
	        clientSecret: process.env.LINKEDIN_SECRET,
	        callbackURL: "http://localhost:3000/auth/linkedin/callback"
	    },
	    google: {
	        clientID: process.env.GOOGLE_CLIENTID,
	        clientSecret: process.env.GOOGLE_SECRET,
	        callbackURL: "http://localhost:3000/auth/google/callback"
	    }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(6);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	exports.default = function (app, passport) {
	    if (process.env.NODE_ENV === "development") {
	        app.use((0, _koaLogger2.default)());
	    }

	    app.use((0, _koaResponseTime2.default)());
	    app.use((0, _koaCompress2.default)());
	    app.use((0, _koaBodyparser2.default)());
	    app.use((0, _koaCsrf2.default)());
	    app.use((0, _koaCors2.default)());

	    app.use((0, _koaFavicon2.default)(_path2.default.resolve(_config2.default.root, "public/img/favicon.png")));
	    app.use((0, _koaStatic2.default)(_path2.default.resolve(_config2.default.root, "public")));
	    app.use(_regenerator2.default.mark(function _callee(next) {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        this.render = (0, _coViews2.default)(_path2.default.resolve(__dirname, "..", "views"), {
	                            map: { hjs: "hogan" },
	                            cache: _config2.default.viewCache
	                        });
	                        _context.next = 3;
	                        return next;

	                    case 3:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));

	    app.proxy = true;
	    app.keys = _config2.default.sessionSecret;
	    app.use((0, _koaGenericSession2.default)({
	        cookie: {
	            httpOnly: true,
	            signed: true
	        },
	        store: new _koaGenericSessionMongo2.default({
	            url: _config2.default.db
	        })
	    }));

	    app.use(passport.initialize());
	    app.use(passport.session());

	    // Configure hot reloading
	    if (process.env.NODE_ENV === "development") {
	        var webpackConfig = __webpack_require__(49);
	        var devMiddleware = __webpack_require__(106);
	        var hotMiddleware = __webpack_require__(107);
	        var compiler = __webpack_require__(37)(webpackConfig);

	        app.use(devMiddleware(compiler, {
	            publicPath: webpackConfig.output.publicPath,
	            noInfo: true,
	            watchOptions: {
	                aggregateTimeout: 2000
	            }
	        }));

	        app.use(hotMiddleware(compiler, {
	            path: "/__webpack_hmr",
	            noInfo: true,
	            reload: true,
	            heartbeat: 10 * 1000,
	            timeout: 20000
	        }));
	    }
	};

	var _path = __webpack_require__(24);

	var _path2 = _interopRequireDefault(_path);

	var _koaLogger = __webpack_require__(101);

	var _koaLogger2 = _interopRequireDefault(_koaLogger);

	var _koaResponseTime = __webpack_require__(103);

	var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

	var _koaBodyparser = __webpack_require__(94);

	var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

	var _koaCompress = __webpack_require__(95);

	var _koaCompress2 = _interopRequireDefault(_koaCompress);

	var _koaStatic = __webpack_require__(105);

	var _koaStatic2 = _interopRequireDefault(_koaStatic);

	var _koaGenericSession = __webpack_require__(99);

	var _koaGenericSession2 = _interopRequireDefault(_koaGenericSession);

	var _koaGenericSessionMongo = __webpack_require__(100);

	var _koaGenericSessionMongo2 = _interopRequireDefault(_koaGenericSessionMongo);

	var _koaFavicon = __webpack_require__(98);

	var _koaFavicon2 = _interopRequireDefault(_koaFavicon);

	var _koaCsrf = __webpack_require__(97);

	var _koaCsrf2 = _interopRequireDefault(_koaCsrf);

	var _koaCors = __webpack_require__(96);

	var _koaCors2 = _interopRequireDefault(_koaCors);

	var _coViews = __webpack_require__(91);

	var _coViews2 = _interopRequireDefault(_coViews);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, "server/config"))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (app, passport) {
	    passport.serializeUser(function (user, done) {
	        done(null, user.id);
	    });

	    passport.deserializeUser(function (id, done) {
	        _user2.default.findById(id, function (err, user) {
	            done(err, user);
	        });
	    });

	    passport.use(_local2.default);
	};

	var _local = __webpack_require__(43);

	var _local2 = _interopRequireDefault(_local);

	var _user = __webpack_require__(16);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(6);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _passportLocal = __webpack_require__(111);

	var _user = __webpack_require__(16);

	var _user2 = _interopRequireDefault(_user);

	var _co = __webpack_require__(36);

	var _co2 = _interopRequireDefault(_co);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [authenticateUser].map(_regenerator2.default.mark);

	function authenticateUser(user, password, done) {
	    var match;
	    return _regenerator2.default.wrap(function authenticateUser$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    return _context.delegateYield(user.authenticate(password), "t0", 1);

	                case 1:
	                    match = _context.t0;

	                    if (match) done(null, user);else done(null, false, { message: "Invalid user or password" });

	                case 3:
	                case "end":
	                    return _context.stop();
	            }
	        }
	    }, _marked[0], this);
	}

	function signIn(signin, password, done) {
	    (0, _co2.default)(_regenerator2.default.mark(function _callee() {
	        var userByEmail, userByMobile;
	        return _regenerator2.default.wrap(function _callee$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _context2.prev = 0;
	                        _context2.next = 3;
	                        return _user2.default.findOne({ email: signin }).exec();

	                    case 3:
	                        userByEmail = _context2.sent;

	                        if (!userByEmail) {
	                            _context2.next = 6;
	                            break;
	                        }

	                        return _context2.delegateYield(authenticateUser(userByEmail, password, done), "t0", 6);

	                    case 6:
	                        _context2.next = 8;
	                        return _user2.default.findOne({ mobile: signin }).exec();

	                    case 8:
	                        userByMobile = _context2.sent;

	                        if (!userByMobile) {
	                            _context2.next = 11;
	                            break;
	                        }

	                        return _context2.delegateYield(authenticateUser(userByMobile, password, done), "t1", 11);

	                    case 11:
	                        done(null, false, { message: "Invalid user or password" });
	                        _context2.next = 17;
	                        break;

	                    case 14:
	                        _context2.prev = 14;
	                        _context2.t2 = _context2["catch"](0);
	                        done(_context2.t2);
	                    case 17:
	                    case "end":
	                        return _context2.stop();
	                }
	            }
	        }, _callee, this, [[0, 14]]);
	    }));
	}

		exports.default = new _passportLocal.Strategy({ usernameField: "signin" }, signIn);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(6);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	exports.default = function (app) {
	    var router = new _koaRouter2.default();

	    // Local authentication
	    router.post(API_PREFIX + "/signin", authenticationControllers.signIn);
	    router.get(API_PREFIX + "/signout", authenticationControllers.signOut);
	    //router.get(`${API_PREFIX}/activate/:uid/:token`, authenticationControllers.activate);
	    router.post(API_PREFIX + "/signUp", authenticationControllers.signUp);

	    router.get("*", _regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return this.render("app.hjs", {});

	                    case 2:
	                        this.body = _context.sent;

	                    case 3:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));

	    app.use(router.routes());
	    app.use(router.allowedMethods());
	};

	var _koaRouter = __webpack_require__(104);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	var _authentication = __webpack_require__(45);

	var authenticationControllers = _interopRequireWildcard(_authentication);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var API_PREFIX = "/api";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(6);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	exports.signIn = signIn;
	exports.signOut = signOut;
	exports.signUp = signUp;

	var _koaPassport = __webpack_require__(102);

	var _koaPassport2 = _interopRequireDefault(_koaPassport);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _user = __webpack_require__(16);

	var _user2 = _interopRequireDefault(_user);

	var _crypt = __webpack_require__(25);

	var _crypt2 = _interopRequireDefault(_crypt);

	var _mailer = __webpack_require__(46);

	var _mailer2 = _interopRequireDefault(_mailer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [signIn, signOut, signUp].map(_regenerator2.default.mark);

	var TOKEN_SIZE = 256;

	function signIn() {
	    var self;
	    return _regenerator2.default.wrap(function signIn$(_context2) {
	        while (1) {
	            switch (_context2.prev = _context2.next) {
	                case 0:
	                    self = this;
	                    return _context2.delegateYield(_koaPassport2.default.authenticate("local", _regenerator2.default.mark(function _callee(err, user) {
	                        return _regenerator2.default.wrap(function _callee$(_context) {
	                            while (1) {
	                                switch (_context.prev = _context.next) {
	                                    case 0:
	                                        if (!err) {
	                                            _context.next = 4;
	                                            break;
	                                        }

	                                        throw err;

	                                    case 4:
	                                        if (user) {
	                                            _context.next = 8;
	                                            break;
	                                        }

	                                        this.redirect("/signin");
	                                        _context.next = 11;
	                                        break;

	                                    case 8:
	                                        _context.next = 10;
	                                        return self.login(user);

	                                    case 10:
	                                        self.body = { profile: user.profile };

	                                    case 11:
	                                    case "end":
	                                        return _context.stop();
	                                }
	                            }
	                        }, _callee, this);
	                    })), "t0", 2);

	                case 2:
	                case "end":
	                    return _context2.stop();
	            }
	        }
	    }, _marked[0], this);
	}

	function signOut() {
	    return _regenerator2.default.wrap(function signOut$(_context3) {
	        while (1) {
	            switch (_context3.prev = _context3.next) {
	                case 0:
	                    this.logout();
	                    this.session = null;

	                case 2:
	                case "end":
	                    return _context3.stop();
	            }
	        }
	    }, _marked[1], this);
	}

	function signUp() {
	    var userByEmail, userByMobile, token, user, context, SUBJECT, HTML;
	    return _regenerator2.default.wrap(function signUp$(_context4) {
	        while (1) {
	            switch (_context4.prev = _context4.next) {
	                case 0:
	                    _context4.next = 2;
	                    return _user2.default.findOne({ email: this.request.body.email }).exec();

	                case 2:
	                    userByEmail = _context4.sent;

	                    if (!userByEmail) {
	                        _context4.next = 7;
	                        break;
	                    }

	                    this.throw("Email already exists");
	                    _context4.next = 36;
	                    break;

	                case 7:
	                    _context4.next = 9;
	                    return _user2.default.findOne({ email: this.request.body.mobile }).exec();

	                case 9:
	                    userByMobile = _context4.sent;

	                    if (!userByMobile) {
	                        _context4.next = 14;
	                        break;
	                    }

	                    this.throw("Phone number already exists");
	                    _context4.next = 36;
	                    break;

	                case 14:
	                    _context4.prev = 14;
	                    _context4.next = 17;
	                    return _crypt2.default.randomBytes(TOKEN_SIZE);

	                case 17:
	                    token = _context4.sent;
	                    user = new _user2.default({
	                        firstName: this.request.body.firstName,
	                        lastName: this.request.body.lastName,
	                        email: this.request.body.email,
	                        mobile: this.request.body.mobile,
	                        password: this.request.body.password
	                    });


	                    user.token = token;
	                    user.tokenExpiration = Date.now() + 3600000; // 1 hour;

	                    _context4.next = 23;
	                    return user.save();

	                case 23:
	                    user = _context4.sent;
	                    context = {
	                        protocol: this.request.protocol,
	                        domain: _config2.default.domain,
	                        uid: this.request.user,
	                        token: token
	                    };
	                    SUBJECT = "Activate Your Fiscus Account";
	                    _context4.next = 28;
	                    return this.render("activate.email", context);

	                case 28:
	                    HTML = _context4.sent;
	                    _context4.next = 31;
	                    return _mailer2.default.sendEmail(_config2.default.smtpUser, _config2.default.smtpPassword, user.email, SUBJECT, HTML);

	                case 31:
	                    _context4.next = 36;
	                    break;

	                case 33:
	                    _context4.prev = 33;
	                    _context4.t0 = _context4["catch"](14);

	                    this.throw("Error while signing up user");

	                case 36:
	                case "end":
	                    return _context4.stop();
	            }
	        }
	    }, _marked[2], this, [[14, 33]]);
	}

	//export function* activate() {
	//    const token = this.params.token;
	//
	//    // Find user by email
	//    User.findOne({
	//        id: req.params.uid,
	//        token,
	//        tokenExpiration: { $gt: Date.now() },
	//    }, (err, user, done) => {
	//        if (!user) {
	//            req.flash("error", "Activation token is invalid or has expired");
	//        }
	//        else {
	//            user.active = true;
	//            user.save(err => {
	//                done(err, token, user);
	//            });
	//            res.redirect("/");
	//        }
	//    });
	//}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendEmail = sendEmail;

	var _nodemailer = __webpack_require__(109);

	var _nodemailer2 = _interopRequireDefault(_nodemailer);

	var _bluebird = __webpack_require__(35);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sendEmail(user, password, to, subject, html) {
	    return new _bluebird2.default(function (resolve, reject) {
	        var smtpTransport = _nodemailer2.default.createTransport("SMTP", {
	            service: "Gmail",
	            auth: {
	                user: user,
	                password: password
	            }
	        });

	        smtpTransport.sendMail({
	            from: user,
	            to: to,
	            subject: subject,
	            html: html
	        }, function (err, info) {
	            if (err) {
	                return reject(err);
	            }
	            return resolve(info.response);
	        });
	    });
		}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SynonymCategory = exports.RootCategory = exports.Transaction = exports.Account = exports.AccountSchema = undefined;

	var _mongoose = __webpack_require__(23);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AccountSchema = new _mongoose2.default.Schema({
	    id: _mongoose2.default.Schema.Types.ObjectId,
	    name: _mongoose2.default.Schema.Types.String,
	    balance: _mongoose2.default.Schema.Types.Number
	});

	var TransactionSchema = new _mongoose2.default.Schema({
	    accountId: _mongoose2.default.Schema.Types.ObjectId,
	    name: _mongoose2.default.Schema.Types.String,
	    amount: _mongoose2.default.Schema.Types.Number,
	    income: _mongoose2.default.Schema.Types.Boolean,
	    categories: [{
	        type: _mongoose2.default.Schema.Types.ObjectId,
	        ref: "RootCategory"
	    }],
	    datetime: _mongoose2.default.Schema.Types.Date,
	    balance: _mongoose2.default.Schema.Types.Number
	});

	var RootCategorySchema = new _mongoose2.default.Schema({
	    name: _mongoose2.default.Schema.Types.String,
	    children: [{
	        type: _mongoose2.default.Schema.Types.ObjectId,
	        ref: "RootCategory"
	    }]
	});

	var SynonymCategorySchema = new _mongoose2.default.Schema({
	    name: _mongoose2.default.Schema.Types.String,
	    root: {
	        type: _mongoose2.default.Schema.Types,
	        ref: "RootCategory"
	    }
	});

	exports.AccountSchema = AccountSchema;
	var Account = exports.Account = _mongoose2.default.model("Account", AccountSchema);
	var Transaction = exports.Transaction = _mongoose2.default.model("Transaction", TransactionSchema);
	var RootCategory = exports.RootCategory = _mongoose2.default.model("RootCategory", RootCategorySchema);
	var SynonymCategory = exports.SynonymCategory = _mongoose2.default.model("SynonymCategory", SynonymCategorySchema);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _koa = __webpack_require__(93);

	var _koa2 = _interopRequireDefault(_koa);

	var _mongoose = __webpack_require__(23);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _passport = __webpack_require__(110);

	var _passport2 = _interopRequireDefault(_passport);

	var _passport3 = __webpack_require__(42);

	var _passport4 = _interopRequireDefault(_passport3);

	var _koa3 = __webpack_require__(41);

	var _koa4 = _interopRequireDefault(_koa3);

	var _routes = __webpack_require__(44);

	var _routes2 = _interopRequireDefault(_routes);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _koa2.default)();
	(0, _passport4.default)(app, _passport2.default);
	(0, _koa4.default)(app, _passport2.default);
	(0, _routes2.default)(app);

	function listen() {
	    app.listen(process.env.PORT);
	    console.log("Server starting on port: " + process.env.PORT);
	}

	function connect() {
	    _mongoose2.default.connect(_config2.default.db);
	    return _mongoose2.default.connection;
	}

		connect().on("error", console.error).on("open", listen);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";

	var path = __webpack_require__(24);
	var webpack = __webpack_require__(37);
	var Configurator = __webpack_require__(112);

	module.exports = new Configurator().extend(path.resolve(__dirname, "app.base")).extend(path.resolve(__dirname, "..", "dev")).merge({
	    // Add webpack hot reloading
	    entry: ["webpack-hot-middleware/client", "webpack/hot/dev-server"],

	    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()],

	    eslint: {
	        configFile: path.resolve(__dirname, "..", "..", ".eslintrc.react")
	    }
		});
	/* WEBPACK VAR INJECTION */}.call(exports, "webpack/app"))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(53)["default"];

	var _Object$create = __webpack_require__(50)["default"];

	var _Object$setPrototypeOf = __webpack_require__(51)["default"];

	var _Promise = __webpack_require__(52)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(86);
	module.exports = __webpack_require__(4).Promise;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	__webpack_require__(34);
	module.exports = __webpack_require__(4).Symbol;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , document = __webpack_require__(3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(1);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(8)
	  , call        = __webpack_require__(69)
	  , isArrayIter = __webpack_require__(67)
	  , anObject    = __webpack_require__(5)
	  , toLength    = __webpack_require__(82)
	  , getIterFn   = __webpack_require__(83);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(14)
	  , getNames  = __webpack_require__(1).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3).document && document.documentElement;

/***/ },
/* 65 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(7);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(9)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(7);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(5);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(1)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(13)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(1)
	  , toIObject = __webpack_require__(14);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , macrotask = __webpack_require__(81).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(7)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(22);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(4)
	  , $           = __webpack_require__(1)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(2)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(5)
	  , aFunction = __webpack_require__(17)
	  , SPECIES   = __webpack_require__(2)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(8)
	  , invoke             = __webpack_require__(65)
	  , html               = __webpack_require__(64)
	  , cel                = __webpack_require__(60)
	  , global             = __webpack_require__(3)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(7)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(26)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(59)
	  , step             = __webpack_require__(72)
	  , Iterators        = __webpack_require__(9)
	  , toIObject        = __webpack_require__(14);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(30).set});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(1)
	  , LIBRARY    = __webpack_require__(20)
	  , global     = __webpack_require__(3)
	  , ctx        = __webpack_require__(8)
	  , classof    = __webpack_require__(26)
	  , $export    = __webpack_require__(11)
	  , isObject   = __webpack_require__(12)
	  , anObject   = __webpack_require__(5)
	  , aFunction  = __webpack_require__(17)
	  , strictNew  = __webpack_require__(79)
	  , forOf      = __webpack_require__(62)
	  , setProto   = __webpack_require__(30).set
	  , same       = __webpack_require__(76)
	  , SPECIES    = __webpack_require__(2)('species')
	  , speciesConstructor = __webpack_require__(78)
	  , asap       = __webpack_require__(74)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(75)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(13)(P, PROMISE);
	__webpack_require__(77)(PROMISE);
	Wrapper = __webpack_require__(4)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(80)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(1)
	  , global         = __webpack_require__(3)
	  , has            = __webpack_require__(18)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(22)
	  , $fails         = __webpack_require__(28)
	  , shared         = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(13)
	  , uid            = __webpack_require__(33)
	  , wks            = __webpack_require__(2)
	  , keyOf          = __webpack_require__(73)
	  , $names         = __webpack_require__(63)
	  , enumKeys       = __webpack_require__(61)
	  , isArray        = __webpack_require__(68)
	  , anObject       = __webpack_require__(5)
	  , toIObject      = __webpack_require__(14)
	  , createDesc     = __webpack_require__(21)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(20)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	var Iterators = __webpack_require__(9);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("bcrypt-nodejs");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("co-views");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("koa-bodyparser");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("koa-compress");

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("koa-cors");

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = require("koa-csrf");

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = require("koa-favicon");

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = require("koa-generic-session");

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("koa-generic-session-mongo");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("koa-logger");

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("koa-passport");

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = require("koa-response-time");

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = require("koa-router");

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = require("koa-webpack-dev-middleware");

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = require("koa-webpack-hot-middleware");

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = require("nodemailer");

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = require("webpack-config");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map