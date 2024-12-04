function solution1 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	// left, right
	l.og("lr")
	for(let i = 0; i < lines.length; i++) { 
		solution += countInstancesOfStringInString(lines[i], "XMAS")// normal
		solution += countInstancesOfStringInString(lines[i], "SAMX")// reverse
	}

	// up, down
	l.og("ud")
	for(let i = 0; i < lines[0].length; i++) {
		let column = ""
		for(let j = 0; j < lines.length; j++) {
			column += lines[j][i]
		}
		solution += countInstancesOfStringInString(column, "XMAS")// normal
		solution += countInstancesOfStringInString(column, "SAMX")// reverse
	}

	for(let i = 0; i < lines.length - 3; i++) {
		for(let j = 0; j < lines[i].length - 3; j++) {
			let diagonal = ""
			for(let k = 0; k < 4; k++) {
				diagonal += lines[i + k][j + k]
			}
			solution += countInstancesOfStringInString(diagonal, "XMAS")// normal
			solution += countInstancesOfStringInString(diagonal, "SAMX")// reverse
		}
	}

	for(let i = lines.length - 1; i >= 3; i--) {
		for(let j = 0; j < lines[i].length - 3; j++) {
			let diagonal = ""
			for(let k = 0; k < 4; k++) {
				diagonal += lines[i - k][j + k]
			}
			solution += countInstancesOfStringInString(diagonal, "XMAS")// normal
			solution += countInstancesOfStringInString(diagonal, "SAMX")// reverse
		}
	}



	return solution || "Incomplete"
}

function countInstancesOfStringInString (string: string, substring: string) {
	let count = 0
	let index = string.indexOf(substring)
	while (index !== -1) {
		count++
		index = string.indexOf(substring, index + 1)
	}
	return count
}

function solution2 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	for(let i = 0; i < lines.length-2; i++) {
		for(let j = 0; j < lines[i].length - 2; j++) {
			let chunk = lines[i][j] + lines[i][j+2] + lines[i+1][j+1] + lines[i+2][j] + lines[i+2][j+2]
			let cross1 = lines[i][j] + lines[i+1][j+1] + lines[i+2][j+2]
			let cross2 = lines[i][j+2] + lines[i+1][j+1] + lines[i+2][j]
			let ms = countInstancesOfStringInString(chunk, "M")
			let as = countInstancesOfStringInString(chunk, "A")
			let ss = countInstancesOfStringInString(chunk, "S")
			if(ms == 2 && as == 1 && ss == 2) {
				if(cross1 == "MAS" || cross1 == "SAM" && cross2 == "MAS" || cross2 == "SAM") {
					solution++
				}
			}
		}
	}

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}