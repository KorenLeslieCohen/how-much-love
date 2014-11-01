$(document).ready(function() {

  $('#clueless1, #clueless2, #clueless3, #clueless4, #clueless5, #help').hide();
  var aboutArr = [$('#clueless1').html(), $('#clueless2').html(), $('#clueless3').html(), 
    $('#clueless4').html(), $('#clueless5').html(), $('#clueless6').html(), 
    $('#clueless7').html(), $('#help').html()];
  var place = [];

  function clueless() {
    for (var i in aboutArr) {
      place[i] = aboutArr[i];
      // console.log(aboutArr[i]);
      var max = 5;
      var j = 0;
      setTimeout(function() {
        j += 1;
        // console.log(j);
        $('.clueless').html(place[j]);
        // console.log(place[j]);
      }, 3000 * i);
    }
  }

clueless();

});