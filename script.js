// JavaScript Fundamentals
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;

console.log(stringVar);  // Print stringVar to the console
console.log(numberVar);  // Print numberVar to the console
console.log(booleanVar); // Print booleanVar to the console

function add() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result = num1 + num2;
    document.getElementById('result').textContent = `Result: ${result}`;
    console.log(result);  // Print result to the console
}

function subtract() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result = num1 - num2;
    document.getElementById('result').textContent = `Result: ${result}`;
    console.log(result);  // Print result to the console
}

function multiply() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result = num1 * num2;
    document.getElementById('result').textContent = `Result: ${result}`;
    console.log(result);  // Print result to the console
}

function divide() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    if (num2 === 0) {
        document.getElementById('result').textContent = 'Cannot divide by zero';
        console.log('Cannot divide by zero');  // Print error message to the console
    } else {
        let result = num1 / num2;
        document.getElementById('result').textContent = `Result: ${result}`;
        console.log(result);  // Print result to the console
    }
}

// Interactive Charts and Graphs using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
