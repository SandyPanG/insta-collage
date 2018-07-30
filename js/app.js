function comenzar(){
  var imagenes = document.querySelectorAll("#contenido img");
 
  for (var i=0; i<imagenes.length; i++) {
   imagenes[i].addEventListener("dragstart", comenzamos_arrastrar,false);
  }
 
  
 
  elem_destino = document.getElementById("collage");
 
  elem_destino.addEventListener("dragenter", function(e){
 
   e.preventDefault();},false);
 
 
  elem_destino.addEventListener("dragover", function(e){
 
   e.preventDefault();},false); 
 
  elem_destino.addEventListener("drop",soltado,false);
  
 
   
   
 }
 
 
  function comenzamos_arrastrar(e){
   var elemento = e.target;
   e.dataTransfer.setData("Text", elemento.getAttribute("id"));
  }
 
  function soltado(e) {
 
   e.preventDefault();
   var id = e.dataTransfer.getData("Text");
 
   var src = document.getElementById(id) .src;
 
   elem_destino.innerHTML="<img src='" + src + "'>";
  }
 
 
 
 
 window.addEventListener("load", comenzar, false);﻿
  
 
 

