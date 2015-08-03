var downloadJson = function($anchor, json){
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
  //$('<a href="data:' + data + '" download="data.json">download JSON</a>');
  $anchor.prop("href", "data:"+data);
}

var randomBetween = function(f, to){
    return Math.floor(Math.random() * (to + 1)) + f;
  }

  var scrollCanvas = function() {
    var top = $("#canvas").offset().top
    $('html, body').animate({
          scrollTop: top
    }, 2000);
  }
