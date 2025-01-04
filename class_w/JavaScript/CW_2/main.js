console.log(getNameAndLastname('Dima', 'Tomchuk'))

function getNameAndLastname(firstName, lastName) {
    const getError = (message) => {
        return `dont have ${ message } fild`
    }
    const str = 'hello user:';
    // if (!firstName?.length || !lastName?.length) {
    if (!firstName?.length) {
        return getError('first name')
    }
    if (!lastName?.length) {
        return getError('lastname')
    }
    // }
    return `hello user: ${ firstName } ${ lastName }!!`;
}

console.log(getNameAndLastname('stalker'))
console.log(getNameAndLastname(''))

// (function (){
//     console.log('hello anonymous')
// }())
function factial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factial(n - 1)
}

// 5*4*3*2*1*0
console.log(factial(5))

function outer() {
    let message = 'Hi';

    function inner() {
        console.log(message)
    }

    return inner
}


const myClosure = outer();

myClosure()


function createCounter() {
    let counter = 0;
    return function () {
        counter += 1;
        return counter
    }
}

const conter = createCounter();
console.log(conter())
console.log(conter())

const obj = {
    name: 'Dima',
    lastname: 'Tomchuk',
    getFullName() {
        return this.name + ' ' + this.lastname
    }
}

const fullname = Object.assign({}, obj);
// fullname.name = 'Vasay';
console.log(fullname.getFullName())
console.log(obj.getFullName())
const stringObj = JSON.stringify(obj)
console.log(JSON.parse(stringObj))

function caluklate(...arg) {
    console.log(arg)
}

const numb = [1, 2, 3, 4]
caluklate(numb, numb, 'asdasd')
// console.log(...numb)
let i = 0
while (i < 6) {
    console.log('while:', i)
    i++
}

do {
    console.log('do: ', i)
    i++
} while (i < 16)


for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        console.log(i + ' ' + j)
    }
}
const day = prompt('day?')
console.log(getS(day))
// if ('ПН' === day) {
//     console.log('Понеділок')
// } else if ('ВТ' === day) {
//     console.log('ВТ')
// } else if ('СР' === day) {
//     console.log('СР')
// } else if ('ЧТ' === day) {
//     console.log('ЧТ')
// } else if ('ПТ' === day) {
//     console.log('ПТ')
// } else if ('СБ' === day) {
//     console.log('СБ')
// } else if ('НД' === day) {
//     console.log('НД')
// } else {
//     console.log('не день')
// }
function getS(day) {
    switch (day) {
        case 'ПН':
            return 'Важкий день Понеділок';
        case 'ВТ':
        case 'СР':
            return 'ДЕнь праці'
        case 'ЧТ':
             return  'Маленька пятниця';
    }
}


const size = 8;
const whileCell = '⬜';
const blackCell = '⬛';

for (let row = 0; row < size; row++) {
    let line  = '';
    for (let col = 0; col < size; col++) {
        line  += (row + col) % 2 === 0 ? blackCell : whileCell
    }
    console.log(line)
}
