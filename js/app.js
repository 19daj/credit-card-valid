function isValidCard() {
var arrayOfInverseNumbers = [];
var arrayOfMultiply = [];
var stringOfMultiply;
var sumOfNumbersInThePositionEven = 0;
var sumOfNumbersInThePositionImpar = 0;
var sumTotal;

do {
  var numberOfCreditCard = prompt("Hola, por favor ingresa el número de tu tarjeta de crédito. ¡Gracias!");
  console.log(numberOfCreditCard);

  if (numberOfCreditCard === null) {//Si el usuario clickea en cancelar
      break;
  }

  for (var i = 0; i < numberOfCreditCard.length; i++) {
    if (numberOfCreditCard.charCodeAt(i) < 48 || numberOfCreditCard.charCodeAt(i) > 57) {//Para identificar si el usuario ingresa cualquier otro caracter diferente a un número
      alert ("Por favor escribe únicamente el número de la tarjeta de crédito. Gracias");
        break;
    }
  }

} while (!numberOfCreditCard);//Mientras el usuario no ingrese los datos correctos (número) el cuadro de diálogo seguirá apareciendo

for (var j = numberOfCreditCard.length - 1; j >= 0; j--) {
  arrayOfInverseNumbers.push(numberOfCreditCard[j]);//Se obtiene un array con los números inversos
}
console.log(arrayOfInverseNumbers);

for (var k = 1; k < arrayOfInverseNumbers.length; k += 2) {
  arrayOfMultiply.push(arrayOfInverseNumbers[k] * 2);//Se obtiene el doble de los números que se encuentran en las posiciones pares
}
console.log(arrayOfMultiply);

stringOfMultiply = arrayOfMultiply.join("");//El previo array se transforma en un string para de esta manera poder sumar cada dígito(previa conversión a número)
console.log(stringOfMultiply);

for (var l = 0; l < stringOfMultiply.length; l++) {
  sumOfNumbersInThePositionEven += parseInt(stringOfMultiply[l]);//Se obtiene la suma de los números que se encuentran en la posición par
}
console.log(sumOfNumbersInThePositionEven);

for (var m = 0; m < arrayOfInverseNumbers.length; m += 2) {
  sumOfNumbersInThePositionImpar += parseInt(arrayOfInverseNumbers[m]);//Se obtiene la suma de los números que se encuentran en la posición impar
}
console.log(sumOfNumbersInThePositionImpar);

sumTotal = sumOfNumbersInThePositionEven + sumOfNumbersInThePositionImpar; //Suma total(posición par + posición impar)
console.log(sumTotal);

if (sumTotal % 10 === 0) {//Si el residuo de la suma total / 10 es igual a cero retorna válida, caso contrario retorna inválida
  return "Válida";
}
  return "Inválida";

}

//Se imprime si la tarjeta de crédito es válida o válida, se ejecuta la función al llamarla
var answers = document.getElementById("answer").innerHTML = "Tu tarjeta de crédito es: " + isValidCard();
