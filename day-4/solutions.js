"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution1(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    // left, right
    l.og("lr");
    for (var i = 0; i < lines.length; i++) {
        solution += countInstancesOfStringInString(lines[i], "XMAS"); // normal
        solution += countInstancesOfStringInString(lines[i], "SAMX"); // reverse
    }
    // up, down
    l.og("ud");
    for (var i = 0; i < lines[0].length; i++) {
        var column = "";
        for (var j = 0; j < lines.length; j++) {
            column += lines[j][i];
        }
        solution += countInstancesOfStringInString(column, "XMAS"); // normal
        solution += countInstancesOfStringInString(column, "SAMX"); // reverse
    }
    for (var i = 0; i < lines.length - 3; i++) {
        for (var j = 0; j < lines[i].length - 3; j++) {
            var diagonal = "";
            for (var k = 0; k < 4; k++) {
                diagonal += lines[i + k][j + k];
            }
            solution += countInstancesOfStringInString(diagonal, "XMAS"); // normal
            solution += countInstancesOfStringInString(diagonal, "SAMX"); // reverse
        }
    }
    for (var i = lines.length - 1; i >= 3; i--) {
        for (var j = 0; j < lines[i].length - 3; j++) {
            var diagonal = "";
            for (var k = 0; k < 4; k++) {
                diagonal += lines[i - k][j + k];
            }
            solution += countInstancesOfStringInString(diagonal, "XMAS"); // normal
            solution += countInstancesOfStringInString(diagonal, "SAMX"); // reverse
        }
    }
    return solution || "Incomplete";
}
function countInstancesOfStringInString(string, substring) {
    var count = 0;
    var index = string.indexOf(substring);
    while (index !== -1) {
        count++;
        index = string.indexOf(substring, index + 1);
    }
    return count;
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    for (var i = 0; i < lines.length - 2; i++) {
        for (var j = 0; j < lines[i].length - 2; j++) {
            var chunk = lines[i][j] + lines[i][j + 2] + lines[i + 1][j + 1] + lines[i + 2][j] + lines[i + 2][j + 2];
            var cross1 = lines[i][j] + lines[i + 1][j + 1] + lines[i + 2][j + 2];
            var cross2 = lines[i][j + 2] + lines[i + 1][j + 1] + lines[i + 2][j];
            var ms = countInstancesOfStringInString(chunk, "M");
            var as = countInstancesOfStringInString(chunk, "A");
            var ss = countInstancesOfStringInString(chunk, "S");
            if (ms == 2 && as == 1 && ss == 2) {
                if (cross1 == "MAS" || cross1 == "SAM" && cross2 == "MAS" || cross2 == "SAM") {
                    solution++;
                }
            }
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
