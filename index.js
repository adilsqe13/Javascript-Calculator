function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    let operation = document.getElementById("dropdown").value;
    switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "substraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            result = num1 / num2;
            break;
        default:
            result = "invalid operation";
            break;
    }

    // this will work when you dont give any input but click claculate button
    if (isNaN(result)) {
        document.getElementById("result").textContent = "Enter Inputs...";

    }
    else {
        document.getElementById("result").textContent = result;
    }
}

// Reset Function
function reset() {
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    document.getElementById("dropdown").value = "addition";
    document.getElementById("result").textContent = "0";


}

