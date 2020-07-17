(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.print = function(nm){
    console.log(speakWord + " " + nm);
  }  

  window.byeSpeaker = byeSpeaker;
})(window);