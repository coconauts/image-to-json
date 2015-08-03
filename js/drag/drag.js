/**
Drag & drop script by:
 http://html5demos.com/dnd-upload
**/

var holder = document.getElementById('holder'),
    tests = {
      filereader: typeof FileReader != 'undefined',
      dnd: 'draggable' in document.createElement('span'),
      formdata: !!window.FormData,
      progress: "upload" in new XMLHttpRequest
    },
    support = {
      filereader: document.getElementById('filereader'),
      formdata: document.getElementById('formdata'),
      progress: document.getElementById('progress')
    },
    acceptedTypes = {
      'image/png': true,
      'image/jpeg': true,
      'image/gif': true
    },
    progress = document.getElementById('uploadprogress'),
    fileupload = document.getElementById('upload');

var sampleFile = new File([""], "images/sample.png")

function previewfile(file) {
  if (tests.filereader === true && acceptedTypes[file.type] === true) {
    var reader = new FileReader();

    reader.onload = function (event) {
        loadImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }  else {
    holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
    console.log(file);
  }
}

function loadImage(src) {
  $("#holder").empty();
  var image = new Image();
  image.src = src;

  image.onload = function() {
      if (image.width < image.height)   image.height = 250;
      else image.width = 250;
  };
  holder.appendChild(image);

  loadImagePixels(image.src, function(json) {
    loadJsonFromImage(json);
  });
}

function readfiles(files) {
    var formData = tests.formdata ? new FormData() : null;
    for (var i = 0; i < files.length; i++) {
      if (tests.formdata) formData.append('file', files[i]);
      previewfile(files[i]);
    }
}

if (tests.dnd) {
  holder.ondragover = function () { this.className = 'hover'; return false; };
  holder.ondragend = function () { this.className = ''; return false; };
  holder.ondrop = function (e) {
    console.log("On drop ", e, e.dataTransfer.files);
    this.className = '';
    e.preventDefault();
    if (e.dataTransfer.files.length == 0) {

      var src = $(".image-selected").attr("src");
      if (src) loadImage(src);
    } else readfiles(e.dataTransfer.files);
  }
} else {
  fileupload.className = 'hidden';
  fileupload.querySelector('input').onchange = function () {
    readfiles(this.files);
  };
}
