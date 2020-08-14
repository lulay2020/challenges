let shape = document.querySelector("#shape");
let displayTime = document.querySelector("#time");
let displayRecord = document.querySelector("#record");
let start = new Date().getTime();
let record = 10;

shape.addEventListener("click", function(){
	this.style.display = 'none';
	let end    = new Date().getTime(),
		time   = (end-start)/1000 ;

	if (time < record) {
		displayRecord.innerHTML = time;
		record = time;
	}else{
		displayTime.innerHTML = time;
	}
	appearAfterDelay();	

})

function makeShapeAppear(){
	let randomSize = (Math.random() * 200 + 100)+"px";
	shape.style.left = Math.random()* 400+"px";
	shape.style.top = Math.random()* 400+"px";
	shape.style.backgroundColor = getRandomColor();
	shape.style.width = randomSize;
	shape.style.height = randomSize;
	shape.style.display = 'block';
	start = new Date().getTime();
	if (Math.random() > 0.5) {            
        document.getElementById("shape").style.borderRadius = "50%";}
        else{
            document.getElementById("shape").style.borderRadius = "0";
            }
	}

function appearAfterDelay(){
	setTimeout(makeShapeAppear, Math.random()*1000);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

appearAfterDelay();