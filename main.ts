interface Vehicule {
    make : String,
    model: String,
    year: Number,
    start(): void
}

class Car implements Vehicule{
    make: String
    model: String
    year: Number;
    constructor( make: String, model: String, year: Number){
        this.make = make
        this.model = model
        this.year = year
    }
    start():void{
        console.log("Car engine started.")
    }
}

let myCar : Vehicule = new Car("MERCEDES", "GLA 250 SUV", 2025)

myCar.start()