import utils from "../utils.js"
let validIndexs: object = {}

function solution1(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	let before = { 1: [1] }
	let after = { 1: [1] }

	// parse ordering rules
	let nextset = 0
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].indexOf("|") == -1 && lines[i].indexOf(",") == -1) {
			nextset = i + 1
			break
		}
		let beforeNum = parseInt(lines[i].split("|")[0])
		let afterNum = parseInt(lines[i].split("|")[1])

		if (before[afterNum] === undefined) before[afterNum] = []
		if (after[beforeNum] === undefined) after[beforeNum] = []

		before[afterNum].push(beforeNum)
		after[beforeNum].push(afterNum)
	}

	// check each update row
	for (let i = nextset; i < lines.length; i++) {
		let arraynums = lines[i].split(",").map(x => parseInt(x))
		let valid = true
		for (let check = 0; check < arraynums.length; check++) {
			let checkBefores: number[] = before[arraynums[check]]
			let checkAfters: number[] = after[arraynums[check]]
			if (checkAfters != undefined) {
				for (let j = 0; j < check; j++) {
					if (checkAfters.filter(x => x === arraynums[j]).length > 0) {
						// l.og(arraynums[j], "is after", arraynums[check], "which has afters of", checkAfters)
						valid = false
						break
					}
				}
			}
			if (!valid) break
			if (checkBefores != undefined) {
				for (let j = check + 1; j < arraynums.length; j++) {
					if (checkBefores.filter(x => x === arraynums[j]).length > 0) {
						valid = false
						break
					}
				}
			}
		}
		if (valid) {
			validIndexs[i] = true
			solution += arraynums[Math.floor(arraynums.length / 2)]
		}
	}

	return solution || "Incomplete"
}

function solution2(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	let before = { 1: [1] }
	let after = { 1: [1] }

	// parse ordering rules
	let nextset = 0
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].indexOf("|") == -1 && lines[i].indexOf(",") == -1) {
			nextset = i + 1
			break
		}
		let beforeNum = parseInt(lines[i].split("|")[0])
		let afterNum = parseInt(lines[i].split("|")[1])

		if (before[afterNum] === undefined) before[afterNum] = []
		if (after[beforeNum] === undefined) after[beforeNum] = []

		before[afterNum].push(beforeNum)
		after[beforeNum].push(afterNum)
	}


	console.log("before", before, "\nafter", after)
	// check all invalids
	for (let i = nextset; i < lines.length; i++) {
		if (validIndexs[i] === true) continue
		let arraynums = lines[i].split(",").map(x => parseInt(x))
		for (let check = 0; check < arraynums.length; check++) {
			// console.log(checkAfters)
			if (after[arraynums[check]] != undefined) {
				for (let j = 0; j < check; j++) {
					if (after[arraynums[check]].filter(x => x === arraynums[j]).length > 0) {
						// l.og("in", arraynums, arraynums[j], "is before", arraynums[check], "which has afters of", after[arraynums[check]])
						const temp = arraynums[j]
						arraynums[j] = arraynums[check]
						arraynums[check] = temp
						// j = 0
					}
				}
			}
			if (before[arraynums[check]] != undefined) {
				// console.log("before", before[arraynums[check]])
				for (let j = check + 1; j < arraynums.length; j++) {
					if (before[arraynums[check]] != undefined) continue
					if (before[arraynums[check]].filter(x => x === arraynums[j]).length > 0) {
						// l.og("in", arraynums, arraynums[j], "is after", arraynums[check], "which has befores of", before[arraynums[check]])
						const temp = arraynums[j]
						arraynums[j] = arraynums[check]
						arraynums[check] = temp
						j = check + 1
					}
				}
			}
		}
		solution += arraynums[Math.floor(arraynums.length / 2)]
	}

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}