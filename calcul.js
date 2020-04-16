const screen = document.querySelector('.screen>span');
const digits = Array.from(document.querySelectorAll('.digit'));
const operators = Array.from(document.querySelectorAll('.operator'));
const allClear = document.querySelector('.clear');

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

function saveDigit() {
    console.log(this);
}

function operation() {
    console.log(this.innerText);
}