var white = [];
var black = [];
var other = [];

var funnyObjects = [];

var loadFunny = function(json) {
  funnyObjects = [];
  for (var i= 0; i < json.length; i++){
    var j = json[i];
    var ojb = j;
    funnyObjects.push({
      x: j.x * SIZE,
      y: j.y * SIZE
    })
  }
}

var resetObjects = function(){
  white = [];
  black = [];
  other = [];
  funnyObjects = [];

  $("#canvas-div").hide();
}
