var SpeechRecognition = window.webkitSpeechRecognition;


var textbox = document.querySelector("p");
var btn=document.querySelectorAll("button");
var content = '';

function red(e){
    var recognition = new SpeechRecognition();
    btn[0].disabled=true;
    if (content.length)content +='';
    recognition.start();
 recognition.onspeechend=function()
 {
     recognition.stop();
     btn[0].disabled=false;
 }
recognition.onresult=function(event){
    var  result =event.results;
    result[0][0].transcript[0]=result[0][0].transcript[0].toUpperCase;
    textbox.textContent += " "+result[0][0].transcript;

}
}
btn[0].addEventListener('click',red);
btn[1].addEventListener('click', function(e){
    e.preventDefault();
    textbox.textContent = '';
})

