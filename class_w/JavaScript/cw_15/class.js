// - Інкапсуляція - об'єдання даннив та методів в 1 об'ект
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

// - НАслідування - створення нового классу на основі існуючого

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name);
    }
}

class DOG extends Animal {
    speak() {
        console.log(this.name + ' GAF GAF');
    }
}

const pat = new DOG('SNOOPDOG');
// pat.speak();

// - Поліморфізм - можливість перевизначання методів

class Shape {
    area() {
        return 0
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(10);
// console.log(circle.area());
// Абстракція - виділення тільки важливих арактеристик об'єкту
class Car {
    start() {
        this.#checkEngine()
        console.log('Car started')
    }

    #checkEngine() {
        console.log('Checking Engine')
    }
}

const car = new Car();
// car.start()


// Інкапсуляція + get/set

class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    get password() {
        if (!this.#password) {
            return '**';
        }
        return Array.from({length: this.#password.length}).fill('*').join('');
    }

    set password(value) {
        if (value.length >= 6) {
            this.#password = value;
        } else {
            console.log('Пароль не надійний')
        }
    }
}

const user1 = new User('Dima', '12345678');
console.log(user1.password);

// Поліморфізм через методи
class Payment {
    pay(amount) {
        console.log(`Оплата ${ amount } грн`)
    }
}

class CardPayment extends Payment {
    pay(amount) {
        console.log(`Оплата карткою на суму ${ amount } грн`)
    }
}

class CashPayment extends Payment {
    pay(amount) {
        console.log(`Оплата гатівкою на суму ${ amount }  грн `)
    }
}

const paymants = [new CardPayment(), new CashPayment()];
paymants.forEach(paymant => {
    paymant.pay(100)
})
