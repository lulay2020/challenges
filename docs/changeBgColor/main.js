// let colors = ["#FF6347", "#FF4500", "#FF7F50", "#DC143C", "#FFA07A", "#B22222"]

// let button = document.querySelector("button");

// let body = document.querySelector("body");

// let hex = document.querySelector("span");
// button.onclick = function (){
// 	let random = Math.floor(Math.random()*colors.length);
// 	let current = body.style.backgroundColor = colors[random];
// 	hex.innerHTML = current;
// }

let colors = ['a','b','c','d','e','f',0, 1, 2, 3, 4, 5, 6];

let button = document.querySelector("button");

let body = document.querySelector("body");

let hex = document.querySelector("span");

button.onclick = ()=>{
	let hexColor = "#";
	for (var i = 0; i < 6; i++) {
		let random = Math.floor(Math.random()*colors.length);
		hexColor+= colors[random];
	}
	body.style.backgroundColor = hexColor;
	hex.innerHTML = hexColor;	
}



