addEventListener("mouseup", function(){
  $(".image-selected").removeClass("image-selected");
});


$(".sample-image").on('dragstart', function(event) {
  console.log("Drag start ", this);
  $(this).addClass("image-selected");
});

$(".sample-image").on('dragend', function(event) {
  console.log("Drag end ", this);
  $(this).removeClass("image-selected");
});
