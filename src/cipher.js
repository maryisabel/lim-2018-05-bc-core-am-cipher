/* El objeto windows cipher tendrá dos funciones (encode para cifrar y decode para descifrar), ambas
tienen dos parámetros: offset (número de espacios) y string (el texto que se desea cifrar). */
window.cipher = {
  //Función encode para cifrar el texto.
  encode : (offset,string) => {
    string=string.toUpperCase();//Para que el texto ingresado se convierta siempre en mayúscula
    let result = "";//El resultado.    
    /* Usamos el bucle for, inicializamos el iterador(i) en 0; comprueba que i es menor que la longitud 
    del texto ingresado; realiza la condicional if y else con éxito, e incrementa i en 1 después de
    cada pase del bucle. */
    /* string.charCodeAt(i) para que devuelva un número indicando el valor unicode del carácter; así
    obtenemos el número del código ASCII del texto ingresado. */
    for (let i=0; i<string.length; i++){     
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90) {//delimitamos en ASCII mayúsculas.
            result += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);
            //result+= obtenemos la letra del código ASCII(Fórmula código ASCII que nos da un número)
        } else {
            result += string.charAt(i);//Si lo ingresado no es ninguna letra, que se muestre tal cual. 
        }
    }
    return result;

  },
  //Función decode para descifrar el texto.
  decode : (offset,string) => {
    string=string.toUpperCase();
    let result = "";
    
    for (let i=0; i<string.length; i++){  
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90) {
            result += String.fromCharCode((string.charCodeAt(i) + 65- parseInt(offset)) % 26 + 65);
        } else {
        result += string.charAt(i); 
        }
    }
    return result;
  },
   //Función cipherWithOffset recibe offset y devuelve objetos con métodos encode y decode
   createCipherWithOffset(offset) {
    return {
      encode(string){return cipher.encode(offset, string);},//Método encode llamado en el resultado del index.js
      decode(string){return cipher.decode(offset, string);}//Método decode llamado en el resultado del index.js
    };
  }
};
