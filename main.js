const btn=document.querySelector(".btn");
const content=document.querySelector(".content");


const SpeechRecognition
=window.SpeechRecognition;

const Recognition=new SpeechRecognition();


Recognition.onstart=function(){


}

Recognition.onspeechend=function(){


}

Recognition.onresult=function(event){


}

btn.addEventListener("click", () =>{ Recognition.start() });