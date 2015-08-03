var p = function(x,y){   return {x: x, y: y};  }

var loadImagePixels = function(image, callback){

  var img = new Image();
  img.src = image;
  img.onload = function() {
    console.log("Image loaded " + img.width + "x" +img.height);


      if (img.width > 200  || img.height > 200 ) {
        var msg = "Image is too big: " + img.width + "x"+ img.height + ". Max: 200x200";
        console.error(msg);
        $("#error").html(msg);
        return;
      }
      var canvas = document.createElement('canvas');
      document.body.appendChild(canvas);

     var ctx = canvas.getContext('2d');
     canvas.width  = img.width;
     canvas.height = img.height;
     ctx.drawImage(img, 0, 0);
     img.style.display = 'none';
     var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);

     var pixels = [];
     for(i=0;i<img.width;i++){
      pixels[i] = [];
       for(j=0;j<img.height;j++){
          var pixel = ctx.getImageData(i, j, 1, 1).data;
          pixels[i][j] = {r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3]};
          //console.log("Pixel ", pixel);
        }
     }
     if (image.width > image.height) SIZE = 500 / img.width  ;
     else SIZE = 500 / img.height  ;


     canvas.remove();
     callback(pixels);
  };

}

var loadJsonFromImage = function(pixels){
  var BLACK = {r: 0, g: 0, b: 0};
  var WHITE = {r: 255, g: 255, b: 255};

  resetObjects();

  console.log("LOaded pixels ", pixels);
  for(i=0;i<pixels.length;i++){
      for(j=0;j<pixels[i].length;j++){
          var pixel = pixels[i][j];
          if (isColor(pixel,WHITE)) white.push(p(i,j));
          else if (isColor(pixel,BLACK))  black.push(p(i,j));
          else other.push(p(i,j));
      }
    }
  loadFiles();
}

var loadFiles = function(){

  downloadJson($("#download-white"), white);
  $("#white-detected").html(white.length);

  downloadJson($("#download-black"), black);
  $("#black-detected").html(black.length);

  downloadJson($("#download-other"), other);
  $("#other-detected").html(other.length);
}

var isColor = function(rgb, color) {
  return rgb.r == color.r && rgb.g == color.g && rgb.b == color.b;
}
