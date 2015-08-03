$(document).ready(function(){

  var randomImage = randomBetween(0,3);
  $("#sample-image-random").attr("src", "images/random-"+randomImage+".png");

});
