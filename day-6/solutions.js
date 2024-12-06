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
    var startpos = [-1, -1];
    var direction = 0; // 0 = up, 1 = right, 2 = down, 3 = left
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("^") > -1) {
            startpos = [i, lines[i].indexOf("^")];
            break;
        }
    }
    var pos = __spreadArray([], startpos, true);
    var visited = {};
    while (true) {
        visited[pos.toString()] = true;
        var next = __spreadArray([], pos, true);
        switch (direction) {
            case 0:
                next[0] -= 1;
                break;
            case 1:
                next[1] += 1;
                break;
            case 2:
                next[0] += 1;
                break;
            case 3:
                next[1] -= 1;
                break;
        }
        if (next[0] < 0 || next[1] < 0 || next[0] >= lines.length || next[1] >= lines[0].length) {
            break;
        }
        if (lines[next[0]][next[1]] === "#") {
            direction = (direction + 1) % 4;
            // l.og("turn to", direction)
        }
        else {
            // l.og("move from", pos, "to", next, "with dir", direction)
            pos = next;
        }
    }
    for (var i in visited) {
        solution++;
    }
    return solution || "Incomplete";
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var startpos = [-1, -1];
    var direction = 0; // 0 = up, 1 = right, 2 = down, 3 = left
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace("\r", "");
        if (lines[i].indexOf("^") > -1) {
            startpos = [i, lines[i].indexOf("^")];
        }
    }
    var pos = __spreadArray([], startpos, true);
    var visited = {};
    var iterations = lines.length * lines[0].length;
    var visitcount = 0;
    for (var row = 0; row < lines.length; row++) {
        console.log(lines[0].length * row, "/", iterations);
        for (var col = 0; col < lines[row].length; col++) {
            // console.log(lines[0].length * row + col, "/", iterations)
            var newlines = __spreadArray([], lines, true);
            newlines[row] = newlines[row].substring(0, col) + "#" + newlines[row].substring(col + 1);
            visitcount = 0;
            var count = 0;
            // l.og("\nwall at", row, col)
            while (true) {
                if (count > 100000) {
                    solution++; // imgoated
                    break;
                }
                if (!visited[pos.toString()] || visited[pos.toString()] != direction)
                    visitcount = 0;
                if (visited[pos.toString()] && visited[pos.toString()] == direction)
                    visitcount++;
                if (visitcount > 1) {
                    solution++;
                    // console.log("Infinite loop pattern")
                    // for (let i in newlines) {
                    // 	l.og(newlines[i])
                    // }
                    break;
                }
                visited[pos.toString()] = direction;
                var next = __spreadArray([], pos, true);
                switch (direction) {
                    case 0:
                        next[0] -= 1;
                        break;
                    case 1:
                        next[1] += 1;
                        break;
                    case 2:
                        next[0] += 1;
                        break;
                    case 3:
                        next[1] -= 1;
                        break;
                }
                if (next[0] < 0 || next[1] < 0 || next[0] >= newlines.length || next[1] >= newlines[0].length) {
                    // console.log("No infinite loop pattern; exit at row", pos[0], "col", pos[1], "\n")
                    break;
                }
                if (newlines[next[0]][next[1]] === "#") {
                    direction = (direction + 1) % 4;
                }
                else {
                    // let prev = [...pos]
                    pos = next;
                    count++;
                    // let symbol = ""
                    // switch (direction) {
                    // 	case 0:
                    // 		symbol = "^"
                    // 		break
                    // 	case 1:
                    // 		symbol = ">"
                    // 		break
                    // 	case 2:
                    // 		symbol = "v"
                    // 		break
                    // 	case 3:
                    // 		symbol = "<"
                    // 		break
                    // }
                    // newlines[prev[0]] = newlines[prev[0]].substring(0, prev[1])
                    // 	+ symbol
                    // 	+ newlines[prev[0]].substring(prev[1] + 1)
                    // console.log(newlines)
                }
            }
            visited = {};
            pos = __spreadArray([], startpos, true);
            direction = 0;
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
    return l;
}());
