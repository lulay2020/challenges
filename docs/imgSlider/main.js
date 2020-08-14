let left = document.querySelector("#left");
let right = document.querySelector("#right");
let imgContainer = document.querySelector(".container");
let imgArr = [
'url("images/photo1.jpg")',
'url("images/photo2.jpg")',
'url("images/photo3.jpg")',
'url("images/photo4.jpg")',
'url("images/photo5.jpg")',
'url("images/photo6.jpeg")',
'url("images/photo7.jpg")',
'url("images/photo8.jpg")',
'url("images/photo9.jpg")',
'url("images/photo10.jpg")',
'url("images/photo11.jpg")',
'url("images/photo12.jpg")'
 ]
let counter = 0;



left.addEventListener("click", ()=>{
	if (counter === 0) {
		counter = imgArr.length;
		}		
	counter -- ;
	imgContainer.style.background = `${imgArr[counter]} center/cover no-repeat`;	
	console.log(counter)
})

right.addEventListener("click", ()=>{
	if (counter === imgArr.length -1) {
		counter = -1;
	}
	counter++;
	imgContainer.style.background = `${imgArr[counter]} center/cover no-repeat`;	
	console.log(counter)
})
