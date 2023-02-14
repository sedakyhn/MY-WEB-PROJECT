var lang = {
  "sugar": "25%",
  "caffeine": "35%",
  "b12": "45%",
  "b3": "28%",
  "b6": "42%",
  "taurine": "25%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});

