let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        if (display.value.trim() === '') {
            alert("Please enter a valid expression");
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}