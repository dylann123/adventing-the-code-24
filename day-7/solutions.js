"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function solution1(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    for (var i = 0; i < lines.length; i++) {
        var goal = parseInt(lines[i].split(':')[0]);
        var operands = lines[i].split(':')[1].trim().split(' ').map(function (x) { return parseInt(x); });
        var operations = [];
        for (var j in operands) {
            operations.push(0); // 0 = +, 1 = *
        }
        var possible = true;
        while (getResult(operands, operations) != goal) {
            // binary increment operations
            operations[0]++;
            for (var j = 0; j < operations.length; j++) {
                if (operations[j] == 2) {
                    if (j >= operations.length - 1) {
                        possible = false;
                        break;
                    }
                    operations[j] = 0;
                    operations[j + 1]++;
                }
            }
            if (!possible)
                break;
            // log(operands, operations)
        }
        if (possible) {
            solution += getResult(operands, operations);
            // log(operands, operations)
        }
    }
    return solution || "Incomplete";
}
function log(operands, operations, goal) {
    var str = "goal: " + goal + " = ";
    for (var j = 0; j < operands.length - 1; j++) {
        str += operands[j] + (operations[j] == 0 ? " + " : " * ");
    }
    str += operands[operands.length - 1];
    console.log(str);
}
function getResult(operands, operations) {
    var result = operands[0];
    for (var j = 0; j < operands.length - 1; j++) {
        if (operations[j] == 0) {
            result += operands[j + 1];
        }
        else {
            result *= operands[j + 1];
        }
    }
    return result;
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    for (var i = 0; i < lines.length; i++) {
        var goal = parseInt(lines[i].split(':')[0]);
        var operands = lines[i].split(':')[1].trim().split(' ').map(function (x) { return parseInt(x); });
        var operations = [];
        for (var j in operands) {
            operations.push(0); // 0 = +, 1 = *
        }
        operations.pop();
        var possible = true;
        while (getResult2(operands, operations) != goal) {
            // binary increment operations
            operations[0]++;
            for (var j = 0; j < operations.length; j++) {
                if (operations[j] == 3) {
                    if (j >= operations.length - 1) {
                        possible = false;
                        break;
                    }
                    operations[j] = 0;
                    operations[j + 1]++;
                }
            }
            if (!possible)
                break;
            // log(operands, operations, goal)
        }
        if (possible) {
            solution += getResult2(operands, operations);
            log(operands, operations, goal);
        }
    }
    return solution || "Incomplete";
}
function getResult2(operands, operations) {
    var newoperations = __spreadArray([], operations, true);
    var newoperands = __spreadArray([], operands, true);
    var result = newoperands[0];
    for (var j = 0; j < newoperands.length - 1; j++) {
        if (newoperations[j] == 0) {
            result += newoperands[j + 1];
        }
        else if (newoperations[j] == 1) {
            result *= newoperands[j + 1];
        }
        else {
            var concatNum = result + newoperands[j + 1].toString();
            result = parseInt(concatNum);
        }
    }
    return result;
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
    return l;
}());
