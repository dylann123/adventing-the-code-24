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
    var WIDTH = lines[0].length;
    var HEIGHT = lines.length;
    var positions = {
        "_": [
            { x: 0, y: 0 },
        ]
    };
    var antinodes = {
        "-1,-1": true
    };
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            var char = lines[i][j];
            if (char != ".") {
                if (!positions[char])
                    positions[char] = [];
                positions[char].push({ x: j, y: i });
            }
        }
    }
    var linescopy = __spreadArray([], lines, true);
    for (var frequency in positions) {
        for (var antenna = 0; antenna < positions[frequency].length; antenna++) {
            for (var otherantenna = antenna + 1; otherantenna < positions[frequency].length; otherantenna++) {
                var rise = positions[frequency][antenna].y - positions[frequency][otherantenna].y;
                var run = positions[frequency][antenna].x - positions[frequency][otherantenna].x;
                var nextPoint1 = { x: positions[frequency][antenna].x + run, y: positions[frequency][antenna].y + rise };
                if (nextPoint1.x >= 0 && nextPoint1.x < WIDTH && nextPoint1.y >= 0 && nextPoint1.y < HEIGHT) {
                    // l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint1)
                    if (!antinodes["".concat(nextPoint1.x, ",").concat(nextPoint1.y)]) {
                        solution += 1;
                        antinodes["".concat(nextPoint1.x, ",").concat(nextPoint1.y)] = true;
                        // l.og("found antinode", nextPoint1)
                        // linescopy[nextPoint1.y] = linescopy[nextPoint1.y].substring(0, nextPoint1.x) + "#" + linescopy[nextPoint1.y].substring(nextPoint1.x+1)
                    }
                }
                var nextPoint2 = { x: positions[frequency][otherantenna].x - run, y: positions[frequency][otherantenna].y - rise };
                if (nextPoint2.x >= 0 && nextPoint2.x < WIDTH && nextPoint2.y >= 0 && nextPoint2.y < HEIGHT) {
                    // l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint2)
                    if (!antinodes["".concat(nextPoint2.x, ",").concat(nextPoint2.y)]) {
                        solution += 1;
                        antinodes["".concat(nextPoint2.x, ",").concat(nextPoint2.y)] = true;
                        // l.og("found antinode", nextPoint2)
                        // linescopy[nextPoint2.y] = linescopy[nextPoint2.y].substring(0, nextPoint2.x) + "#" + linescopy[nextPoint2.y].substring(nextPoint2.x+1)
                    }
                }
            }
        }
    }
    // l.og(linescopy)
    return solution || "Incomplete";
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var WIDTH = lines[0].length;
    var HEIGHT = lines.length;
    var positions = {
        "_": [
            { x: 0, y: 0 },
        ]
    };
    var antinodes = {
        "-1,-1": true
    };
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            var char = lines[i][j];
            if (char != ".") {
                if (!positions[char])
                    positions[char] = [];
                positions[char].push({ x: j, y: i });
            }
        }
    }
    var linescopy = __spreadArray([], lines, true);
    for (var frequency in positions) {
        for (var antenna = 0; antenna < positions[frequency].length; antenna++) {
            for (var otherantenna = antenna + 1; otherantenna < positions[frequency].length; otherantenna++) {
                var rise = positions[frequency][antenna].y - positions[frequency][otherantenna].y;
                var run = positions[frequency][antenna].x - positions[frequency][otherantenna].x;
                var nextPoint1 = { x: positions[frequency][otherantenna].x + run, y: positions[frequency][otherantenna].y + rise };
                while (nextPoint1.x >= 0 && nextPoint1.x < WIDTH && nextPoint1.y >= 0 && nextPoint1.y < HEIGHT) {
                    l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint1);
                    if (!antinodes["".concat(nextPoint1.x, ",").concat(nextPoint1.y)]) {
                        solution += 1;
                        antinodes["".concat(nextPoint1.x, ",").concat(nextPoint1.y)] = true;
                        l.og("found antinode", nextPoint1);
                        linescopy[nextPoint1.y] = linescopy[nextPoint1.y].substring(0, nextPoint1.x) + "#" + linescopy[nextPoint1.y].substring(nextPoint1.x + 1);
                    }
                    nextPoint1 = { x: nextPoint1.x + run, y: nextPoint1.y + rise };
                }
                var nextPoint2 = { x: positions[frequency][antenna].x - run, y: positions[frequency][antenna].y - rise };
                while (nextPoint2.x >= 0 && nextPoint2.x < WIDTH && nextPoint2.y >= 0 && nextPoint2.y < HEIGHT) {
                    l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint2);
                    if (!antinodes["".concat(nextPoint2.x, ",").concat(nextPoint2.y)]) {
                        solution += 1;
                        antinodes["".concat(nextPoint2.x, ",").concat(nextPoint2.y)] = true;
                        l.og("found antinode", nextPoint2);
                        linescopy[nextPoint2.y] = linescopy[nextPoint2.y].substring(0, nextPoint2.x) + "#" + linescopy[nextPoint2.y].substring(nextPoint2.x + 1);
                    }
                    nextPoint2 = { x: nextPoint2.x - run, y: nextPoint2.y - rise };
                }
            }
        }
    }
    l.og(linescopy);
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
