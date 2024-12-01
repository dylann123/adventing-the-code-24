exports.getSolution = function (input = "") {
    const fixed = input.replace("\r", "")
    const lines = fixed.split('\n')
    let solution

    let totaldist = 0
    let left = []
    let right = []
    for (let i = 0; i < lines.length; i++) {
        left.push(lines[i].trim().split("   ")[0])
        right.push(lines[i].trim().split("   ")[1])
    }

    left.sort(function (a, b) {
        return a - b
    })

    right.sort(function (a, b) {
        return a - b
    })

    for (let i = 0; i < left.length; i++) {
        totaldist += Math.abs(left[i] - right[i])
    }

    solution = totaldist

    return solution || "Incomplete"
}