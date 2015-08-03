var funnyMethod = "erase";

$("#preview-white").click(function(){
  preview(white);
});

$("#preview-black").click(function(){
  preview(black);
});

$("#preview-other").click(function(){
  preview(other);
});

var preview = function(array){
  if (array.length == 0) return;
  loadFunny(array);
  $("#canvas-div").show();

  scrollCanvas();
}

var shake = function(modifier) {
  var intensity = 1;
  for (var i=0; i < funnyObjects.length; i++){
    var f = funnyObjects[i];
    var direction = parseInt(f.x * f.y * modifier )% 2;
    if (direction < 1) f.x += intensity;
    else f.x -= intensity;
  }
}

var funnyErase = function(x, y) {
  for (var i=0; i < funnyObjects.length; i++){
    var f = funnyObjects[i];
    //if (i == 0) console.log("Remove ",parseInt(x) , parseInt(f.x) , parseInt(y) , parseInt(f.y));
    if (contains(f, {x: x, y:y}, SIZE) ) funnyObjects.splice(i, 1);
  }
}

this.contains = function(obj, p, size){
  var contains =  p.x > obj.x && p.x < (obj.x + size) &&
    p.y > obj.y && p.y < (obj.y + size);
  return contains;
}
