import utils from "../utils.js"

function solution1(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let sols = 0

	for (let i = 0; i < lines.length; i++) {
		let list = lines[i].split(' ')
		let listint = list.map(x => parseInt(x))

		let valid = true
		let type = (listint[0] - listint[1] > 0) ? 1 : -1
		for (let j = 0; j < listint.length - 1; j++) {
			let first = listint[j]
			let next = listint[j + 1]

			if (Math.abs(first - next) > 3 || type * (first - next) < 0 || first === next) {
				valid = false
				break
			}
		}
		if (valid)
			sols++
	}

	return sols || "Incomplete"
}

function solution2(input = "") {
	const fixed: string = input.trim().replace("\r", "")
	const lines: string[] = fixed.split('\n')
	let sols = 0

	for (let i = 0; i < lines.length; i++) {
		let list = lines[i].split(' ')
		let listint = list.map(x => parseInt(x))

		let valid = true
		let type = (listint[0] - listint[1] > 0) ? 1 : -1
		console.log(listint)
		for(let z = 0; z < listint.length; z++){
			valid = true
			let listintnew = [...listint]
			listintnew.splice(z, 1)

			for (let j = 0; j < listintnew.length; j++) {
				let first = listintnew[j]
				let next = listintnew[j + 1]
	
				if (Math.abs(first - next) > 3 || type * (first - next) < 0 || first === next) {
					valid = false
					break
				}
				
			}
			
			if (valid){
				sols++
				console.log(listintnew, "valid")
				break
			}else{
				console.log(listintnew, "invalid")
			}
		}
	}

	return sols || "Incomplete"
}


export default { solution1, solution2 }