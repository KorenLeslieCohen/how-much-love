$(document).ready(function() {
  $('#clueless1, #clueless2, #clueless3, #clueless4, #clueless5, #clueless6, #clueless7, #clueless8, #clueless9, #help').hide();
  var aboutArr = [$('#clueless1').html(), $('#clueless2').html(), $('#clueless3').html(), 
    $('#clueless4').html(), $('#clueless5').html(), $('#clueless6').html(),
    $('#clueless7').html(), $('#clueless8').html(), $('#clueless9').html(), 
    $('#help').html()];
  var place = [];

  function clueless() {
    for (var i in aboutArr) {
      place[i] = aboutArr[i];
      var max = 5;
      var j = 0;
      setTimeout(function() {
        j += 1;
        $('.clueless').html(place[j]);
      }, 4000 * i);
    }
  }

clueless();

});