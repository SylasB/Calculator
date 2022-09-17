let sum = [];

function add(number, number2) {

}

function one() {
    sum.push('1');
    return sum;
    console.log(`${sum}`);
}

const screen = document.querySelector(".screen");
const output = document.createElement('p');
output.classList.add('output');
output.textContent = `${sum}`;

screen.appendChild(output);

for (i = 0; i < sum.length; i++) {

}

console.log(sum);