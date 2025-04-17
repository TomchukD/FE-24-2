class CoffeeService {
    makeCoffe(){
        return '☕ Done'
    }
}

class CoffeComponent{
    constructor(CoffeeService) {
    this.coffeService = CoffeeService;
    }

    orderCoffe(){
        console.log(this.coffeService.makeCoffe())
    }
}

const coffeeService = new CoffeeService();
const coffe  = new CoffeComponent(coffeeService);
coffe.orderCoffe();

