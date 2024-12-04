import utils from "../utils.js"

function solution1(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for (let i = 0; i < lines.length; i++) {
		let mulsplit = lines[i].split("mul(")
		for (let op = 0; op < mulsplit.length; op++) {
			let optest = mulsplit[op].split(")")
			let nums = getValid(optest[0])
			if (nums[0] !== -1) {
				solution += nums[0] * nums[1]
			}
		}
	}

	return solution || "Incomplete"
}

function getValid(line: string): number[] {
	let num1 = 0
	let num2 = 0
	let index = 0
	let currentNumber = ""
	while (index < line.length) {
		let char = line[index]
		if (parseInt(char) || char === "0") {
			currentNumber += char
		} else if (char === ",") {
			if (num1 === 0) {
				num1 = parseInt(currentNumber)
			} else {
				num2 = parseInt(currentNumber)
			}
			currentNumber = ""
		} else {
			return [-1, -1]
		}
		index++
	}

	if (num1 === 0) {
		return [-1, -1]
	}
	if (num2 === 0) {
		num2 = parseInt(currentNumber)
		if (num2 === 0) {
			return [-1, -1]
		}
	}

	return [num1, num2]
}

function solution2(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	let on = true
	for (let i = 0; i < lines.length; i++) {
		let fixmult = lines[i]
		let mulsplit = fixmult.split("mul(")
		for (let op = 0; op < mulsplit.length; op++) {
			if (on) {
				let optest = mulsplit[op].split(")")
				let nums = getValid(optest[0])
				if (nums[0] !== -1) {
					solution += nums[0] * nums[1]
				}
			}

			if (mulsplit[op].lastIndexOf("do()") > mulsplit[op].lastIndexOf("don't()") && mulsplit[op].lastIndexOf("do()") > -1) 
				on = true
			if (mulsplit[op].lastIndexOf("don't()") > mulsplit[op].lastIndexOf("do()") && mulsplit[op].lastIndexOf("don't()") > -1) 
				on = false
		}
	}

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
	static ogs = (...value: any) => console.log(...value.map((v: { toString: () => any }) => v.toString()))
}