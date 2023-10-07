(function() {
    let screen = document.querySelector('.answer');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    

    let expression = [];
    let inputString = '';


    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            //expression.push(event.target.value);
            //screen.value = expression.join(' ');
            const inputVal = event.target.value;
            if(inputVal === "=") {
                const output = calcExpression(inputString)
                screen.value = result;
                inputExpression = result.toString();
            } else if (inputVal === "C") {
                inputString = '';
                screen.value = '';
            } else {
                inputExpression += inputVal;
                screen.value = inputExpression;
            }
            console.log(expression);
        });
    });

    

   clear.addEventListener('click', function() {
    expression = [];
    screen.value = '';

   });

   equal.addEventListener('click', function() {
    try {
        screen.value = calc(expression);
    } catch (error) {
        screen.value ='error';
    }
   });

   function calcExpression(expression) {
    const array1 = expression.split(' ');

    if (array1.length <3) {
        return expression[0];
    }

    const num1 = parseFloat(array1[0]);
    const opSign = array1[1];
    const num2 = parseFloat(array1[2]);

    switch(opSign) {
        case '+':
            return Math.round(num1 + num2);
        case "-":
            return Math.round(num1 - num2);
        case "*":
            return Math.round(num1 * num2);
        case "/":
            if(num2 === 0) {
                return 'error cant divide by 0'
            }
            return Math.round(num1 / num2);
        default:
            return 'error'
    }
   }

   const finalAnswer = calcExpression(num1 + num2);
   console.log(finalAnswer);
   print(finalAnswer);
})(); 



   