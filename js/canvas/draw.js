// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var SIZE = 32;

// Draw everything
var render = function () {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for (var i=0; i < funnyObjects.length; i++){
    var f = funnyObjects[i];
    ctx.drawImage(funnyImage, f.x  , f.y    ,SIZE, SIZE);
  }
};
