

//Run the function timer after 1000 milliseconds
window.setTimeout (timer, 1000);

function timer() {
	console.log("Timer Function Ran.");
}




//Run the function interval every 3 seconds
window.setInterval (interval, 3000);

function interval () {
	console.log("Interval Function Ran.");
}




//Run the function interval every 700 milliseconds
//for 10 turns, then clear it.
var interval = window.setInterval (myInt, 700);
var i=1;
function myInt () {
	if (i < 10) {
		console.log(i);
	}
	else {
		window.clearInterval(interval);
		console.log("Timer Cleared");
	}
	i++;
}


//Timer Object
var timer = {
	start: function() {
		var self = this;
		window.setInterval( function() {self.tick();}, 1000 );
	},
	tick: function() {
		console.log("Timer Function Ran.");
	}
};

timer.start();

