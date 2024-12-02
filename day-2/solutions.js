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
    var sols = 0;
    for (var i = 0; i < lines.length; i++) {
        var list = lines[i].split(' ');
        var listint = list.map(function (x) { return parseInt(x); });
        var valid = true;
        var type = (listint[0] - listint[1] > 0) ? 1 : -1;
        for (var j = 0; j < listint.length - 1; j++) {
            var first = listint[j];
            var next = listint[j + 1];
            if (Math.abs(first - next) > 3 || type * (first - next) < 0 || first === next) {
                valid = false;
                break;
            }
        }
        if (valid)
            sols++;
    }
    return sols || "Incomplete";
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var sols = 0;
    for (var i = 0; i < lines.length; i++) {
        var list = lines[i].split(' ');
        var listint = list.map(function (x) { return parseInt(x); });
        var valid = true;
        var type = (listint[0] - listint[1] > 0) ? 1 : -1;
        console.log(listint);
        for (var z = 0; z < listint.length; z++) {
            valid = true;
            var listintnew = __spreadArray([], listint, true);
            listintnew.splice(z, 1);
            for (var j = 0; j < listintnew.length; j++) {
                var first = listintnew[j];
                var next = listintnew[j + 1];
                if (Math.abs(first - next) > 3 || type * (first - next) < 0 || first === next) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                sols++;
                console.log(listintnew, "valid");
                break;
            }
            else {
                console.log(listintnew, "invalid");
            }
        }
    }
    return sols || "Incomplete";
}
exports.default = { solution1: solution1, solution2: solution2 };
