exports.getSolution = function (input) {
    if (input === void 0) { input = ""; }
    var fixed = input.replace("\r", "");
    var lines = fixed.split('\n');
    var solution = 0;

    let left = new Map()
    let right = new Map()
    for (let i = 0; i < lines.length; i++) {
        left.set(lines[i].trim().split("   ")[0], 0)
        if(right.has(lines[i].trim().split("   ")[1])){
            right.set(lines[i].trim().split("   ")[1], right.get(lines[i].trim().split("   ")[1]) + 1)
        }else{
            right.set(lines[i].trim().split("   ")[1], 1)
        }
    }

    for (leftkey of left.keys()) {
        if(right.has(leftkey)){
            solution += leftkey * right.get(leftkey)
        }
    }

    return solution || "Incomplete";
};
