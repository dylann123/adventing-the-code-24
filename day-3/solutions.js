"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution1(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    for (var i = 0; i < lines.length; i++) {
        var mulsplit = lines[i].split("mul(");
        for (var op = 0; op < mulsplit.length; op++) {
            var optest = mulsplit[op].split(")");
            var nums = getValid(optest[0]);
            if (nums[0] !== -1) {
                solution += nums[0] * nums[1];
            }
        }
    }
    return solution || "Incomplete";
}
function getValid(line) {
    var num1 = 0;
    var num2 = 0;
    var index = 0;
    var currentNumber = "";
    while (index < line.length) {
        var char = line[index];
        if (parseInt(char) || char === "0") {
            currentNumber += char;
        }
        else if (char === ",") {
            if (num1 === 0) {
                num1 = parseInt(currentNumber);
            }
            else {
                num2 = parseInt(currentNumber);
            }
            currentNumber = "";
        }
        else {
            return [-1, -1];
        }
        index++;
    }
    if (num1 === 0) {
        return [-1, -1];
    }
    if (num2 === 0) {
        num2 = parseInt(currentNumber);
        if (num2 === 0) {
            return [-1, -1];
        }
    }
    return [num1, num2];
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var on = true;
    for (var i = 0; i < lines.length; i++) {
        var fixmult = lines[i];
        var mulsplit = fixmult.split("mul(");
        for (var op = 0; op < mulsplit.length; op++) {
            if (on) {
                var optest = mulsplit[op].split(")");
                var nums = getValid(optest[0]);
                if (nums[0] !== -1) {
                    solution += nums[0] * nums[1];
                }
            }
            if (mulsplit[op].lastIndexOf("do()") > mulsplit[op].lastIndexOf("don't()") && mulsplit[op].lastIndexOf("do()") > -1)
                on = true;
            if (mulsplit[op].lastIndexOf("don't()") > mulsplit[op].lastIndexOf("do()") && mulsplit[op].lastIndexOf("don't()") > -1)
                on = false;
        }
    }
    return solution || "Incomplete";
}
exports.default = { solution1: solution1, solution2: solution2 };
var l = /** @class */ (function () {
    function l() {
    }
    l.og = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        return console.log.apply(console, value);
    };
    l.ogs = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        return console.log.apply(console, value.map(function (v) { return v.toString(); }));
    };
    return l;
}());
