const fs = require('fs');

function readFile(filename){
  const contents = fs.readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);
	
  return arr;
}


function choiceValue(choice){
	if(choice === 'rock')
		choice = 'X';
	else if(choice === 'paper')
		choice = 'Y';
	else if(choice === 'scissors')
		choice = 'Z';
	
	switch(choice){
		case 'X':
			return 1;
		case 'Y':
			return 2;
		case 'Z':
			return 3;
	}
}

function partOne(a){
	let score = 0;

	for (let i = 0; i < a.length; i++){
		if(a[i][0] === 'A' && a[i][2] === 'X' || a[i][0] === 'B' && a[i][2] === 'Y' || a[i][0] === 'C' && a[i][2] === 'Z') //draw
				score = score + 3 + choiceValue(a[i][2]);
			
		else if(a[i][0] === 'A' && a[i][2] === 'Y' || a[i][0] === 'B' && a[i][2] === 'Z' || a[i][0] === 'C' && a[i][2] === 'X') //win
				score = score + 6 + choiceValue(a[i][2]);
			
		else //loss
				score = score + choiceValue(a[i][2]);
	}

	console.log(score);
}

function win(opponent){
	let choice = '';
	switch(opponent){
			
		case 'A':
			choice = 'paper';
			break;
		case 'B':
			choice = 'scissors';
			break;
		case 'C':
			choice = 'rock';
			break;
	}

	return choice;
}

function draw(opponent){
	let choice = '';	
	switch(opponent){
			
		case 'A':
			choice = 'rock';
			break;
		case 'B':
			choice = 'paper';
			break;
		case 'C':
			choice = 'scissors';
			break;
	}

	return choice;
	
}

function lose(opponent){
	let choice =  '';	
	switch(opponent){
			
		case 'A':
			choice = 'scissors';
			break;
		case 'B':
			choice = 'rock';
			break;
		case 'C':
			choice = 'paper';
			break;
	}

	return choice;
	
}

function partTwo(a){
	let elfChoice;
	let score = 0;

	for(let i = 0; i < a.length; i++){
		
		switch(a[i][2]){
			case 'X':
				elfChoice = lose(a[i][0]);
				score = score + choiceValue(elfChoice);
				break;
			case 'Y':
				elfChoice = draw(a[i][0]);
				score = score + 3 + choiceValue(elfChoice);
				break;
			case 'Z':
				elfChoice = win(a[i][0]);
				score = score + 6 + choiceValue(elfChoice);	
				break;
	}
	}

	console.log(score);
}

arr = readFile("./Day2/Data.txt");

partOne(arr);
partTwo(arr);