(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.print = function(nm){
        console.log(speakWord + " " + nm);
    }  

    window.helloSpeaker = helloSpeaker;
})(window);