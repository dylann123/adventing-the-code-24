import utils from "../utils.js"

function solution1(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0
	let startpos = [-1, -1]
	let direction = 0 // 0 = up, 1 = right, 2 = down, 3 = left

	for (let i = 0; i < lines.length; i++) {
		if (lines[i].indexOf("^") > -1) {
			startpos = [i, lines[i].indexOf("^")]
			break
		}
	}

	let pos = [...startpos]
	let visited: object = {}

	while (true) {
		visited[pos.toString()] = true

		let next = [...pos]
		switch (direction) {
			case 0:
				next[0] -= 1
				break
			case 1:
				next[1] += 1
				break
			case 2:
				next[0] += 1
				break
			case 3:
				next[1] -= 1
				break
		}



		if (next[0] < 0 || next[1] < 0 || next[0] >= lines.length || next[1] >= lines[0].length) {
			break
		}

		if (lines[next[0]][next[1]] === "#") {
			direction = (direction + 1) % 4
			// l.og("turn to", direction)
		} else {
			// l.og("move from", pos, "to", next, "with dir", direction)
			pos = next
		}
	}

	for (let i in visited) {
		solution++
	}

	return solution || "Incomplete"
}
function solution2(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0
	let startpos = [-1, -1]
	let direction = 0 // 0 = up, 1 = right, 2 = down, 3 = left

	for (let i = 0; i < lines.length; i++) {
		lines[i] = lines[i].replace("\r", "")
		if (lines[i].indexOf("^") > -1) {
			startpos = [i, lines[i].indexOf("^")]
		}
	}

	let pos = [...startpos]
	let visited: object = {}
	const iterations = lines.length * lines[0].length
	let visitcount = 0
	for (let row = 0; row < lines.length; row++) {
		console.log(lines[0].length * row, "/", iterations)
		for (let col = 0; col < lines[row].length; col++) {
			// console.log(lines[0].length * row + col, "/", iterations)
			let newlines = [...lines]

			newlines[row] = newlines[row].substring(0, col) + "#" + newlines[row].substring(col + 1)
			visitcount = 0

			let count = 0

			// l.og("\nwall at", row, col)
			while (true) {
				if(count > 100000){
					solution++ // imgoated
					break
				}
				if (!visited[pos.toString()] || visited[pos.toString()] != direction) visitcount = 0
				if(visited[pos.toString()] && visited[pos.toString()] == direction) visitcount++
				if (visitcount > 1) {
					solution++
					// console.log("Infinite loop pattern")
					// for (let i in newlines) {
					// 	l.og(newlines[i])
					// }
					break
				}

				visited[pos.toString()] = direction

				let next = [...pos]

				switch (direction) {
					case 0:
						next[0] -= 1
						break
					case 1:
						next[1] += 1
						break
					case 2:
						next[0] += 1
						break
					case 3:
						next[1] -= 1
						break
				}

				if (next[0] < 0 || next[1] < 0 || next[0] >= newlines.length || next[1] >= newlines[0].length) {
					// console.log("No infinite loop pattern; exit at row", pos[0], "col", pos[1], "\n")
					break
				}

				if (newlines[next[0]][next[1]] === "#") {
					direction = (direction + 1) % 4
				} else {
					
					// let prev = [...pos]
					pos = next
					count++
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

			visited = {}
			pos = [...startpos]
			direction = 0
		}
	}

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}