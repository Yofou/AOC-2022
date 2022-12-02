import { parseInput } from "../utils/parseInput"

const translate = {
	"A": 'rock',
	"B": 'paper',
	"C": 'scissors',
	"X": 'rock',
	"Y": 'paper',
	"Z": 'scissors'
} as const

const winnersTable = {
	'rock': 'scissors',
	'paper': 'rock',
	'scissors': 'paper',
} as const

const numbersTable = {
	'rock': 1,
	'paper': 2,
	'scissors': 3
}

const DIR = "./Day-2/data.txt"
const partOne = async () => {
		type Codes = (keyof typeof translate)[]
		const output = await parseInput<Codes>(DIR, (val) => val.split(' ') as any)
		output.pop()
		
		let score = 0
		for (let challenge of output) {
			if (translate[challenge[1]] === translate[challenge[0]]) {
				// draw
				score += 3
			} else if (winnersTable[translate[challenge[1]]] === translate[challenge[0]]) {
				// won
				score += 6
			} else {
				// lost
				score += 0
			}

			score += numbersTable[translate[challenge[1]]]
		}

		console.log('part 1')
		console.log(score)
}

const losersTable = {
	'rock': 'paper',
	'paper': 'scissors',
	'scissors': 'rock',
} as const

const partTwo = async () => {
		type Codes = (keyof typeof translate)[]
		const output = await parseInput<Codes>(DIR, (val) => val.split(' ') as any)
		output.pop()
		
		let score = 0
		for (let challenge of output) {
			if (challenge[1] === 'X') {
				// lost
				score += 0
				score += numbersTable[winnersTable[translate[challenge[0]]]]
			} else if (challenge[1] === 'Y') {
				// draw
				score += 3
				score += numbersTable[translate[challenge[0]]]
			} else if (challenge[1] === 'Z') {
				// win
				score += 6
				score += numbersTable[losersTable[translate[challenge[0]]]]
			}
		}

		console.log('part 2')
		console.log(score)
}

partOne()
partTwo()
