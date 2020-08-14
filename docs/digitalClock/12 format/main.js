let clock = document.querySelector("#clock");

function currentTime(){
	let date = new Date();
	let hour = twelveFormat(addZero(date.getHours()));
	let min = addZero(date.getMinutes());
	let sec = addZero(date.getSeconds());
	let period = addPeriod(hour);

	clock.innerHTML = `${hour}:${min}:${sec} ${period}`;
} 

function addZero(n){
	if (n < 10){
		return "0"+ n;
	}else{
		return n;
	}
}

function addPeriod(n){
	let period = "AM";
	if (n>=12) {
		period = "PM";
	}
	return period;
}

function twelveFormat(n){
	if (n > 12) {
		n -= 12; 
	}else if(n === 0){
		n = 12
	}
	return n;
}

currentTime();
setInterval(currentTime, 1000);