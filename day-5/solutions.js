"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validIndexs = {};
function solution1(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var before = { 1: [1] };
    var after = { 1: [1] };
    // parse ordering rules
    var nextset = 0;
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("|") == -1 && lines[i].indexOf(",") == -1) {
            nextset = i + 1;
            break;
        }
        var beforeNum = parseInt(lines[i].split("|")[0]);
        var afterNum = parseInt(lines[i].split("|")[1]);
        if (before[afterNum] === undefined)
            before[afterNum] = [];
        if (after[beforeNum] === undefined)
            after[beforeNum] = [];
        before[afterNum].push(beforeNum);
        after[beforeNum].push(afterNum);
    }
    var _loop_1 = function (i) {
        var arraynums = lines[i].split(",").map(function (x) { return parseInt(x); });
        var valid = true;
        for (var check = 0; check < arraynums.length; check++) {
            var checkBefores = before[arraynums[check]];
            var checkAfters = after[arraynums[check]];
            if (checkAfters != undefined) {
                var _loop_2 = function (j) {
                    if (checkAfters.filter(function (x) { return x === arraynums[j]; }).length > 0) {
                        // l.og(arraynums[j], "is after", arraynums[check], "which has afters of", checkAfters)
                        valid = false;
                        return "break";
                    }
                };
                for (var j = 0; j < check; j++) {
                    var state_1 = _loop_2(j);
                    if (state_1 === "break")
                        break;
                }
            }
            if (!valid)
                break;
            if (checkBefores != undefined) {
                var _loop_3 = function (j) {
                    if (checkBefores.filter(function (x) { return x === arraynums[j]; }).length > 0) {
                        valid = false;
                        return "break";
                    }
                };
                for (var j = check + 1; j < arraynums.length; j++) {
                    var state_2 = _loop_3(j);
                    if (state_2 === "break")
                        break;
                }
            }
        }
        if (valid) {
            validIndexs[i] = true;
            solution += arraynums[Math.floor(arraynums.length / 2)];
        }
    };
    // check each update row
    for (var i = nextset; i < lines.length; i++) {
        _loop_1(i);
    }
    return solution || "Incomplete";
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var before = { 1: [1] };
    var after = { 1: [1] };
    // parse ordering rules
    var nextset = 0;
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("|") == -1 && lines[i].indexOf(",") == -1) {
            nextset = i + 1;
            break;
        }
        var beforeNum = parseInt(lines[i].split("|")[0]);
        var afterNum = parseInt(lines[i].split("|")[1]);
        if (before[afterNum] === undefined)
            before[afterNum] = [];
        if (after[beforeNum] === undefined)
            after[beforeNum] = [];
        before[afterNum].push(beforeNum);
        after[beforeNum].push(afterNum);
    }
    console.log("before", before, "\nafter", after);
    var _loop_4 = function (i) {
        if (validIndexs[i] === true)
            return "continue";
        var arraynums = lines[i].split(",").map(function (x) { return parseInt(x); });
        for (var check = 0; check < arraynums.length; check++) {
            // console.log(checkAfters)
            if (after[arraynums[check]] != undefined) {
                var _loop_5 = function (j) {
                    if (after[arraynums[check]].filter(function (x) { return x === arraynums[j]; }).length > 0) {
                        // l.og("in", arraynums, arraynums[j], "is before", arraynums[check], "which has afters of", after[arraynums[check]])
                        var temp = arraynums[j];
                        arraynums[j] = arraynums[check];
                        arraynums[check] = temp;
                        // j = 0
                    }
                };
                for (var j = 0; j < check; j++) {
                    _loop_5(j);
                }
            }
            if (before[arraynums[check]] != undefined) {
                var _loop_6 = function (j) {
                    if (before[arraynums[check]] != undefined)
                        return out_j_1 = j, "continue";
                    if (before[arraynums[check]].filter(function (x) { return x === arraynums[j]; }).length > 0) {
                        // console.log(checkBefores, before[arraynums[check]])
                        // l.og("in", arraynums, arraynums[j], "is after", arraynums[check], "which has befores of", before[arraynums[check]])
                        var temp = arraynums[j];
                        arraynums[j] = arraynums[check];
                        arraynums[check] = temp;
                        j = check + 1;
                    }
                    out_j_1 = j;
                };
                var out_j_1;
                // console.log("before", before[arraynums[check]])
                for (var j = check + 1; j < arraynums.length; j++) {
                    _loop_6(j);
                    j = out_j_1;
                }
            }
        }
        solution += arraynums[Math.floor(arraynums.length / 2)];
    };
    // check all invalids
    for (var i = nextset; i < lines.length; i++) {
        _loop_4(i);
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
    return l;
}());
