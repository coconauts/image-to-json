// Handle keyboard controls
var keysDown = {};

addEventListener("mousemove", function(e) {
		if (funnyMethod != "erase") return;

		var rect = canvas.getBoundingClientRect();

  //  var x = e.pageX - SIZE /2 ;
		//var y = e.pageY - SIZE /2 ;
	//	var x = e.layerX;
	//	var y = e.layerY;
		var x = e.clientX - rect.left;
		var y = e.clientY - rect.top;
		funnyErase(x,y);
}, false);
