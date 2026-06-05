function calculateFactorial() {
    let num = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (num === "" || num < 0) {
        result.innerHTML = "Please enter a valid positive number!";
        return;
    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    result.innerHTML = "Factorial of " + num + " is: " + fact;
}