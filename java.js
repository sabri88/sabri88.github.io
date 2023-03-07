//*Pagina Index 
document.getElementById('pop').onmouseover = function () {
document.getElementById('pop').innerHTML = "Bienvenidos";
}
document.getElementById('pop').onmouseout = function () {
document.getElementById('pop').innerHTML = "Mi Curriculum";
}
document.getElementById('foto').addEventListener("mouseover", function() {
  alert("Entra a la seccion Experiencia para saber más..");
});  

/* Pág Experiencia
document.getElementById('cambiaColorT').addEventListener("mouseover",  function() {
 document.getElementById('cambiaColorT').style.color="red"; 
})
document.getElementById('cambiaColorT').addEventListener("mouseout",  function() {
  document.getElementById('cambiaColorT').style.color="black";
})

//* habilidades 
document.getElementById('bigger').onmouseover = function () { 
  document.getElementById('bigger').style.fontSize="2em";
}
document.getElementById('bigger').onmouseout = function () { 
  document.getElementById('bigger').style.fontSize="1em";
}
 
//* Contacto 
document.getElementById('fname').onchange = function lowerCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toLowerCase();
} 
 */