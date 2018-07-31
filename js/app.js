$('document').ready(init);
		
        function init(){
            $('#pic1, #pic2, #pic3, #pic4, #pic5, #pic6').bind('dragstart', function(event) {
                event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
            });
            
  		    // bind the dragover event on the board sections
            $('#div1, #div2, #div3').bind('dragover', function(event) {
                event.preventDefault();
            });
			
			// bind the drop event on the board sections
  			$('#div1, #div2, #div3').bind('drop', function(event) {
            var notecard = event.originalEvent.dataTransfer.getData("text/plain");
            event.target.appendChild(document.getElementById(notecard));
            // x.css('heigth','auto';)
			// Turn off the default behaviour
			// without this, FF will try and go to a URL with your id's name
            event.preventDefault();
			});
        }



// function comenzar(){
//   var imagenes = document.querySelectorAll("#contenido img");
 
//   for (var i=0; i<imagenes.length; i++) {
//    imagenes[i].addEventListener("dragstart", comenzamos_arrastrar,false);
//   }
 
 
//   var elem_destino = document.querySelectorAll("#div1","#div2","#div3");
//   for (var i = 0 ; i < elem_destino.length; i++) {
//     elem_destino[i].addEventListener("dragenter", function(e){
 
//       e.preventDefault();},false);
    
    
//      elem_destino[i].addEventListener("dragover", function(e){
    
//       e.preventDefault();},false); 
    
//      elem_destino[i].addEventListener("drop",soltado,false);

 
 
//   function comenzamos_arrastrar(e){
//    var elemento = e.target;
//    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
//   }
 
//   function soltado(e) {
 
//    e.preventDefault();
//    var id = e.dataTransfer.getData("Text");
 
//    var src = document.getElementById(id).src;
 
//    elem_destino[i].innerHTML="<img src='" + src + "'>";
//    }  
//   }
// };
  
 
 
 
 
//  window.addEventListener("load", comenzar, false);﻿
  
 
 

