class  Engen {
    constructor(power) {
        this.power = power;
    }
    start(){
        console.log(`${this.power} started`);
    }
}

class Wheel{
    constructor(wheel){
        this.wheel = wheel;
    }
    roll(){
        console.log(`roll size: ${this.wheel} - rolling`);
    }
}


class Car{
    constructor(brand, power, wheelSize){
        this.brand = brand;
        this.power = new Engen(power);
        this.wheelSize = [new Wheel(wheelSize),new Wheel(wheelSize),new Wheel(wheelSize),new Wheel(wheelSize)];
    }

    start(){
        console.log(`Car ${this.brand} started`);
        this.power.start();
        this.wheelSize.forEach(will => will.roll()) ;
    }
}


const car = new Car('Nisan', 150, 17);
car.start()
const car2 = new Car('Nisan', 130, 18);
car.start()
