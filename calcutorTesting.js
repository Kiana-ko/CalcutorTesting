let readline = require('readline');

function add(a, b) {
    return a + b;
  }

function substracter(a, b) {
    return a - b;
}

function multiplier(a, b) {
    return a * b;
}

function divider(a,b){
    return a / b
}

function percentgeGetter(a, b) {
    return a * b / 100 ; // First Number = 90, Second Number = 9, 9 dorsade adade 90 --> formula = 90 x 9 / 100, a x b / 100
}

function calculateSquare(number) {
  return Math.pow(number, 2); // or number ** 2
}



function positiveOrNegativeMaker(a, b) {
    const toggleSign = num => {
      if (num > 0) {
        return -num; // If the number is positive, make it negative
      } else if (num < 0) {
        return Math.abs(num); // If the number is negative, make it positive
      }
      return num; // If the number is zero, keep it as is
    };
  
    let resultA = toggleSign(a);
    let resultB = toggleSign(b);
  
    return [resultA, resultB];
  }
  
  

/*function clearUserInput(a,b){
    return 
}*/

  function calculator() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
     });
  
    rl.question('Enter the first number: ', num1 => {
      rl.question('Enter the second number: ', num2 => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        const result = add(num1, num2);
        const substractedResult = substracter(num1, num2);
        const multipliedResult = multiplier(num1,num2);
        let   percentageResult = percentgeGetter(num1,num2);
        let   divisionResult = divider(num1, num2);
        let   makeNegative = positiveOrNegativeMaker(num1);
        let   makePositive = positiveOrNegativeMaker(num2);
        let   squaredNumber1 = calculateSquare(num1);
        let   squaredNumber2 = calculateSquare(num2);
        console.log(`${num1} + ${num2} = ${result}`);
        console.log(`${num1} - ${num2} = ${substractedResult}`);
        console.log(`${num1} x ${num2} = ${multipliedResult}`); 
        console.log(`${num2} % of ${num1} --> ${num1} % ${num2} = ${percentageResult}`); // 9 Percent Of 90
        console.log(`${num1} / ${num2} = ${divisionResult}`);
        console.log(`${num1} -> ${makeNegative}`);
        console.log(`${num2} -> ${makePositive}`);
        console.log(`${num1}² -> ${squaredNumber1} `);
        console.log(`${num2}² -> ${squaredNumber2}`);
        rl.close();
      });
    });
  }
  
  calculator();