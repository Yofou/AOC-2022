import { parseInput } from "../utils/parseInput";

const FILE = "./Day-1/test.txt";
const collectTotalCalories = async () => {
	const parsed = await parseInput(FILE, (val) => parseInt(val, 10));
	parsed.pop();

	const collect = parsed.reduce<number[][]>(
		(total, curr) => {
			if (isNaN(curr)) {
				total.push([]);
			} else {
				total[total.length - 1].push(curr);
			}

			return total;
		},
		[[]]
	);

	const totalCalories = collect.reduce<number[]>((total, curr) => {
		total.push(curr.reduce((total, curr) => total + curr, 0));
		return total;
	}, []);

	return totalCalories;
};

const partOne = async () => {
	const totalCalories = await collectTotalCalories();
	console.log(totalCalories)
	const maxCalories = totalCalories.reduce(
		(max, curr) => (curr > max ? curr : max),
		totalCalories[0]
	);

	console.log("part 1");
	console.log(maxCalories);
};

const partTwo = async () => {
	const totalCalories = await collectTotalCalories();
	const sortedCalories = totalCalories.sort((a, b) => b - a);

	console.log("part 2");
	console.log(sortedCalories[0] + sortedCalories[1] + sortedCalories[2]);
};

partOne();
partTwo();
