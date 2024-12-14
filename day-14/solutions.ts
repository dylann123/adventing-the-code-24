function solution1(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	let width = 101
	let height = 103

	let robots: object[] = [{ x: 0, y: 0, vx: 0, vy: 0 }]
	robots.pop()

	// l.og(lines)
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].trim()
		let next = {}

		next["x"] = parseInt(line.split(",")[0].split("=")[1])
		next["y"] = parseInt(line.split(",")[1].split(" v")[0])
		next["vx"] = parseInt(line.split("v=")[1].split(",")[0])
		next["vy"] = parseInt(line.split("v=")[1].split(",")[1])

		robots.push(next)
	}
 
	let seconds = 1000
 
	// l.og("Initial", robots)
	// printLegible(robots, width, height)
	for (let i = 0; i < seconds; i++){
		// console.log("Second", i+1)
		for (let j = 0; j < robots.length; j++){
			robots[j]["x"] += robots[j]["vx"]
			robots[j]["y"] += robots[j]["vy"]
			while (robots[j]["x"] < 0)
				robots[j]["x"] = width + robots[j]["x"]
			while (robots[j]["y"] < 0)
				robots[j]["y"] = height + robots[j]["y"]
			while (robots[j]["x"] >= width)
				robots[j]["x"] = robots[j]["x"] - width
			while (robots[j]["y"] >= height)
				robots[j]["y"] = robots[j]["y"] - height
		}
		// console.log(getLegible(robots, width, height))
	} 

	let amounts = [0,0,0,0,0]

	for (let i = 0; i < robots.length; i++){
		amounts[getCoordinateQuadrant(robots[i]["x"], robots[i]["y"], width, height)]++
	}

	solution = amounts[1] * amounts[2] * amounts[3] * amounts[4]

	return solution || "Incomplete"
}

function getLegible(robots: object[], width: number, height: number){
	let testprint: any = []
	for(let i = 0; i < height; i++){
		testprint.push([])
		for(let j = 0; j < width; j++){
			testprint[i].push(".")
		}
	}

	for (let i = 0; i < robots.length; i++){
		let x = robots[i]["x"]
		let y = robots[i]["y"]
		if(testprint[y][x] == ".")
			testprint[y][x] = "1"
		else{
			let current = parseInt(testprint[y][x])
			testprint[y][x] = (current + 1).toString()
		}
	}

	let stroutput = ""
	for(let i = 0; i < height; i++){
		stroutput += testprint[i].join("") + "\n"
	}

	return stroutput
}

function getCoordinateQuadrant(x: number, y: number, planewidth: number, planeheight: number) {
	let halfhorizontal = Math.floor(planeheight / 2)
	let halfvertical = Math.floor(planewidth / 2)

	if (y > halfhorizontal && x > halfvertical) return 1
	if (y > halfhorizontal && x < halfvertical) return 2
	if (y < halfhorizontal && x < halfvertical) return 3
	if (y < halfhorizontal && x > halfvertical) return 4
	return 0
}

function solution2(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let solution = 0

	let width = 101
	let height = 103

	let robots: object[] = [{ x: 0, y: 0, vx: 0, vy: 0 }]
	robots.pop()

	// l.og(lines)
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].trim()
		let next = {}

		next["x"] = parseInt(line.split(",")[0].split("=")[1])
		next["y"] = parseInt(line.split(",")[1].split(" v")[0])
		next["vx"] = parseInt(line.split("v=")[1].split(",")[0])
		next["vy"] = parseInt(line.split("v=")[1].split(",")[1])

		robots.push(next)
	}
 
	let i = 0
 
	// l.og("Initial", robots)
	// printLegible(robots, width, height)
	while (!hasAnyOverlap(robots)){
		// console.log("Second", i+1)
		for (let j = 0; j < robots.length; j++){
			robots[j]["x"] += robots[j]["vx"]
			robots[j]["y"] += robots[j]["vy"]
			while (robots[j]["x"] < 0)
				robots[j]["x"] = width + robots[j]["x"]
			while (robots[j]["y"] < 0)
				robots[j]["y"] = height + robots[j]["y"]
			while (robots[j]["x"] >= width)
				robots[j]["x"] = robots[j]["x"] - width
			while (robots[j]["y"] >= height)
				robots[j]["y"] = robots[j]["y"] - height
		}
		i++
	} 

	solution = i
	console.log(getLegible(robots, width, height))
	return solution || "Incomplete"
}

function hasAnyOverlap(robots: object[]){
	return getLegible(robots, 101, 103).indexOf("1111111") != -1
}

export default { solution1, solution2 }

class l {
	static og = (...value: any) => console.log(...value)
}