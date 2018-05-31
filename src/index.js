//Declaramos las variables:
let string = document.getElementById("texto");//string para el texto que se ingresará
let offset = document.getElementById("spaces");//para el número de posiciones que el cifrado desplace cada caracter 

//Evento del botón 1 (el que cifra), el resultado va a mostrar el texto cifrado.
document.getElementById("boton1").addEventListener("click",()=>{
    document.getElementById("resultado").value=cipher.encode(offset.value,string.value);
});
//Evento del botón 2 (el que descifra), el resultado va a mostrar el texto descifrado.
document.getElementById("boton2").addEventListener("click",()=>{
    document.getElementById("resultado").value=cipher.decode(offset.value,string.value);
});
//Llamando el botón del html a través de su ID "boton1" del botón de html 
//y addEventListener tipo click para ejecutar función cifrar
document.getElementById("boton1").addEventListener("click", ciframe);
function ciframe() {//Function pulled from cipherWithOffset para el resultado
  document.getElementById("resultado").innerHTML = (cipher.createCipherWithOffset(offset)).encode(string);}
//Llamando el botón del html a través de su ID "boton2" del botón de html 
//y addEventListener tipo click para ejecutar función cifrar
document.getElementById("bonton2").addEventListener("click", desciframe);
function desciframe() {//Function pulled from cipherWithOffset para el resultado
  document.getElementById("resultado").innerHTML = (cipher.createCipherWithOffset(offset)).decode(string);}