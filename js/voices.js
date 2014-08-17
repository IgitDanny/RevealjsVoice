
function initialize () {
				Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				theme: Reveal.getQueryHash().theme,
				transition: Reveal.getQueryHash().transition || 'default'
				
			});
	chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()); 

	if(chrome){
		escucha();
		
	}else{
		alert("Usa chrome y escucharas una sorpresa");
	}
	
}


function escucha () {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.lang = "es";
	recognition.onresult = function (event) {

    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          
          if(event.results[i][0].transcript.trim()=="siguiente"){
          	
          			Reveal.right();
          	}else{
          		if(event.results[i][0].transcript.trim()=="regresa"){
          			Reveal.left()
          		}else{
          			if (event.results[i][0].transcript.trim()=="arriba") {
          				Reveal.up();
          			} else{
          				if (event.results[i][0].transcript.trim()=="abajo") {
          					Reveal.down();
          				}
          			}
          		}
          	}
          	
console.log(event.results[i][0].transcript.trim());
          }
         /*  if(event.results[i][0].transcript.trim() == "next"){
           	Reveal.right();
           }*/
          
        }
    }


recognition.onend = function() { console.log("Termine"); };
recognition.start();

}

window.onload += initialize();