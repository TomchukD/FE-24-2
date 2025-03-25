class CoffeeService {
    makeCoffe(){
        return '☕ Done'
    }
}

class CoffeComponent{
    constructor() {
    this.coffeService = new CoffeeService();
    }

    orderCoffe(){
        console.log(this.coffeService.makeCoffe())
    }
}


const coffe  = new CoffeComponent();
coffe.orderCoffe();

