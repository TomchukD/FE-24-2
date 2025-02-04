const btn = document.querySelector("#btn");
const list = document.querySelector(".list");

btn.addEventListener("click", (e) => {
    fetch('https://65dcf161e7edadead7ed2QQQ7ba.mockapi.io/Products', {
        method: 'POST',
        body: JSON.stringify(list),
        headers: {
            'Content-Type': 'application/json; multipart/form-data',
        },

    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to fetch list');
        }
        return res.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    })

})
let greet = '***';
names('Dimas')

function names(name) {
    greet += `HEllo ${ name }`;
}

console.log(greet);

const sum = (num1, num2 = 0) => {
    if (!(num1 || num2)) {
        return NaN;
    }
    return num1 + num2

};
console.log(sum(0, 2))


function calc(num1, num2, operatorFN) {
    return operatorFN(num1, num2)
}

function add  (num1, num2) { return num1 + num2};
const multyply = (num1, num2) => num1 * num2;

console.log(calc(11,22, add))
console.log(calc(13,24, multyply))


function factorial(num){
    if(num === 1) {
        return 1
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));

function counter(){
    let counter = 0;
    return function (){
        counter++;
        return counter;
    }
}
const CO = counter();
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
console.log(CO());
