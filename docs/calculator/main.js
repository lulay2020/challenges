const btns = document.querySelectorAll(".btn");
let screen =document.querySelector('.screen');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');
let con = document.querySelector(".container");

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", ()=>{
		let number = btns[i].getAttribute("data-num");
		screen.value += number;
	})		
}

equal.addEventListener("click", ()=>{
	let value = eval(screen.value);
	screen.value = value;
	
})

screen.addEventListener("keyup", ()=>{
		if (event.keyCode === 13) {
			// event.preventDefault();
			equal.click();
		}
	})



clear.addEventListener("click", ()=>{
	screen.value = '';
})





