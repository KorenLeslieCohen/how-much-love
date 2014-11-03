$(document).ready(function() {
  $('#clueless1, #clueless2, #clueless3, #clueless4, #clueless5, #clueless6, #clueless7, #help').hide();
  
  var aboutArr = [$('#clueless1').html(), $('#clueless2').html(), $('#clueless3').html(), 
    $('#clueless4').html(), $('#clueless5').html(), $('#clueless6').html(),
    $('#clueless7').html(), $('#help').html()];
  
  var placeholderArr = [];

  function clueless() {
    for (var i in aboutArr) {
      placeholderArr[i] = aboutArr[i];
      var j = 0;
      setTimeout(function() {
        $('.clueless').html(placeholderArr[j]);
        j += 1;
      }, 2500 * i);
    }
  }

  clueless();

});