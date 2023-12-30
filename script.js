document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.calculator .buttons button');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    let display = document.getElementById('display');
    let currentInput = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button.textContent);
        });
    });

    equalsButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearDisplay);

    function handleButtonClick(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    function calculate() {
        try {
            const sanitizedInput = currentInput.replace(/[^-()\d/*+.]/g, '');
            const result = new Function('return ' + sanitizedInput)();
            display.value = result;
            currentInput = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
    
});
