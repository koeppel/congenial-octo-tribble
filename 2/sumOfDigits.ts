function sumOfDigits(input: number): number {
	let outPut: number = 0;
	const inputAsString: string = input.toString();

	for (let i = 0 ; i < inputAsString.length ; i++) {
		outPut += Number.parseInt(inputAsString.charAt(i));
	}

	return outPut;
}

[123, 456, 789, 335].forEach((number) => {
	console.log(`Sum of digits for '${number}': ${sumOfDigits(number)}`);
});