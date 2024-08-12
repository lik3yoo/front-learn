"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo1_1 = require("./src/demo1");
var demo2_1 = require("./src/demo2");
var fn = function (name, age) {
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old!"));
};
fn('John', 30);
(0, demo1_1.demo1)('John');
(0, demo2_1.demo2)('John');
