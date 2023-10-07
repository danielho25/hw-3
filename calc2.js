(function() {
    let screen = document.querySelector('.answer');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    

    let expression = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            expression += event.target.value;
            screen.value = expression;
        });
    });

   clear.addEventListener('click', function() {
    expression = '';
    screen.value = '';

   });

   equal.addEventListener('click', function() {
    try {
        screen.value = calc(expression);
    } catch (error) {
        screen.value ='error';
    }
   });
})();

   