// -- Creates a Random Number
function alertRandom(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

var random = alertRandom(6);
console.log(random);

document.write('El numero aleatorio es: ' + random );

// -- Calcuates Area of Rectangle
function getArea(width, lenght, units) {
    var area = width * lenght;
    return area + ' ' + units;
}

console.log( getArea(10, 5, 'cm2') );


// -- Return a Random Number between 2 numbers

  // var num1 = parseInt(prompt('Enter the first value or lower number'));
  // var num2 = parseInt(prompt('Enter the second valur or upper number'));

function randomNumbers(lower, upper) {

  var lower = lower;
  var upper = upper;

   if(isNaN(lower) == true || isNaN(upper) == true) {
    console.log('Please, just enter numerical values!!');
  } else {
    if (lower > upper) { 
      randomNum = Math.floor(Math.random() * (lower - upper + 1)) + upper;
      return randomNum;
    } else {
      randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
      return  randomNum;
    }
  }
 
}

console.log('Número aleatorio ente dos numeros es: ' + randomNumbers('cero', 10));