(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");
var _module2 = require("./module2");
var _module3 = _interopRequireDefault(require("./module3"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _module.foo)();
(0, _module.bar)();
(0, _module2.fun1)();
(0, _module3.default)();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;
exports.foo = foo;
function foo() {
  console.log('module1 foo');
}
function bar() {
  console.log('module1 bar');
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fun1 = fun1;
function fun1() {
  console.log('module2 fun1');
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = () => {
  console.log('module3 默认暴露');
};
exports.default = _default;
},{}]},{},[1]);
