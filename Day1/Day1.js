const fs = require('fs');

function readFile(filename){
  const contents = fs.readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr;
}

function partOne(arr){
	let sum = 0;
	let max = 0;
	
	arr.forEach(element => {
		if (element !== "") {
			sum = parseInt(element) + sum;
		}
		else {
			if (sum > max)
				max = sum;
		
		sum = 0;
		}
	})
	
	console.log(max);
}

function partTwo(arr) {
	let elf1 = 0;
	let elf2 = 0;
	let elf3 = 0;
	let sum = 0;
	let max = 0;

	arr.forEach(element => {
		if(element !== ""){
			sum = parseInt(element) + sum;
		}
		else{
			if(sum > max){
				max = sum;
				elf3 = elf2;
				elf2 = elf1;
				elf1 = max;
			}
		
		sum = 0;
		}
	})

	console.log(elf1 + elf2 + elf3);
}

const arr = readFile('./Day1/Data.txt');
partOne(arr);
partTwo(arr);
