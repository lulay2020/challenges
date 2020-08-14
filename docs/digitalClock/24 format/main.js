let clock = document.querySelector("#clock");

function currentTime(){
	let date = new Date();
	let hour = updateTime(date.getHours());
	let min = updateTime(date.getMinutes());
	let sec = updateTime(date.getSeconds());

	clock.innerHTML = hour+":"+min+":"+sec;
} 

function updateTime(n){
	if (n < 10){
		return "0"+ n;
	}else{
		return n;
	}
}

currentTime();

setInterval(currentTime, 1000);


