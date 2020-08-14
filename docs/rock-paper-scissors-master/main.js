// RULES VARs
const displayRules = document.querySelector('.rules-btn');
const exitRules = document.querySelector('.exit-rules');
const rules = document.querySelector('.rules-layer');
// GAME VARs
const main = document.querySelector('.main');
const secondary = document.querySelector('.secondary');
const circles = document.querySelectorAll('.circle');
const displayScore = document.querySelector('.display-score');
let score = 0;
let [paper, scissors, rock] = circles;
let arr = [paper, scissors, rock];
let random = Math.floor(Math.random() * 3);
let housePicked = arr[random];
let personPicked;

// RESET VAR
const reset = document.querySelector('.play-again');

// GET OR SET SCORE IN LOCAL STORAGE
if (localStorage.getItem('score') == null) {
	localStorage.setItem('score', score);
	displayScore.textContent = score;
} else {
	score = localStorage.getItem('score');
	displayScore.textContent = score;
}

// GAME LOGIC
paper.onclick = ()=> {
	personPicked = paper;
	hideCircles();
	displayPicked();
	displayWinner();
};

scissors.onclick = ()=> {
	personPicked = scissors;
	hideCircles();
	displayPicked();
	displayWinner();
};

rock.onclick = ()=> {
	personPicked = rock;
	hideCircles();
	displayPicked();
	displayWinner();
};

// RESET GAME
reset.onclick = ()=>{
	// Delete created divs
	const pickedCircles = document.querySelectorAll('.secondary .circle');
	for(circle of pickedCircles){
		circle.parentNode.removeChild(circle);
	}
	main.style.display = 'grid';
	secondary.style.display = 'none';
	// Reasign random value 
	random = Math.floor(Math.random() * 3);
	housePicked = arr[random];
}

// DISPLAY RULES 
displayRules.onclick = ()=> rules.classList.toggle('display-block');

exitRules.onclick = ()=> rules.classList.remove('display-block');


// FUNCTION DECLARETIONS SECTION
function hideCircles(){
	main.style.display = 'none';
}

function displayPicked(){
	secondary.style.display = 'flex';
	let housePickedContainer = document.querySelector('.house-picked');
	let youPickedContainer = document.querySelector('.you-picked');

	// Add the old content with the new content so innerHTML won't override the old content.
	housePickedContainer.innerHTML =  housePickedContainer.innerHTML + housePicked.outerHTML;
	youPickedContainer.innerHTML = youPickedContainer.innerHTML + personPicked.outerHTML; 
}

function displayWinner(){
	const winner = document.querySelector('.display-winner');

	if(	
		personPicked === paper && housePicked === paper ||
		personPicked === scissors && housePicked === scissors ||
		personPicked === rock && housePicked === rock)
	{
		winner.textContent = 'It is a tie';
	}

	else if(personPicked === paper && housePicked === scissors ||
			personPicked === scissors && housePicked === rock ||
			personPicked === rock && housePicked === paper)
	{
		winner.textContent = 'You Lose !';
		score--;
		displayScore.textContent = score;
		localStorage.setItem('score', score)
	}

	else if(personPicked === paper && housePicked === rock ||
			personPicked === scissors && housePicked === paper||
			personPicked === rock && housePicked === scissors)
	{
		winner.textContent = 'You win';
		score++;
		displayScore.textContent = score;
		localStorage.setItem('score', score)
	}
}


