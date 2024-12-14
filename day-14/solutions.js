"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution1(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var width = 101;
    var height = 103;
    var robots = [{ x: 0, y: 0, vx: 0, vy: 0 }];
    robots.pop();
    // l.og(lines)
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        var next = {};
        next["x"] = parseInt(line.split(",")[0].split("=")[1]);
        next["y"] = parseInt(line.split(",")[1].split(" v")[0]);
        next["vx"] = parseInt(line.split("v=")[1].split(",")[0]);
        next["vy"] = parseInt(line.split("v=")[1].split(",")[1]);
        robots.push(next);
    }
    var seconds = 1000;
    // l.og("Initial", robots)
    // printLegible(robots, width, height)
    for (var i = 0; i < seconds; i++) {
        // console.log("Second", i+1)
        for (var j = 0; j < robots.length; j++) {
            robots[j]["x"] += robots[j]["vx"];
            robots[j]["y"] += robots[j]["vy"];
            while (robots[j]["x"] < 0)
                robots[j]["x"] = width + robots[j]["x"];
            while (robots[j]["y"] < 0)
                robots[j]["y"] = height + robots[j]["y"];
            while (robots[j]["x"] >= width)
                robots[j]["x"] = robots[j]["x"] - width;
            while (robots[j]["y"] >= height)
                robots[j]["y"] = robots[j]["y"] - height;
        }
        // console.log(getLegible(robots, width, height))
    }
    var amounts = [0, 0, 0, 0, 0];
    for (var i = 0; i < robots.length; i++) {
        amounts[getCoordinateQuadrant(robots[i]["x"], robots[i]["y"], width, height)]++;
    }
    solution = amounts[1] * amounts[2] * amounts[3] * amounts[4];
    return solution || "Incomplete";
}
function getLegible(robots, width, height) {
    var testprint = [];
    for (var i = 0; i < height; i++) {
        testprint.push([]);
        for (var j = 0; j < width; j++) {
            testprint[i].push(".");
        }
    }
    for (var i = 0; i < robots.length; i++) {
        var x = robots[i]["x"];
        var y = robots[i]["y"];
        if (testprint[y][x] == ".")
            testprint[y][x] = "1";
        else {
            var current = parseInt(testprint[y][x]);
            testprint[y][x] = (current + 1).toString();
        }
    }
    var stroutput = "";
    for (var i = 0; i < height; i++) {
        stroutput += testprint[i].join("") + "\n";
    }
    return stroutput;
}
function getCoordinateQuadrant(x, y, planewidth, planeheight) {
    var halfhorizontal = Math.floor(planeheight / 2);
    var halfvertical = Math.floor(planewidth / 2);
    if (y > halfhorizontal && x > halfvertical)
        return 1;
    if (y > halfhorizontal && x < halfvertical)
        return 2;
    if (y < halfhorizontal && x < halfvertical)
        return 3;
    if (y < halfhorizontal && x > halfvertical)
        return 4;
    return 0;
}
function solution2(input) {
    if (input === void 0) { input = ""; }
    var fixed = input.trim().replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;
    var width = 101;
    var height = 103;
    var robots = [{ x: 0, y: 0, vx: 0, vy: 0 }];
    robots.pop();
    // l.og(lines)
    for (var i_1 = 0; i_1 < lines.length; i_1++) {
        var line = lines[i_1].trim();
        var next = {};
        next["x"] = parseInt(line.split(",")[0].split("=")[1]);
        next["y"] = parseInt(line.split(",")[1].split(" v")[0]);
        next["vx"] = parseInt(line.split("v=")[1].split(",")[0]);
        next["vy"] = parseInt(line.split("v=")[1].split(",")[1]);
        robots.push(next);
    }
    var i = 0;
    // l.og("Initial", robots)
    // printLegible(robots, width, height)
    while (!hasAnyOverlap(robots)) {
        // console.log("Second", i+1)
        for (var j = 0; j < robots.length; j++) {
            robots[j]["x"] += robots[j]["vx"];
            robots[j]["y"] += robots[j]["vy"];
            while (robots[j]["x"] < 0)
                robots[j]["x"] = width + robots[j]["x"];
            while (robots[j]["y"] < 0)
                robots[j]["y"] = height + robots[j]["y"];
            while (robots[j]["x"] >= width)
                robots[j]["x"] = robots[j]["x"] - width;
            while (robots[j]["y"] >= height)
                robots[j]["y"] = robots[j]["y"] - height;
        }
        i++;
    }
    solution = i;
    console.log(getLegible(robots, width, height));
    return solution || "Incomplete";
}
function hasAnyOverlap(robots) {
    return getLegible(robots, 101, 103).indexOf("1111111") != -1;
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
