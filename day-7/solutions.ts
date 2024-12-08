import utils from "../utils.js"

function solution1 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for(let i = 0; i < lines.length; i++) {
		let goal = parseInt(lines[i].split(':')[0]) 
		let operands = lines[i].split(':')[1].trim().split(' ').map(x => parseInt(x))

		let operations: number[] = []
		for(let j in operands) {
			operations.push(0) // 0 = +, 1 = *
		}

		let possible = true
		while(getResult(operands, operations) != goal) {
			// binary increment operations
			operations[0]++
			for(let j = 0; j < operations.length; j++) {
				if(operations[j] == 2) {
					if(j >= operations.length-1) {
						possible = false 
						break
					}
					operations[j] = 0
					operations[j+1]++
				}
			}
			if(!possible) break
			// log(operands, operations)
		}

		if(possible) {
			solution += getResult(operands, operations)
			// log(operands, operations)
		}
	}

	return solution || "Incomplete"
}

function log(operands: number[], operations: number[], goal) {
	let str = "goal: " + goal + " = "
	for(let j = 0; j < operands.length-1; j++) {
		str += operands[j] + (operations[j] == 0 ? " + " : " * ")
	}
	str += operands[operands.length-1]
	console.log(str)
}

function getResult (operands: number[], operations: number[]) {
	let result = operands[0]
	for(let j = 0; j < operands.length-1; j++) {
		if(operations[j] == 0) {
			result += operands[j+1]
		} else {
			result *= operands[j+1]
		}
	}

	return result
}

function solution2 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for(let i = 0; i < lines.length; i++) {
		let goal = parseInt(lines[i].split(':')[0]) 
		let operands = lines[i].split(':')[1].trim().split(' ').map(x => parseInt(x))

		let operations: number[] = []
		for(let j in operands) {
			operations.push(0) // 0 = +, 1 = *
		}
		operations.pop()

		let possible = true
		while(getResult2(operands, operations) != goal) {
			// binary increment operations
			operations[0]++
			for(let j = 0; j < operations.length; j++) {
				if(operations[j] == 3) {
					if(j >= operations.length-1) {
						possible = false 
						break
					}
					operations[j] = 0
					operations[j+1]++
				}
			}
			if(!possible) break
			
			// log(operands, operations, goal)
		}

		if(possible) {
			solution += getResult2(operands, operations)
			log(operands, operations, goal)
		}
	}

	return solution || "Incomplete"
}

function getResult2 (operands: number[], operations: number[]) {
	let newoperations = [...operations]
	let newoperands = [...operands]	 

	let result = newoperands[0]
	for(let j = 0; j < newoperands.length-1; j++) {
		if(newoperations[j] == 0) {
			result += newoperands[j+1]
		} else if(newoperations[j] == 1) {
			result *= newoperands[j+1]
		} else {
			let concatNum = result + newoperands[j+1].toString()
			result = parseInt(concatNum)
		}
	}
	return result
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}