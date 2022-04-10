var voiceRecognition= window.webkitSpeechRecognition //this api is to convert speech to text
var recognition= new voiceRecognition()
function startRecognition(){
  document.getElementById("textbox").innerHTML=" "
  recognition.start//it is a predefined function in the web speech API. This will convert the text to speech)

}

recognition.onresult= function(e){
    console.log(e)
}