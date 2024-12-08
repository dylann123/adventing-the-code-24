const { readFileSync, writeFileSync } = require('fs')
const solutions = require('./solutions').default

const Enum = {
	INPUT: 'input.txt',
	TEST: 'test.txt',
	TEST1: 'test1.txt',
	TEST2: 'test2.txt',
	TEST3: 'test3.txt'
}

const inputdir = Enum.TEST2

const input = readFileSync(__dirname + "\\" + inputdir, 'utf8')

console.log(new Date().toLocaleString())
console.log('Solution 1:', solutions.solution1(input))
console.log('Solution 2:', solutions.solution2(input))