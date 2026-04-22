//Ejercicio 2//

function puedeVotar (edad) {
  if (edad >= 18) {
    return "puede votar";
  }

  else {
    return "no puede votar";
  }
}

console.log(puedeVotar(15))

//Ejercicio 3//

function mayordeDos (num1, num2) {
  if (num1> num2) {
    return num1;
  }
  else if (num2> num1) {
    return num2;
  }
  else {
    return `${num1} y ${num2} tienen el mismo valor`;
  }
}

console.log(mayordeDos(13,15))

//Ejercicio 4//

function esDivisiblePorCinco(numero) {
  if (numero % 5 == 0) {
    return true;
  }
  else {
    return false;
  }

}

console.log(esDivisiblePorCinco(25))

//Ejercicio 5//

function clasificarNota(nota) {
  if (nota>=0 && nota<=100) {
    if(nota >=90) {
    return "Excelente";
  }
  else if(nota >= 70 && nota < 90) {
    return "Buena";
  }
  else if(nota >= 50 && nota < 70) {
    return "Regular";
  }

  else {
    return "Insuficiente";
  }
  }
  
}

console.log(clasificarNota(90))