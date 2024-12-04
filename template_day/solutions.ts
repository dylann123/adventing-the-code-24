import utils from "../utils.js"

function solution1 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for(let i = 0; i < lines.length; i++) {

	}

	return solution || "Incomplete"
}

function solution2 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for(let i = 0; i < lines.length; i++) {

	}

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
	static ogf = (...value: any) => console.log(...value.map((v: { toString: () => any }) => v.toString()))
}