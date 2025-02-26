const a = {};

const arr = [];

class Car {
    info = '';
    constructor(brand = 'no brand', color = '#FFF') {
        this.brand = brand;
        this.color = color;
    }
    showBrand(){
        console.log(this.concatInfo());
    }

    concatInfo(){
        return `Brend: ${this.brand} \n color: ${ this.color}`;
    }
}

class Engene extends Car{
    constructor(brand, color, horsepower, v) {
        super(brand, color);
        this.horsepower = horsepower;
        this.v = v;
    }
    concatInfo(){
        return `Brend: ${this.brand} \n color: ${ this.color} \n V: ${this.v} \n Horsepower:${ this.horsepower}`;
    }
}

const brand2 = new Engene( 'mazda',  'blue', '270', '3l');
brand2.showBrand();

function Animal(name){
    this.name = name;
}
Animal.prototype.speak = function(){
    console.log(this.name);
}
const dog = new Animal('DOOOOG');
dog.speak();

class _Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name);
    }
}
const cat = new _Animal('cat');
cat.speak();
