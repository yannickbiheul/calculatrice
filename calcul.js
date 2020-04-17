const screen = document.querySelector('.screen>span');
const digits = Array.from(document.querySelectorAll('.digit'));
const operators = Array.from(document.querySelectorAll('.operator'));
const allClear = document.querySelector('.clear');

let temp = "";

const nums = {
    num1: 0,
    num2: 0,
    operator: null
};

let fontSize = 3;
screen.style.fontSize = "3em";

/* Utilisation de map() pour parcourir chaque entrée du tableau */
digits.map(digit => {
    digit.addEventListener("click", saveDigit);
});

operators.map(operator => {
    operator.addEventListener("click", operation);
});

allClear.addEventListener("click", function() {
    console.log("clear");
})

function operation() {
    console.log(this.getAttribute("data-key"));
}

function saveDigit() {
    const digit = this.getAttribute("data-key");

    temp += digit;

    write(temp)
}

function write(num) {
    screen.innerText = formatNum(num);
}

function formatNum(num) {
    if (screen.clientWidth > window.innerWidth * 0.8) {
        fontSize *= 0.8;
        screen.style.fontSize = `${fontSize}em`;
    }
    return parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
}

