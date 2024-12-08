import utils from "../utils.js"

function solution1 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	const WIDTH = lines[0].length
	const HEIGHT = lines.length
	const positions = {
		"_": [
			{ x: 0, y: 0},
		]
	}
	const antinodes = {
		"-1,-1": true
	}

	for(let i = 0; i < lines.length; i++) {
		for(let j = 0; j < lines[i].length; j++) {
			const char = lines[i][j]
			if(char != "."){
				if(!positions[char]) positions[char] = []
				positions[char].push({ x: j, y: i})
			}
		}
	}

	const linescopy = [...lines]
	for(let frequency in positions){
		for(let antenna = 0; antenna < positions[frequency].length; antenna++){
			for(let otherantenna = antenna+1; otherantenna < positions[frequency].length; otherantenna++){
				const rise = positions[frequency][antenna].y - positions[frequency][otherantenna].y
				const run = positions[frequency][antenna].x - positions[frequency][otherantenna].x

				const nextPoint1 = { x: positions[frequency][antenna].x + run, y: positions[frequency][antenna].y + rise }

				if(nextPoint1.x >= 0 && nextPoint1.x < WIDTH && nextPoint1.y >= 0 && nextPoint1.y < HEIGHT){
					// l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint1)
					if(!antinodes[`${nextPoint1.x},${nextPoint1.y}`]){
						solution += 1
						antinodes[`${nextPoint1.x},${nextPoint1.y}`] = true
						// l.og("found antinode", nextPoint1)
					    // linescopy[nextPoint1.y] = linescopy[nextPoint1.y].substring(0, nextPoint1.x) + "#" + linescopy[nextPoint1.y].substring(nextPoint1.x+1)
					}
				}

				const nextPoint2 = { x: positions[frequency][otherantenna].x - run, y: positions[frequency][otherantenna].y - rise }

				if(nextPoint2.x >= 0 && nextPoint2.x < WIDTH && nextPoint2.y >= 0 && nextPoint2.y < HEIGHT){
					// l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint2)
					if(!antinodes[`${nextPoint2.x},${nextPoint2.y}`]){
						solution += 1
						antinodes[`${nextPoint2.x},${nextPoint2.y}`] = true
						// l.og("found antinode", nextPoint2)
						// linescopy[nextPoint2.y] = linescopy[nextPoint2.y].substring(0, nextPoint2.x) + "#" + linescopy[nextPoint2.y].substring(nextPoint2.x+1)
					}
				}


			}
		}
	}

	// l.og(linescopy)

	return solution || "Incomplete"
}

function solution2 (input = "") {
	const fixed: string = input.trim().replace("\r","")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	const WIDTH = lines[0].length
	const HEIGHT = lines.length
	const positions = {
		"_": [
			{ x: 0, y: 0},
		]
	}
	const antinodes = {
		"-1,-1": true
	}

	for(let i = 0; i < lines.length; i++) {
		for(let j = 0; j < lines[i].length; j++) {
			const char = lines[i][j]
			if(char != "."){
				if(!positions[char]) positions[char] = []
				positions[char].push({ x: j, y: i})
			}
		}
	}

	const linescopy = [...lines]
	for(let frequency in positions){
		for(let antenna = 0; antenna < positions[frequency].length; antenna++){
			for(let otherantenna = antenna+1; otherantenna < positions[frequency].length; otherantenna++){
				const rise = positions[frequency][antenna].y - positions[frequency][otherantenna].y
				const run = positions[frequency][antenna].x - positions[frequency][otherantenna].x

				let nextPoint1 = { x: positions[frequency][otherantenna].x + run, y: positions[frequency][otherantenna].y + rise }

				while(nextPoint1.x >= 0 && nextPoint1.x < WIDTH && nextPoint1.y >= 0 && nextPoint1.y < HEIGHT){
					l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint1)
					if(!antinodes[`${nextPoint1.x},${nextPoint1.y}`]){
						solution += 1
						antinodes[`${nextPoint1.x},${nextPoint1.y}`] = true
						l.og("found antinode", nextPoint1)
					    linescopy[nextPoint1.y] = linescopy[nextPoint1.y].substring(0, nextPoint1.x) + "#" + linescopy[nextPoint1.y].substring(nextPoint1.x+1)
					}
					nextPoint1 = { x: nextPoint1.x + run, y: nextPoint1.y + rise }
				}

				let nextPoint2 = { x: positions[frequency][antenna].x - run, y: positions[frequency][antenna].y - rise }

				while(nextPoint2.x >= 0 && nextPoint2.x < WIDTH && nextPoint2.y >= 0 && nextPoint2.y < HEIGHT){
					l.og(positions[frequency][antenna], positions[frequency][otherantenna], nextPoint2)
					if(!antinodes[`${nextPoint2.x},${nextPoint2.y}`]){
						solution += 1
						antinodes[`${nextPoint2.x},${nextPoint2.y}`] = true
						l.og("found antinode", nextPoint2)
						linescopy[nextPoint2.y] = linescopy[nextPoint2.y].substring(0, nextPoint2.x) + "#" + linescopy[nextPoint2.y].substring(nextPoint2.x+1)
					}
					nextPoint2 = { x: nextPoint2.x - run, y: nextPoint2.y - rise }
				}


			}
		}
	}

	l.og(linescopy)

	return solution || "Incomplete"
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}